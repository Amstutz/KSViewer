var ruleReport = function(element, entry,ruleType,rule,test,passed){
    this.element = element;
    this.itemTitle = entry.title;
    this.message = ruleType.id + ": "+rule.description;// + "; "+ test.description;
    this.passed = passed;
    this.level = rule.level;
    return this;
};