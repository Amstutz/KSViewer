il.uiTests.getRelativesByChain = function(element,selectors){
    if(!selectors || !selectors.length){
        return il.uiTests.getRelatives(element);
    }
    selectors.every(function(selector){
        element = $(il.uiTests.getRelatives(element,selector.type,selector.selector));
        return element;
    });
    return element;
}
