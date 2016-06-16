il.uiTests.checkVisible = function(element){
    var rectA = il.uiTests.getRect(element);
    var rectB = il.uiTests.getRect($('body'));

    if(!il.uiTests.collisionCheck("collide",rectA,rectB)){
        return false;
    }
    return element.is(":visible") && (element.css("visibility")!="hidden");
};