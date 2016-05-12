var ilback = il;
var il = {};
if(ilback){
    il = ilback;
}

(function (root, scope, factory) {

    scope.uiTests = factory(root.jQuery);
}(window, il, function init($) {
    var tests = function(){

        this.setEntries = function(entries){
            this.log.message("this.setEntries","uiTests",this.log.levels.debug);
            this.entries = JSON.parse(entries);
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
            this.log.message("this.skipRule","uiTests",this.log.levels.debug);
            this.ruleIndex++;
            this.testIndex= -1;
            this.elementIndex = -1;
            this.continue();
        };


        this.continue = function(){
            this.log.message("this.continue","uiTests",this.log.levels.debug);
            this.currentDisplay.hide(this.processEntries);
        };

        this.processTest = function(entry,ruleType,rule,test){
            this.log.message(["this.processTest",entry,ruleType,rule,test],"uiTests",this.log.levels.debug);
            this.log.message(["this.processTest",entry,ruleType,rule,test],"uiTests",this.log.levels.info);

            var allPassed = true;

            $(entry.selector).each(function (elementIndex) {
                var element = $(this);
                if(il.uiTests.checkVisible(element)){
                    passed = false;
                    if(self.elementIndex < elementIndex){
                        self.log.message(self.elementIndex,"uiTests",self.log.levels.info);
                        self.log.message(elementIndex,"uiTests",self.log.levels.info);

                        self.elementIndex = elementIndex;
                        passed = il.uiTests.testRule(this, entry.selector,test);
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
            self.log.message("this.processEntries","uiTests",self.log.levels.debug);

            if(self.entries.uiComponent.every(function(entry,entryIndex){
                    self.log.message(["this.processEntries Entry: "+entry.id,entry],"uiTests",self.log.levels.debug);
                    if(self.entryIndex < entryIndex && $.isArray(entry.rules)) {
                        complete = entry.rules.every(function (ruleType,ruleTypeIndex) {
                            if (self.ruleTypeIndex < ruleTypeIndex && $.isArray(ruleType.rules)) {
                                complete = ruleType.rules.every(function (rule,ruleIndex) {
                                    self.log.message(["this.processEntries Rule: "+rule.description,rule],"uiTests",self.log.levels.debug);
                                    if (self.ruleIndex < ruleIndex && $.isArray(rule.tests)) {
                                        var complete = rule.tests.every(function (test,testIndex) {
                                            self.log.message(["this.processEntries Test: "+test.description,test],"uiTests",self.log.levels.debug);
                                            if (self.testIndex < testIndex) {
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




