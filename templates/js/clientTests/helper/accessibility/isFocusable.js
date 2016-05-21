il.uiTests.isFocusable = function(element){
    var selector = il.uiTests.getSelector(element);
    return $(selector+":focusable").length > 0;
};
