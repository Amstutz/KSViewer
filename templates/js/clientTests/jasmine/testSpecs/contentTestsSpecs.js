describe("Content Suite", function() {
    var fixtures = il.uiTests.fixtures();

    beforeEach(function() {

    });

    describe("Wording", function() {
        describe("Amount", function() {
            it("By Selector", function() {
                expect(il.uiTests.testVariant(fixtures.button2.wrappedHtml,fixtures.buttonEntry.selector,fixtures.buttonRules.variant1)).toBe(true);
                expect(il.uiTests.testVariant(fixtures.button2.wrappedHtml,fixtures.buttonEntry.selector,fixtures.buttonRules.variant2)).toBe(false);
            });
            it("By Attribute", function() {
                expect(il.uiTests.testVariant(fixtures.button1.html,fixtures.buttonEntry.selector,fixtures.buttonRules.variant3)).toBe(true);
                expect(il.uiTests.testVariant(fixtures.button1.html,fixtures.buttonEntry.selector,fixtures.buttonRules.variant4)).toBe(false);

            });
            it("With Attribute", function() {
                expect(il.uiTests.testVariant(fixtures.button1.html,fixtures.buttonEntry.selector,fixtures.buttonRules.variant3)).toBe(true);
                expect(il.uiTests.testVariant(fixtures.button1.html,fixtures.buttonEntry.selector,fixtures.buttonRules.variant4)).toBe(false);

            });
            it("Only Numbers", function() {
                expect(il.uiTests.testVariant(fixtures.badge.html,fixtures.badge.selector,fixtures.badge.numberRuleVariant)).toBe(true);
                expect(il.uiTests.testVariant(fixtures.badge.wrongHtml,fixtures.badge.selector,fixtures.badge.numberRuleVariant)).toBe(false);
            });
            it("Ignore Prepositions and Conjunctions", function() {
                expect(il.uiTests.testVariant(fixtures.button3.html,fixtures.buttonEntry.selector,fixtures.buttonRules.variant5)).toBe(true);
                expect(il.uiTests.testVariant(fixtures.button1.html,fixtures.buttonEntry.selector,fixtures.buttonRules.variant5)).toBe(true);

            });
            it("The checkbox’s identifier MUST always state something positive.", function() {
                expect(il.uiTests.testVariant(fixtures.radioCheckboxSectionOke.find(":checkbox"),"",fixtures.checkboxPositive)).toBe(true);
                expect(il.uiTests.testVariant(fixtures.radioCheckboxSectionNegation1.find(":checkbox"),"",fixtures.checkboxPositive)).toBe(false);
                expect(il.uiTests.testVariant(fixtures.radioCheckboxSectionNegation2.find(":checkbox"),"",fixtures.checkboxPositive)).toBe(false);
            });
            it("Checkbox description place", function() {
                expect(il.uiTests.testVariant(fixtures.radioCheckboxSectionOke.find(":checkbox"),"",fixtures.checkboxDescriptionPlace)).toBe(true);
                expect(il.uiTests.testVariant(fixtures.radioCheckboxSectionWrongDescriptionPlace.find(":checkbox"),"",fixtures.checkboxDescriptionPlace)).toBe(false);
                expect(il.uiTests.testVariant(fixtures.radioCheckboxSectionNegation1.find(":checkbox"),"",fixtures.checkboxDescriptionPlace)).toBe(true);
                expect(il.uiTests.testVariant(fixtures.radioCheckboxSectionNegation2.find(":checkbox"),"",fixtures.checkboxDescriptionPlace)).toBe(true);

            });
            it("radio smaller than6", function() {
                expect(il.uiTests.testRule(fixtures.radioButtons1.find(":radio").first(),"",fixtures.radioSmallerThan6Words)).toBe(true);
                expect(il.uiTests.testRule(fixtures.radioButtons2.find(":radio").first(),"",fixtures.radioSmallerThan6Words)).toBe(false);
                expect(il.uiTests.testRule(fixtures.radioButtons3.find(":radio").first(),"",fixtures.radioSmallerThan6Words)).toBe(true);

            });

            it("radio not 0", function() {
                expect(il.uiTests.testRule(fixtures.radioButtons1.find(":radio").first(),"",fixtures.radioNot0Words)).toBe(true);
                expect(il.uiTests.testRule(fixtures.radioButtons2.find(":radio").first(),"",fixtures.radioNot0Words)).toBe(true);
                expect(il.uiTests.testRule(fixtures.radioButtons3.find(":radio").first(),"",fixtures.radioNot0Words)).toBe(false);
            });
            it("Equal Label Radio Group", function() {
                expect(il.uiTests.testVariant(fixtures.radioGroupLabel.find(":radio").first(),"",fixtures.equalLabelRadioGroup)).toBe(true);
                expect(il.uiTests.testVariant(fixtures.radioGroupLabel.find(":radio").get(1),"",fixtures.equalLabelRadioGroup)).toBe(false);
            });
        });
    });


});
