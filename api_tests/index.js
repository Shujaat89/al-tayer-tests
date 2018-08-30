const rp = require('request-promise');
const chai = require('chai');

let url = 'https://www.ounass.ae/categories/getcategorytree/';

describe('API TESTS', () => {
	it('should return status 200', async () => {
		await rp(url)
			.then((res) => {
				return true;
			});
	});

	it('should check children length greater or equal to 10', async () => {
		await rp(url)
			.then((res) => {
				let data = JSON.parse(res);
				chai.expect(data.children.length,' children length is not greator to or equal then 10').to.be.greaterThan(9); // equal or greater then 10
			});
	});

	it('should check every node has id / name / url', async () => {
		await rp(url)
			.then((res) => {
				let data = JSON.parse(res);

				itr = function (obj) {
					if (obj.level != 0) { //excluded 1st node
						chai.expect(obj,'category id not found').to.have.property('categoryId');
						chai.expect(obj,'URL not found for category id ',obj.categoryId).to.have.property('url');
						chai.expect(obj,'Name not found for category id',obj.categoryId).to.have.property('name');
					}

					if (obj.children && obj.children.length) {
						obj.children.forEach((child) => {
							itr(child);
						})
					}
				};
				itr(data);
				return true;
			});
	});

	it('should check image attribute at 3rd level', async () => {
		await rp(url)
			.then((res) => {
				let data = JSON.parse(res);

				let itr = (obj) => {
					if (obj.level == 3) {
						chai.expect(obj,'image found for category id ',obj.categoryId).to.not.have.property('image');
						chai.expect(obj.includeInMenu,'includeInMenu is true for category id '+obj.categoryId).to.be.equal(false);
					}

					if (obj.children && obj.children.length) {
						obj.children.forEach((child) => {
							itr(child);
						})
					}
				}

				itr(data);
				return true;
			});
	});

	it('should include at least 2 sub nodes', async () => {
		await rp(url)
			.then((res) => {
				let data = JSON.parse(res);

				itr = function (obj) {

					if (obj.children && obj.children.length) {
						obj.children.forEach((child) => {
							itr(child);
						})
					} else {
						var shoe = designer = false;
						obj.availableSortBy.forEach((sort) => {
							if (sort == "shoeSizeCode")
								shoe = true;
						});
						obj.availableSortBy.forEach((sort) => {
							if (sort == "designer" && shoe)
								designer = true;
						});
						chai.expect(shoe,'shoe sub node not found for category id '+obj.categoryId).to.be.equal(true);
						chai.expect(designer,'designer sub node not found for category id '+obj.categoryId).to.be.equal(true);
					}
				};

				itr(data);
				return true;
			});
	});

	it('should have featureLink at level 3', async () => {
		await rp(url)
			.then((res) => {
				let data = JSON.parse(res);

				itr = function (obj) {

					var regex = RegExp('/edits/*');
					if (regex.test(obj.featureLink)) {
						chai.expect(obj.level,'feature link not found for category id '+obj.categoryId).to.be.equal(3);
					}

					if (obj.children && obj.children.length) {
						obj.children.forEach((child) => {
							itr(child);
						})
					}
				};

				itr(data);
				return true;
			});
	});
});