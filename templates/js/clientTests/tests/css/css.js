il.uiTests.css = function(element,selector,testVariant){

    this.positioning = function(element, selectors,positioning){
        il.uiTests.log.message(["css.positioning params",element, selectors, positioning],"css",il.uiTests.log.levels.debug);

        var elements = il.uiTests.getRelativesByChain(element, selectors);

        if(!elements){
            return false;
        }

        var rectElement = il.uiTests.getRect(element);
        var rectForeignElement = il.uiTests.getRect(elements[0]);

        return  positioning.every(function(position){
            var passed = il.uiTests.collisionCheck(position.type,rectElement,rectForeignElement);
            if(position.not){
                passed = !passed;
            }
            il.uiTests.log.message(["css.collision return",passed,"not: "+position.not],"css",il.uiTests.log.levels.debug);
            return passed;
        });

    };


    switch(testVariant.subtype){
        case "positioning":
            return this.positioning(element, testVariant.selectors, testVariant.positioning);
    }
};