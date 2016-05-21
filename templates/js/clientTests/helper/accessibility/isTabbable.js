il.uiTests.isTabbable = function(element){
    var selector = il.uiTests.getSelector(element);
    return $(selector+":tabbable").length > 0;
};
