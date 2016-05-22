il.uiTests.testRule = function(element,selector,test){
    il.uiTests.log.message(["Test Rule, Params",element,selector,test],"testRule",this.log.levels.debug);

    if(!test.variants || !test.variants.length){
           throw Error("No valid variants");
    }

    var passed =  test.variants.some(function(variant){
        il.uiTests.log.message(["Test Rule, variant",variant],"testRule",il.uiTests.log.levels.debug);
        return il.uiTests.testVariant(element,selector,variant);
    });

    if(test.not){
        return !passed;
    }
    return passed;
}