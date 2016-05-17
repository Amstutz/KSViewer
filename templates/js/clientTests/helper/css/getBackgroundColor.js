il.uiTests.getBackgroundColor = function(element){
    element = $(element);
    while(il.uiTests.getColorFromString(element.css("background-color")).alpha==0
        && element.parent().length){
        element = element.parent();
    }

    return il.uiTests.getColorFromString(element.css("background-color"));
};