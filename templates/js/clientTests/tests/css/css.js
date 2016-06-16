il.uiTests.css = function(element,selector,testVariant){

    this.positioning = function(elementA, elementB, positioning){
        il.uiTests.log.message(["css.positioning params",elementA, elementB,positioning],"css",il.uiTests.log.levels.debug);
        
        var rectA = il.uiTests.getRect(elementA);
        var rectB = il.uiTests.getRect(elementB);



        console.log(rectB);

        return  positioning.every(function(position){
            rectA = il.uiTests.stretchRect(rectA,position.stretchHorizontalA,position.stretchVerticalA);
            rectB = il.uiTests.stretchRect(rectB,position.stretchHorizontalB,position.stretchVerticalB);

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


            var simulation_class = "";

            if(propertyRule.simulate && propertyRule.simulate.point == "before"){
                simulation_class = il.uiTests.simulateCssEvent(propertyRule.simulate.type);
                //elementA = $("."+simulation_class + " "+elementA.selector);
            }

            var propertyA = il.uiTests.getCSSProperty(elementA,propertyRule.whichA);

            if(propertyRule.simulate && propertyRule.simulate.point == "between"){

                console.log(elementB);
                simulation_class = il.uiTests.simulateCssEvent(propertyRule.simulate.type);
                //elementB = $("."+simulation_class + " "+il.uiTests.getSelector(elementB));
                console.log(simulation_class,elementB);
            }

            var propertyB = il.uiTests.getCSSProperty(elementB,propertyRule.whichB);

            if(propertyRule.simulate){
                il.uiTests.simulateCssEvent("stop");
            }


            console.log(propertyA , propertyB);

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
                simulation_class = il.uiTests.simulateCssEvent(colorRule.simulate.type);
                //elementA = $("."+simulation_class + " "+elementA.selector);
            }

            var colorsA = il.uiTests.getColor(elementA);
            var colorA = colorsA[colorRule.whichA];

            if(colorRule.simulate && colorRule.simulate.point == "between"){
                simulation_class = il.uiTests.simulateCssEvent(colorRule.simulate.type);
                //elementB = $("."+simulation_class + " "+il.uiTests.getSelector(elementB));
            }


            var colorsB = il.uiTests.getColor(elementB);


            if(colorRule.simulate){
                il.uiTests.simulateCssEvent("stop");
            }


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