var ruleReport = function(element, entry,rule,test,passed,errorMessage){
    this.element = element;
    this.itemTitle = entry.title;
    this.type = rule.type;
    this.message = rule.type + ": "+rule.description;// + "; "+ test.description;
    if(errorMessage){
        this.message = rule.type  + ": "+rule.description+" Error occured: "+errorMessage;// + "; "+ test.description;
    }
    this.passed = passed;
    this.level = rule.level;
    return this;
};