exports.checkItemsOnThePage = function(expectedLength){
    browser.executeScript(function(){
        return document.querySelectorAll('button.toggle-favorites').length
    }).then(function(items){
        console.log('Checking expected items on the page');
        expect(items).toEqual(expectedLength);
    });
}