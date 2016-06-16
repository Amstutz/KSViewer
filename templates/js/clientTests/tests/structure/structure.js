il.uiTests.structure = function(element,selector,testVariant){

    this.ordering = function(element, selectors, items){
        var itemsClone = JSON.parse(JSON.stringify(items));
        il.uiTests.log.message(["structure.ordering params",element, selectors, itemsClone],"structure",this.log.levels.debug);

        var elementList = il.uiTests.getRelativesByChain(element, testVariant.selectors);

        il.uiTests.log.message(["structure.ordering element list",elementList],"structure",this.log.levels.debug);


        var orderingVariantsListIndex = 0;

        var allElementsPassed = elementList.get().every(function(orderingElement){
            var currentItem = itemsClone[orderingVariantsListIndex];

            il.uiTests.log.message(["structure.ordering check element",orderingElement,currentItem],"structure",il.uiTests.log.levels.debug);

            if(!currentItem){
                il.uiTests.log.message(["structure.ordering returned false since no more items",orderingElement,currentItem],"structure",il.uiTests.log.levels.debug);
                return false;
            }


            var currentItem = itemsClone[orderingVariantsListIndex];
            if(currentItem.repetitions == -1){
                currentItem.repetitions = 999999;
            }else if(currentItem.repetitions == undefined){
                currentItem.repetitions = 1;
            }

            var passed = false;



            if(itemsClone[orderingVariantsListIndex].passed){
                il.uiTests.log.message(["Item already passed : ",itemsClone[orderingVariantsListIndex]],"structure",il.uiTests.log.levels.debug);
                passed = true;
            }
            else if(currentItem.optional){
                var nextItemIndex = orderingVariantsListIndex+1;

                if(!itemsClone[nextItemIndex] && il.uiTests.testVariant(orderingElement,"",itemsClone[orderingVariantsListIndex].variant)){
                    passed = true;
                }
                while(itemsClone[nextItemIndex] && !passed){
                    il.uiTests.log.message(["structure.ordering while started on: ",itemsClone[nextItemIndex]],"structure",il.uiTests.log.levels.debug);
                    if(itemsClone[nextItemIndex] && il.uiTests.testVariant(orderingElement,"",itemsClone[nextItemIndex].variant)){
                        il.uiTests.log.message(["structure.ordering while in optional, next item passed: ",itemsClone[nextItemIndex]],"structure",il.uiTests.log.levels.debug);
                        currentItem.repetitions = 0;
                        passed = true;
                        itemsClone[nextItemIndex].passed = true;
                        orderingVariantsListIndex = nextItemIndex;
                    }
                    else if(il.uiTests.testVariant(orderingElement,"",itemsClone[nextItemIndex-1].variant)){
                        passed = true;
                    }
                    if(!itemsClone[nextItemIndex-1].optional){
                        il.uiTests.log.message(["structure.ordering Break on checking for option elements : ",itemsClone[nextItemIndex-1]],"structure",il.uiTests.log.levels.debug);

                        break;
                    }
                    nextItemIndex++;
                }

            }else{
                passed = il.uiTests.testVariant(orderingElement,"",currentItem.variant);

            }

            if(currentItem.repetitions > 1){
                currentItem.repetitions--;
                il.uiTests.log.message(["Reducing repetitions of item to: ",currentItem.repetitions, " item ",currentItem],"structure",il.uiTests.log.levels.debug);
                currentItem.passed = false;
            }else{
                orderingVariantsListIndex++;
                il.uiTests.log.message(["Incrementing item index: ",orderingVariantsListIndex],"structure",il.uiTests.log.levels.debug);

            }
            if(!passed){
                il.uiTests.log.message(["Pass failed on Item: ",currentItem],"structure",il.uiTests.log.levels.debug);
                il.uiTests.log.message(["Pass failed on element: ",orderingElement],"structure",il.uiTests.log.levels.debug);

            }
            return passed;
        });

        if(!allElementsPassed){
            return false;
        }
        if(itemsClone.length > orderingVariantsListIndex){
            il.uiTests.log.message(["structure.ordering Items left, checking of optional: ",itemsClone],"structure",il.uiTests.log.levels.debug);

            var itemsClone2 = JSON.parse(JSON.stringify(itemsClone));
            itemsClone2.splice(0, orderingVariantsListIndex);
            var allPassed =  itemsClone2.every(function(itemClone){
                if(itemClone.optional || itemClone.passed){
                    il.uiTests.log.message(["structure.ordering Item is optional or passed: ",itemClone],"structure",il.uiTests.log.levels.debug);
                    return true;
                }
                il.uiTests.log.message(["structure.ordering Not all mandatory items passed: ",itemClone],"structure",il.uiTests.log.levels.debug);
                return false;
            });
            il.uiTests.log.message(["All passed, is",allPassed],"structure",il.uiTests.log.levels.debug);
            return allPassed;
        }
        il.uiTests.log.message(["All passed, return true"],"structure",il.uiTests.log.levels.debug);
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


