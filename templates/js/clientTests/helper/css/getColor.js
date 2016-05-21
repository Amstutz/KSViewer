il.uiTests.getColor = function(element){
    if(!element){
        return false;
    }
    var colors = [];
    var tmpElement = $(element);

    while(il.uiTests.getColorFromString(il.uiTests.getCSSProperty(tmpElement,"background-color")).alpha==0
        && tmpElement.parent().length && tmpElement.parent()[0].nodeName != "HTML"){
        tmpElement = tmpElement.parent();
    }

    colors["background-color"] = il.uiTests.getColorFromString(il.uiTests.getCSSProperty(tmpElement,"background-color"));
    colors["color"] = il.uiTests.getColorFromString(il.uiTests.getCSSProperty(element,"color"));
    colors["border-color"] = il.uiTests.getColorFromString(il.uiTests.getCSSProperty(element,"border-color"));

    return colors;
};