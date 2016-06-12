il.uiTests.stretchRect = function(rect,ratioWidth,ratioHeight){
    var newRect = {};
    if(ratioHeight === undefined){
        ratioHeight = 1;
    }
    if(ratioWidth === undefined){
        ratioWidth = 1;
    }

    ratioWidth = parseFloat(ratioWidth);
    ratioHeight = parseFloat(ratioHeight);

    newRect.width = Math.abs(rect.width*ratioWidth);
    newRect.height = Math.abs(rect.height*ratioHeight);

    if(ratioWidth < 0){
        newRect.left = rect.left - Math.abs(rect.width*ratioWidth);
    }else{
        newRect.left = rect.left;
    }

    if(ratioHeight < 0){
        newRect.top = rect.top - Math.abs(rect.height*ratioWidth);
    }else{
        newRect.top = rect.top;
    }

    return newRect;
};