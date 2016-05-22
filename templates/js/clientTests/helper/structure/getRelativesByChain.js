il.uiTests.getRelativesByChain = function(element,selectors){
    if(!selectors || !selectors.length){
        throw Error("getRelatives By chain, empty selectors");
    }
    selectors.every(function(selector){
        element = $(il.uiTests.getRelatives(element,selector.type,selector.selector));
        return element;
    });
    return element;
}
