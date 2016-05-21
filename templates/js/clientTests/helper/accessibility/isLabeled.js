il.uiTests.isLabeled = function(element){
    return il.uiTests.checkAttribute("isSet",element,"aria-label")
        || il.uiTests.checkAttribute("isSet",element,"aria-labeledBy")
        || il.uiTests.checkAttribute("isSet",element,"alt");
};
