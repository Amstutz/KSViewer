var regexTest = function(element, entry,ruleType,rule,test){
    var expression = new RegExp(test.content);
    return expression.test(element.text);
};
/**
var regexTest = function(element, entry,ruleType,rule,test){
    switch(test.subtype){
        case "regex":
            return regexTest(element, entry,ruleType,rule,test);
        default:
            return regexTest(element, entry,ruleType,rule,test);

    }
};
**/