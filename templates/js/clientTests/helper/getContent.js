il.uiTests.getContent = function(element, type, identifier){

    var getBySelector = function(element, entry,selector){
        return true;
    };

    var getContentByAttribute = function(element, attribute){
        console.log(element);
        console.log(attribute);
        console.log($(element).attr( attribute ));
        return $(element).attr( attribute );
    };

    switch(type){
        case "selector":
            return getContentBySelector(element, type, identifier);
        case "attribute":
            return getContentByAttribute(element, identifier);
    }
}


