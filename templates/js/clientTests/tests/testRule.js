il.uiTests.testRule = function(element,selector,test){
    il.uiTests.log.message(["Test Rule, Params",element,selector,test],"testRule",this.log.levels.debug);

    var passed =  test.variants.some(function(variant){
        return il.uiTests.testVariant(element,selector,variant);
    });

    if(test.not){
        return !passed;
    }
    return passed;
}