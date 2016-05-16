il.uiTests.generateRegex = function(regex){
    if(!(regex instanceof RegExp)){
        if(typeof regex == "string"){
            return RegExp(regex,"g")
        }
        else if((typeof regex.term === "string") && (typeof regex.modifier === "string")){
            return RegExp(regex.term,regex.modifier);
        }
        else if(typeof regex.term === "string"){
            return RegExp(regex.term,"g")
        }
        throw new Exception("No valid Regular Expression");
    }
    return regex;
};