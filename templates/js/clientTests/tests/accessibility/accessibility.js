il.uiTests.accessibility = function(element,selector,testVariant){

    this.focusable = function(element){
        il.uiTests.log.message(["accessibility.focusable params",element],"accessibility",il.uiTests.log.levels.debug);
        return il.uiTests.isFocusable(element);
    };
    this.tabbable = function(element){
        il.uiTests.log.message(["accessibility.tabbable params",element],"accessibility",il.uiTests.log.levels.debug);
        return il.uiTests.isTabbable(element);
    };
    this.labeled = function(element){
        il.uiTests.log.message(["accessibility.labeled params",element],"accessibility",il.uiTests.log.levels.debug);
        return il.uiTests.isLabeled(element);
    };
    this.ariaRole = function(element,role){
        il.uiTests.log.message(["accessibility.ariaRole params",element],"accessibility",il.uiTests.log.levels.debug);
        return il.uiTests.checkAttribute("isEqual",element,"role","button");
    };
    var element = il.uiTests.getRelativesByChain(element, testVariant.selectors);

    if(!element){
        return false;
    }

    switch(testVariant.subtype){
        case "focusable":
            return this.focusable(element);
        case "tabbable":
            return this.tabbable(element);
        case "ariaLabeled":
            return this.labeled(element);
        case "role":
            return this.ariaRole(element,testVariant.role);
    }
};