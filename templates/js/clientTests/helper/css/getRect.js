il.uiTests.getRect = function(element){
    if(!element){
        throw new Error('No valid Element in Get Rect');
    }
    if(!$(element).offset()){
        throw new Error('No valid Element-Offset in Get Rect');
    }

    return {
        left: $(element).offset().left,
        top: $(element).offset().top,
        width: $(element).height(),
        height: $(element).width()
    }
};