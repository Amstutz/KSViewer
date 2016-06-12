il.uiTests.wording = function(element,selector,testVariant){
    il.uiTests.log.message(["wording params to get Content",element,selector,testVariant],"wording",this.log.levels.debug);

    this.amount = function(selectors,contentSelector, contentType,regex, operator, amount, ignore){
        il.uiTests.log.message(["wording.amount params",selectors,contentSelector, contentType,regex, operator, amount, ignore],"wording",this.log.levels.debug);

        element = il.uiTests.getRelativesByChain(element, selectors);

        var content = il.uiTests.getContent(element,contentType,contentSelector);
        if(content == undefined){
            content = "";
        }
        var nrWords;
        if( content == ""){
            nrWords =0;
        }else{
            var text = il.uiTests.getText(content);
            nrWords = il.uiTests.countWords(text, regex,ignore);
        }


        il.uiTests.log.message(["wording content",content],"wording",this.log.levels.debug);
        il.uiTests.log.message(["wording text",text],"wording",this.log.levels.debug);

        il.uiTests.log.message(["wording.amount nr words",nrWords],"wording",this.log.levels.debug);

        if(!operator){
            operator = "=";
        }
        if(!amount){
            amount = 1;
        }
        return il.uiTests.compareValues(operator,nrWords,amount,true);
    };

    this.compare = function(selectorsA,selectorsB,contentSelectorA, contentSelectorB, contentTypeA,contentTypeB){
        il.uiTests.log.message(["wording.amount params",selectorsA,selectorsB,contentSelectorA, contentSelectorB, contentTypeA,contentTypeB],"wording",this.log.levels.debug);

        var elementA = il.uiTests.getRelativesByChain(element, selectorsA);
        var elementB = il.uiTests.getRelativesByChain(element, selectorsB);

        var contentA = il.uiTests.getContent(elementA,contentTypeA,contentSelectorA);
        var contentB = il.uiTests.getContent(elementB,contentTypeB,contentSelectorB);

        if(contentA == undefined ||contentB == undefined){
            throw new Error("Invalid wording content compare in wording.")
        }

        //content = il.uiTests.contentSanitize(content);
        var textA = il.uiTests.getText(contentA);
        var textB = il.uiTests.getText(contentB);

        il.uiTests.log.message(["wording compare ",textA,textB],"wording",this.log.levels.debug);

        return textA == textB;
    };

    switch(testVariant.subtype){
        case "compare":
            return this.compare(testVariant.selectorsA,
                testVariant.selectorsB,
                testVariant.contentSelectorA,
                testVariant.contentSelectorB,
                testVariant.contentTypeA,
                testVariant.contentTypeB );
        case "amount":
            return this.amount(testVariant.selectors, testVariant.contentSelector,testVariant.contentType,testVariant.regex, testVariant.operator,testVariant.amount,testVariant.ignore);
    }
}


