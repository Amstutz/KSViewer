il.uiTests.checkVisible = function(element){
    var rectElement = il.uiTests.getRect(element);
    var rectWindow =  {
        left: 0,
        top: 0,
        width: $(document).width(),
        height: $(document).height()
    }

    if(!il.uiTests.collisionCheck("collide",rectElement,rectWindow)){
        return false;
    }
    return element.is(":visible") && (element.css("visibility")!="hidden");
};