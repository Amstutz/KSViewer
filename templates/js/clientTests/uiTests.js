(function (root, scope, factory) {
    scope.uiTests = factory(root.jQuery);
}(window, il, function init($) {
    var tests = function(){

        this.setEntries = function(entries){
            this.entries = JSON.parse(entries);
            this.log.message(entries,"uiTests",this.log.levels.info);
        }

        var self = this;


        this.init = function(){
            this.ruleReports = [];
            this.currentDisplay = null;

            this.showDisplay = true;
            this.entryIndex = -1;
            this.ruleTypeIndex = -1;
            this.ruleIndex = -1;
            this.testIndex= -1;
            this.elementIndex = -1;

        }

        this.init();

        this.skipRule = function(){
            //console.log("skipRule");
            this.ruleIndex++;
            this.testIndex= -1;
            this.elementIndex = -1;
            this.continue();
        };


        this.continue = function(){
            //console.log("continue");
            this.currentDisplay.hide(this.processEntries);
        };

        this.processTest = function(entry,ruleType,rule,test){
            //console.log("processTest", entry.title, ruleType.id, rule.description,test.description);
            //console.log(this.entryIndex,this.ruleTypeIndex ,this.ruleIndex,this.testIndex,this.elementIndex);

            var allPassed = true;

            $(entry.selector).each(function (elementIndex) {
                if($(this).is(":visible")){

                    passed = false;
                    if(self.elementIndex < elementIndex){
                        self.log.message(self.elementIndex,"uiTests",self.log.levels.info);
                        self.log.message(elementIndex,"uiTests",self.log.levels.info);

                        self.elementIndex = elementIndex;
                        switch(test.type){
                            case "contains":
                                //passed = this.wording.minWords(this,entry,ruleType,rule,test);
                                break;
                            case "wording":
                                passed = self.wording(this,entry,ruleType,rule,test);
                                break;
                            default:
                                console.log("Unknown Type");
                        }
                        var report = new ruleReport(this,entry,ruleType,rule,test,passed);
                        self.ruleReports.push(report);

                        if(!report.passed){
                            self.log.message("Rule " + report.message + " not passed!!","uiTests",self.log.levels.debug);

                            if(self.showDisplay){
                                self.currentDisplay = new ruleDisplay(this,report,self);
                                self.currentDisplay.show(self.continue);
                                return allPassed = false;
                            }
                        }else{
                            self.log.message("Rule " + report.message + " passed","uiTests",self.log.levels.debug);
                        }
                    }
                }
            });
            return allPassed;
        };

        this.processEntries = function(){
            //console.log("processEntries",this);

            if(self.entries.uiComponent.every(function(entry,entryIndex){
                    if(self.entryIndex < entryIndex && $.isArray(entry.rules)) {
                        complete = entry.rules.every(function (ruleType,ruleTypeIndex) {
                            if (self.ruleTypeIndex < ruleTypeIndex && $.isArray(ruleType.rules)) {
                                complete = ruleType.rules.every(function (rule,ruleIndex) {
                                    if (self.ruleIndex < ruleIndex && $.isArray(rule.tests)) {

                                        var complete = rule.tests.every(function (test,testIndex) {
                                            if (self.testIndex < testIndex && test.type) {
                                                if(!self.processTest(entry, ruleType, rule, test)){
                                                    return false;
                                                }
                                                self.elementIndex = -1;
                                            }
                                            self.testIndex = testIndex;
                                            return true;
                                        });
                                        if(complete){
                                            self.ruleIndex = ruleIndex;

                                            self.testIndex = -1;
                                            return true;
                                        }
                                        return false;
                                    }
                                    return true;
                                });
                                if(complete){
                                    self.ruleTypeIndex = ruleTypeIndex;
                                    self.ruleIndex = -1;
                                    return true;
                                }
                                return false;

                            }
                            return true;
                        });
                        if(complete){
                            self.entryIndex = entryIndex;
                            self.ruleTypeIndex = -1;
                            return true;
                        }return false;

                    }

                    return true;
                })){
                //console.log("Finished");
                reportsDisplay(reportsSummary(self.ruleReports));
                self.init();
            }else{
                //console.log("Incomplete");
            }
        };
    }
    return new tests();
}));




