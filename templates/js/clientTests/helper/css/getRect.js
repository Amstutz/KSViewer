il.uiTests.getRect = function(element){
    return {
        left: $(element).offset().left,
        top: $(element).offset().top,
        width: $(element).height(),
        height: $(element).width()
    }
};