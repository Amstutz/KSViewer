il.uiTests.checkVisible = function(element){
    return element.is(":visible") && (element.css("visibility")!="hidden");
};