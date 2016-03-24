var maxWords = function(element, entry,ruleType,rule,test){
    test.amount +=1;
    test.not = true;
    return minWords(element, entry,ruleType,rule,test);
};

var minWords = function(element, entry,ruleType,rule,test){
    var regexWord = " [A-Za-z0-9][A-Za-z0-9_]*";
    var regex = "[A-Za-z0-9][A-Za-z0-9_]* [A-Za-z0-9][A-Za-z0-9_]* [A-Za-z0-9_].*";

    test.content = regex;
    test.amount =1;
    return regexTest(element, entry,ruleType,rule,test);
};

var wordingTest = function(element, entry,ruleType,rule,test){
    switch(test.subtype){
        case "maxWords":
            return maxWords(element, entry,ruleType,rule,test);
        case "minWords":
            return maxWords(element, entry,ruleType,rule,test);
        default:
            return containTextTest(element, entry,ruleType,rule,test);

    }
};