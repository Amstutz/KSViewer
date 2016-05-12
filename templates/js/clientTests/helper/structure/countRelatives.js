il.uiTests.countRelatives = function(element,selectors){
    var relatives = il.uiTests.getRelativesByChain(element,selectors);
    if(!relatives){
        return 0;
    }
    return relatives.length
}