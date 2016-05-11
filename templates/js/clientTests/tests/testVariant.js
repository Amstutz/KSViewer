il.uiTests.testVariant = function(element,selector,testVariant){
    il.uiTests.log.message(["Test Variant, Params",element,selector,testVariant],"testVariant",this.log.levels.debug);

    var passed = false;
    switch(testVariant.type){
        case "contains":
            //passed = this.wording.minWords(this,entry,ruleType,rule,test);
            break;
        case "wording":
            passed = il.uiTests.wording(element,selector,testVariant);
            break;
        default:
            console.log("Unknown Type");
    }
    if(testVariant.not){
        return !passed;
    }
    return passed;
}