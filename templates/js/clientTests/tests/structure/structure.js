il.uiTests.structure = function(element,selector,testVariant){

    this.ordering = function(element, selectors, items){
        var itemsClone = JSON.parse(JSON.stringify(items));
        il.uiTests.log.message(["structure.ordering params",element, selectors, itemsClone],"structure",this.log.levels.debug);

        var elementList = il.uiTests.getRelativesByChain(element, testVariant.selectors);

        il.uiTests.log.message(["structure.ordering element list",elementList],"structure",this.log.levels.debug);


        var orderingVariantsListIndex = 0;

        var allElementsPassed = elementList.get().every(function(orderingElement){
            console.log("start call: ",orderingElement);
            console.log("start call: ",itemsClone[orderingVariantsListIndex]);

            var currentItem = itemsClone[orderingVariantsListIndex];

            il.uiTests.log.message(["structure.ordering check element",orderingElement,currentItem],"testRule",il.uiTests.log.levels.debug);

            if(!currentItem){
                return false;
            }


            var currentItem = itemsClone[orderingVariantsListIndex];
            if(currentItem.repetitions == -1){
                currentItem.repetitions = 999999;
            }else if(currentItem.repetitions == undefined){
                currentItem.repetitions = 1;
            }

            var passed = false;


            if(currentItem.optional){
                var nextItemIndex = orderingVariantsListIndex+1;

                if(!itemsClone[nextItemIndex] && il.uiTests.testVariant(orderingElement,"",itemsClone[orderingVariantsListIndex].variant)){
                    passed = true;
                }
                while(itemsClone[nextItemIndex] && !passed){
                    console.log("while stared");
                    if(itemsClone[nextItemIndex] && il.uiTests.testVariant(orderingElement,"",itemsClone[nextItemIndex].variant)){
                        console.log("while next non optional passed");
                        currentItem.repetitions = 0;
                        passed = true;
                        itemsClone[nextItemIndex].passed = true;
                    }
                    else if(il.uiTests.testVariant(orderingElement,"",itemsClone[nextItemIndex-1].variant)){
                        passed = true;
                    }
                    if(!itemsClone[nextItemIndex-1].optional){
                        console.log("break");
                        break;
                    }
                    nextItemIndex++;
                }

            }else{
                console.log();
                passed = il.uiTests.testVariant(orderingElement,"",currentItem.variant);
                console.log(currentItem.variant,passed);

            }

            if(currentItem.repetitions > 1){

                currentItem.repetitions--;
                currentItem.passed = false;
            }else{
                orderingVariantsListIndex++;
            }
            console.log("return value: ",passed);
            return passed;
        });

        if(!allElementsPassed){
            return false;
        }
        if(itemsClone.length > orderingVariantsListIndex){
            var itemsClone2 = JSON.parse(JSON.stringify(itemsClone));
            itemsClone2.splice(0, orderingVariantsListIndex);
            console.log(itemsClone2);
            return itemsClone2.every(function(itemsClone2){
                if(itemsClone2.optional || itemsClone2.passed){
                    return true;
                }
                console.log(itemsClone2);
                return false;
            });
        }
        return true;
    };


    this.amount = function(element, selectors, operator, amount){
        il.uiTests.log.message(["structure.amount params",element, selectors, operator, amount],"structure",this.log.levels.debug);

        var nrElements = il.uiTests.countRelatives(element, selectors);

        if(!nrElements){
            nrElements = 0;
        }
        if(!operator){
            operator = "=";
        }
        if(amount === undefined){
            amount = 1;
        }
        il.uiTests.log.message(["structure.amount comparable",operator,nrElements,amount],"structure",this.log.levels.debug);

        console.log(nrElements);
        console.log(operator,nrElements,amount);
        return il.uiTests.compareValues(operator,nrElements,amount,true);
    };

    this.insideText = function(element, selectors){
        var $elements = il.uiTests.getRelativesByChain(element, selectors);
        return il.uiTests.containsText($elements.parent())

    };

    switch(testVariant.subtype){
        case "amount":
            return this.amount(element, testVariant.selectors, testVariant.operator,testVariant.amount);
        case "ordering":
            return this.ordering(element, testVariant.selectors, testVariant.items);
        case "insideText":
            return this.insideText(element, testVariant.selectors);
    }
}


