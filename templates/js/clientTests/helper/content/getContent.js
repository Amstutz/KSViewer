il.uiTests.getContent = function(element, type, identifier){
    if(!element || !$(element).get().length){
        return $("");
    }
    var getOwnContent = function(element){
        return $(element).html();
    };

    var getContentBySelector = function(element, selector){
        return $(il.uiTests.wrapElement(element)).find(selector).html();
    };

    var getContentByAttribute = function(element, attribute){
        return $(element).attr( attribute );
    };
    switch(type){
        case "selector":
            return getContentBySelector(element, identifier);
        case "attribute":
            return getContentByAttribute(element, identifier);
        case "self":
        case "content":
        default:
            return getOwnContent(element);
    }
}

