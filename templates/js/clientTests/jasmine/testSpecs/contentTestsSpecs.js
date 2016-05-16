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
        });
    });


});
