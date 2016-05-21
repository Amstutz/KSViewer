il.uiTests.getCSSProperty = function(element,property){
    if(!element || !property){
        return false;
    }
    return $(element).css(property);
};