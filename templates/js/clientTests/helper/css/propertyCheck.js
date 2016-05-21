il.uiTests.propertyCheck = function(type,propertyA,propertyB){
    var  isSet = function(property){
        if(!property){
            return false;
        }
        return true
    };

    var  isEqual = function(propertyA,propertyB){
        return (propertyA === propertyB);
    };

    switch(type) {
        case "isSet":
            return isSet(propertyA);
        case "isEqual":
            return isEqual(propertyA,propertyB);
    }

};