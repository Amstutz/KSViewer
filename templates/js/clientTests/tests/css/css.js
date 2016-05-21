il.uiTests.css = function(element,selector,testVariant){

    this.positioning = function(elementA, elementB, positioning){
        il.uiTests.log.message(["css.positioning params",elementA, elementB,positioning],"css",il.uiTests.log.levels.debug);
        
        var rectA = il.uiTests.getRect(elementA);
        var rectB = il.uiTests.getRect(elementB);



        return  positioning.every(function(position){
            rectA = il.uiTests.stretchRecht(rectA,position.stretchHorizontalA,position.stretchVerticalA);
            rectB = il.uiTests.stretchRecht(rectB,position.stretchHorizontalB,position.stretchVerticalB);

            var passed = il.uiTests.collisionCheck(position.type,rectA,rectB);

            if(position.not){
                passed = !passed;
            }
            il.uiTests.log.message(["css.collision return",passed,"not: "+position.not],"css",il.uiTests.log.levels.debug);
            return passed;
        });

    };
    this.properties = function(elementA, elementB, properties){
        il.uiTests.log.message(["css.properties params",elementA, elementB, properties],"css",il.uiTests.log.levels.debug);

        return  properties.every(function(propertyRule){


            if(propertyRule.simulate && propertyRule.simulate.point == "before"){
                il.uiTests.simulateCssEvent(propertyRule.simulate.type);
            }

            var propertyA = il.uiTests.getCSSProperty(elementA,propertyRule.whichA);

            if(propertyRule.simulate && propertyRule.simulate.point == "between"){

                il.uiTests.simulateCssEvent(propertyRule.simulate.type);
            }

            var propertyB = il.uiTests.getCSSProperty(elementA,propertyRule.whichB);

            if(propertyRule.simulate){
                il.uiTests.simulateCssEvent("stop");
            }


            if(propertyA && propertyB){
                var passed = il.uiTests.propertyCheck(propertyRule.type,propertyA,propertyB);
            }
            else if(propertyA){
                var passed = il.uiTests.propertyCheck(propertyRule.type,propertyA,propertyRule.value);
            }
            else if(propertyB){
                var passed = il.uiTests.propertyCheck(propertyRule.type,propertyB,propertyRule.value);
            }else{
                return false;
            }

            if(propertyRule.not){
                passed = !passed;
            }

            il.uiTests.log.message(["css.backgroundColoring return",passed,"not: "+propertyRule.not],"css",il.uiTests.log.levels.debug);
            return passed;
        });

    };
    this.coloring = function(elementA, elementB, coloring){
        il.uiTests.log.message(["css.backgroundColoring params",elementA, elementB, coloring],"css",il.uiTests.log.levels.debug);

        return  coloring.every(function(colorRule){


            if(colorRule.simulate && colorRule.simulate.point == "before"){
                il.uiTests.simulateCssEvent(colorRule.simulate.type);
            }

            var colorsA = il.uiTests.getColor(elementA);

            if(colorRule.simulate && colorRule.simulate.point == "between"){

                il.uiTests.simulateCssEvent(colorRule.simulate.type);
            }

            var colorsB = il.uiTests.getColor(elementB);

            if(colorRule.simulate){
                il.uiTests.simulateCssEvent("stop");
            }

            var colorA = colorsA[colorRule.whichA];

            if(colorsB){
                var colorB = colorsB[colorRule.whichB];
            }

            if(colorA && colorB){
                var passed = il.uiTests.colorCheck(colorRule.type,colorA,colorB);
            }
            else if(colorA){
                var passed = il.uiTests.colorCheck(colorRule.type,colorA);
            }
            else if(colorB){
                var passed = il.uiTests.colorCheck(colorRule.type,colorB);
            }else{
                return false;
            }

            if(colorRule.not){
                passed = !passed;
            }

            il.uiTests.log.message(["css.backgroundColoring return",passed,"not: "+colorRule.not],"css",il.uiTests.log.levels.debug);
            return passed;
        });
    };

    var elementA = il.uiTests.getRelativesByChain(element, testVariant.selectorsA);
    var elementB;
    if(testVariant.selectorsB){
        elementB = il.uiTests.getRelativesByChain(element, testVariant.selectorsB);
    }

    if(!elementA){
        return false;
    }

    switch(testVariant.subtype){
        case "positioning":
            return this.positioning(elementA, elementB, testVariant.positioning);
        case "coloring":
            return this.coloring(elementA, elementB, testVariant.coloring);
        case "properties":
            return this.properties(elementA, elementB, testVariant.properties);
    }
};