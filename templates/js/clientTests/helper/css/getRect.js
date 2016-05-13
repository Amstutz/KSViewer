il.uiTests.getRect = function(element){
    return {
        x: element.offset().left,
        y: element.offset().top,
        width: element.height(),
        height: element.width(),
    }
};