il.uiTests.testVariant = function(element,selector,testVariant){
    il.uiTests.log.message(["Test Variant, Params",element,selector,testVariant],"testVariant",this.log.levels.debug);

    var passed = false;
    switch(testVariant.type){
        case "structure":
            passed = il.uiTests.structure(element,selector,testVariant);
            break;
        case "wording":
            passed = il.uiTests.wording(element,selector,testVariant);
            break;
            break;
        case "css":
            passed = il.uiTests.css(element,selector,testVariant);
            break;
        case "accessibility":
            passed = il.uiTests.accessibility(element,selector,testVariant);
            break;
        case "true":
            passed = true;
            break;
        default:
            throw new Error("Unknown variant type: ",testVariant.type);
    }
    if(testVariant.not){
        return !passed;
    }
    return passed;
}