il.uiTests.structure = function(element,selector,testVariant){

    this.amount = function(element, selectors, operator, amount){
        il.uiTests.log.message(["structure.amount params",element, selectors, operator, amount],"structure",this.log.levels.debug);

        var nrElements = il.uiTests.countRelatives(element, selectors);

        if(!operator){
            operator = "=";
        }
        if(!amount){
            amount = 1;
        }
        il.uiTests.log.message(["structure.amount comparable",operator,nrElements,amount],"structure",this.log.levels.debug);
        return il.uiTests.compareValues(operator,nrElements,amount,true);
    };


    switch(testVariant.subtype){
        case "amount":
            return this.amount(element, testVariant.selectors, testVariant.operator,testVariant.amount);
    }
}


