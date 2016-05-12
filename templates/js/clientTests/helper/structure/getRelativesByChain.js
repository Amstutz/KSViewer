il.uiTests.getRelativesByChain = function(element,selectors){
    selectors.every(function(selector){
        element = $(il.uiTests.getRelatives(element,selector.type,selector.selector));
        return element;
    });
    return element;
}
