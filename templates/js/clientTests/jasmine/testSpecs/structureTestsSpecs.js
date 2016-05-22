describe("Structure Suite", function() {
    var fixtures = il.uiTests.fixtures();

    beforeEach(function() {

    });

    describe("Structure", function() {
        describe("Amount", function() {
            it("Badge Test", function() {
                expect(il.uiTests.testVariant( fixtures.badge.neighbourHtml1.html.find(".badge"),fixtures.badge.selector ,fixtures.badge.glyphNeighbourVariant )).toBe(true);
                expect(il.uiTests.testVariant( fixtures.badge.neighbourHtml2.find(".badge"),fixtures.badge.selector ,fixtures.badge.glyphNeighbourVariant )).toBe(true);
                expect(il.uiTests.testVariant( fixtures.badge.neighbourHtml3,fixtures.badge.selector ,fixtures.badge.glyphNeighbourVariant )).toBe(false);
            });
            it("Glyphed Button Test", function() {
                expect(il.uiTests.testRule( fixtures.glyphedButton1HTML,"" ,fixtures.glyphedButtonFixtures )).toBe(true);
                expect(il.uiTests.testRule( fixtures.glyphedButton2HTML,"" ,fixtures.glyphedButtonFixtures )).toBe(false);
                expect(il.uiTests.testRule( fixtures.glyphedButton3HTML,"" ,fixtures.glyphedButtonFixtures )).toBe(true);
            });
            it("One Primary Button", function() {
                expect(il.uiTests.testRule( $('body'),"" ,fixtures.onePrimaryButton )).toBe(true);
                $('body').append(fixtures.coloredStructure).find("#sibling1").append(fixtures.primaryButton);
                expect(il.uiTests.testRule( $('#sibling1'),"" ,fixtures.onePrimaryButton )).toBe(true);
                $("#sibling1").append(fixtures.primaryButton);
                expect(il.uiTests.testRule( $('#sibling1'),"" ,fixtures.onePrimaryButton )).toBe(false);
                $('#root').remove();
            });
            it("Binary Radio", function() {
                expect(il.uiTests.testRule( $(fixtures.radioButtons1.find(":radio")),"" ,fixtures.binaryCheckboxesRadio )).toBe(false);
                expect(il.uiTests.testRule( $(fixtures.radioButtons2.find(":radio")),"" ,fixtures.binaryCheckboxesRadio )).toBe(false);
                expect(il.uiTests.testRule( $(fixtures.radioButtons3.find(":radio")),"" ,fixtures.binaryCheckboxesRadio )).toBe(true);

            });
        });
    });


});
