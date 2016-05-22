il.uiTests.wording = function(element,selector,testVariant){

    this.amount = function(text, regex, operator, amount, ignore){
        il.uiTests.log.message(["wording.amount params",text, regex, operator, amount,ignore],"wording",this.log.levels.debug);

        var nrWords = il.uiTests.countWords(text, regex,ignore);

        il.uiTests.log.message(["wording.amount nr words",nrWords],"wording",this.log.levels.debug);

        if(!operator){
            operator = "=";
        }
        if(!amount){
            amount = 1;
        }
        return il.uiTests.compareValues(operator,nrWords,amount,true);
    };

    il.uiTests.log.message(["wording params to get Content",element,testVariant.selectorType,testVariant.selector],"wording",this.log.levels.debug);

    element = il.uiTests.getRelativesByChain(element, testVariant.selectors);

    var content = il.uiTests.getContent(element,testVariant.contentType,testVariant.contentSelector);
    if(content == undefined){
        throw new Error("Invalid wording content, " +testVariant.description)
    }
    if( content == ""){
        return false;
    }
    //content = il.uiTests.contentSanitize(content);
    var text = il.uiTests.getText(content);

    il.uiTests.log.message(["wording content",content],"wording",this.log.levels.debug);
    il.uiTests.log.message(["wording text",text],"wording",this.log.levels.debug);

    switch(testVariant.subtype){
        case "amount":
            return this.amount(text, testVariant.regex, testVariant.operator,testVariant.amount,testVariant.ignore);
    }
}


