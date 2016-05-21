var ruleReport = function(element, entry,ruleType,rule,test,passed,errorMessage){
    this.element = element;
    this.itemTitle = entry.title;
    this.message = ruleType.id + ": "+rule.description;// + "; "+ test.description;
    if(errorMessage){
        this.message = ruleType.id + ": "+rule.description+" Error occured: "+errorMessage;// + "; "+ test.description;
    }
    this.passed = passed;
    this.level = rule.level;
    return this;
};