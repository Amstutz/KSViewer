il.uiTests.wording = function(element, entry,ruleType,rule,test){

    var amount = function(element, entry,ruleType,rule,test){
        il.uiTests.log.message(test.options,"wording",il.uiTests.log.levels.info);
        il.uiTests.log.message(element,"wording",il.uiTests.log.levels.info);

        il.uiTests.log.message(element.children,"wording",il.uiTests.log.levels.info);
        var text = "";

        if(test.options.ruleSelectors.attribute){
            text = element.attributes.value.textContent;
            il.uiTests.log.message(element.attributes.value.textContent.match(/\S+/g),"wording",il.uiTests.log.levels.info);
        }
        var length = text.match(/\S+/g).length;
        console.log(length,text);
        return false;
    };

    switch(test.subtype){
        case "amount":
            return amount(element, entry,ruleType,rule,test);
    }
}



