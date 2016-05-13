il.uiTests.css = function(element,selector,testVariant){

    this.positioning = function(element, selectors,positioning){
        il.uiTests.log.message(["structure.amount params",element, selectors, operator, amount],"structure",this.log.levels.debug);

        var elements = il.uiTests.getRelativesByChain(element, selectors);

        if(!elements){
            return false;
        }

        var rectElement = il.uiTests.getRect(element);
        var rectForeignElement = il.uiTests.getRect(elements[0]);

        return  positioning.every(function(position){
            var passed = il.uiTests.collisionCheck(position.type,rectElement,rectForeignElement);
            if(positioning.not){
                passed = !passed;
            }
            return passed;
        });

        return il.uiTests.compareValues(operator,nrElements,amount,true);
    };


    switch(testVariant.subtype){
        case "positioning":
            return this.positioning(element, testVariant.selectors, testVariant.positioning);
    }
};