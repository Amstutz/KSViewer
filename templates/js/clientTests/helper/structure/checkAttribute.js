il.uiTests.checkAttribute = function(type,element,attribute,value){
    var  isDefined = function(attributeValue){
        return !(attributeValue === undefined);
    };
    var  isSet = function(attributeValue){
        return attributeValue != "" && isDefined(attributeValue);
    };
    var  isEqual = function(attributeValue,value){
        return attributeValue == value;
    };

    var attributeValue = $(element).attr(attribute);

    switch(type) {
        case "isDefined":
            return isDefined(attributeValue);
        case "isSet":
            return isSet(attributeValue);
        case "isEqual":
            return isEqual(attributeValue,value);
    }

};