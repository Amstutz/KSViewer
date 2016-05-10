il.uiTests.getContent = function(element, type, identifier){

    var getBySelector = function(element, entry,selector){
        return true;
    };

    switch(type){
        case "selector":
            return il.uiTests.getContent(element, type, identifier);
        case "attribute":
            return il.uiTests.getContent(element, "attribute", identifier);
    }
}


