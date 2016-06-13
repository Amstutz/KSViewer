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
            this.ruleIndex = -1;
            this.testIndex= -1;
            this.elementIndex = -1;
            this.skipping = ["Trigger Element","Counter","Status Counter","Novelty Counter","Button"];

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

        this.processTest = function(entry,rule,test){
            this.log.message(["this.processTest",entry,rule,test],"uiTests",this.log.levels.debug);

            var allPassed = true;

            $(entry.selector).each(function (elementIndex) {
                var element = $(this);
                var ignore = false;
                if(test.ignore){
                    il.uiTests.log.message(["this.processTest Ignoring: ",test.ignore],"uiTests",il.uiTests.log.levels.info);
                    ignore = test.ignore.some(function(selector){

                        il.uiTests.log.message(["this.processTest test Ignore: ",selector],"uiTests",il.uiTests.log.levels.info);
                        return il.uiTests.countRelatives(element,selector) > 0;
                    });
                }
                if(il.uiTests.checkVisible(element) && !ignore){
                    passed = false;
                    if(self.elementIndex < elementIndex){
                        self.log.message(self.elementIndex,"uiTests",self.log.levels.info);
                        self.log.message(elementIndex,"uiTests",self.log.levels.info);

                        self.elementIndex = elementIndex;
                        try{
                            passed = il.uiTests.testRule(this, entry.selector,test);
                            var report = new ruleReport(this,entry,rule,test,passed);
                        }catch(e){
                            passed = false;
                            var report = new ruleReport(this,entry,rule,test,passed, e.message);
                        }


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
                    self.log.message(["this.processEntries Entry: "+entry.title,entry],"uiTests",self.log.levels.debug);
                    if(self.entryIndex < entryIndex && $.inArray(entry.title,self.skipping) == -1 && $.isArray(entry.rules)) {
                        complete = entry.rules.every(function (rule,ruleIndex) {
                            self.log.message(["this.processEntries Rule: "+rule.description,rule],"uiTests",self.log.levels.debug);
                            if (self.ruleIndex < ruleIndex && $.isArray(rule.tests)) {
                                var complete = rule.tests.every(function (test,testIndex) {
                                    self.log.message(["this.processEntries Test: ",test],"uiTests",self.log.levels.debug);
                                    if (self.testIndex < testIndex) {
                                        if(!self.processTest(entry, rule, test)){
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
                            self.entryIndex = entryIndex;
                            self.ruleIndex = -1;
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




