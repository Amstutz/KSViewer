describe("Structure Suite", function() {
    var fixtures = il.uiTests.fixtures();

    beforeEach(function() {

    });

    describe("Structure", function() {
        describe("Amount", function() {
            it("0 Test", function() {
                expect(il.uiTests.testVariant( fixtures.badge.neighbourHtml1.html,"" ,fixtures.structure0Amount)).toBe(false);
                expect(il.uiTests.testVariant( fixtures.badge.neighbourHtml3.html,"" ,fixtures.structure0Amount)).toBe(true);

            });
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
            it("Radio Smaller Than 6", function() {
                expect(il.uiTests.testRule( $(fixtures.radioButtons1.find(":radio")),"" ,fixtures.radioSmallerThan6 )).toBe(true);
                expect(il.uiTests.testRule( $(fixtures.radioButtons2.find(":radio")),"" ,fixtures.radioSmallerThan6 )).toBe(true);
                expect(il.uiTests.testRule( $(fixtures.radioButtons3.find(":radio")),"" ,fixtures.radioSmallerThan6 )).toBe(true);
                expect(il.uiTests.testRule( $(fixtures.radioButtons6.find(":radio")),"" ,fixtures.radioSmallerThan6 )).toBe(false);


            });
        });
        describe("Ordering", function() {
            it("Regular", function() {
                expect(il.uiTests.testVariant( fixtures.orderingStructure1,"",fixtures.orderingLabels )).toBe(true);
                expect(il.uiTests.testVariant( fixtures.orderingStructure2,"",fixtures.orderingLabels )).toBe(false);
                expect(il.uiTests.testVariant( fixtures.orderingStructure3,"",fixtures.orderingLabels )).toBe(false);
                expect(il.uiTests.testVariant( fixtures.orderingStructure4,"",fixtures.orderingLabels )).toBe(false);
                expect(il.uiTests.testVariant( fixtures.orderingStructure5,"",fixtures.orderingLabels )).toBe(false);
                expect(il.uiTests.testVariant( fixtures.orderingStructure6,"",fixtures.orderingLabels )).toBe(false);
                expect(il.uiTests.testVariant( fixtures.orderingStructure7,"",fixtures.orderingLabels )).toBe(false);
                expect(il.uiTests.testVariant( fixtures.orderingStructure8,"",fixtures.orderingLabels )).toBe(false);
                expect(il.uiTests.testVariant( fixtures.orderingStructure9,"",fixtures.orderingLabels )).toBe(false);
                expect(il.uiTests.testVariant( fixtures.orderingStructure10,"",fixtures.orderingLabels )).toBe(false);
                expect(il.uiTests.testVariant( fixtures.orderingStructure11,"",fixtures.orderingLabels )).toBe(false);
                expect(il.uiTests.testVariant( fixtures.orderingStructure12,"",fixtures.orderingLabels )).toBe(false);
                expect(il.uiTests.testVariant( fixtures.orderingStructure13,"",fixtures.orderingLabels )).toBe(false);
            });
            it("Optional Elements", function() {
                expect(il.uiTests.testVariant( fixtures.orderingStructure1,"",fixtures.orderingLabelsOptional )).toBe(true);
                expect(il.uiTests.testVariant( fixtures.orderingStructure2,"",fixtures.orderingLabelsOptional )).toBe(false);
                expect(il.uiTests.testVariant( fixtures.orderingStructure3,"",fixtures.orderingLabelsOptional )).toBe(false);
                expect(il.uiTests.testVariant( fixtures.orderingStructure4,"",fixtures.orderingLabelsOptional )).toBe(false);
                expect(il.uiTests.testVariant( fixtures.orderingStructure5,"",fixtures.orderingLabelsOptional )).toBe(false);
                expect(il.uiTests.testVariant( fixtures.orderingStructure6,"",fixtures.orderingLabelsOptional )).toBe(false);
                expect(il.uiTests.testVariant( fixtures.orderingStructure7,"",fixtures.orderingLabelsOptional )).toBe(true);
                expect(il.uiTests.testVariant( fixtures.orderingStructure8,"",fixtures.orderingLabelsOptional )).toBe(false);
                expect(il.uiTests.testVariant( fixtures.orderingStructure9,"",fixtures.orderingLabelsOptional )).toBe(false);
                expect(il.uiTests.testVariant( fixtures.orderingStructure10,"",fixtures.orderingLabelsOptional )).toBe(false);
                expect(il.uiTests.testVariant( fixtures.orderingStructure11,"",fixtures.orderingLabelsOptional )).toBe(false);
                expect(il.uiTests.testVariant( fixtures.orderingStructure12,"",fixtures.orderingLabelsOptional )).toBe(false);
                expect(il.uiTests.testVariant( fixtures.orderingStructure13,"",fixtures.orderingLabelsOptional )).toBe(false);
            });
            it("Optional Elements Repetition", function() {
                expect(il.uiTests.testVariant( fixtures.orderingStructure1,"",fixtures.orderingLabelsRepetition )).toBe(false);
                expect(il.uiTests.testVariant( fixtures.orderingStructure2,"",fixtures.orderingLabelsRepetition )).toBe(false);
                expect(il.uiTests.testVariant( fixtures.orderingStructure3,"",fixtures.orderingLabelsRepetition )).toBe(false);
                expect(il.uiTests.testVariant( fixtures.orderingStructure4,"",fixtures.orderingLabelsRepetition )).toBe(false);
                expect(il.uiTests.testVariant( fixtures.orderingStructure5,"",fixtures.orderingLabelsRepetition )).toBe(false);
                expect(il.uiTests.testVariant( fixtures.orderingStructure6,"",fixtures.orderingLabelsRepetition )).toBe(false);
                expect(il.uiTests.testVariant( fixtures.orderingStructure7,"",fixtures.orderingLabelsRepetition )).toBe(false);
                expect(il.uiTests.testVariant( fixtures.orderingStructure8,"",fixtures.orderingLabelsRepetition )).toBe(true);
                expect(il.uiTests.testVariant( fixtures.orderingStructure9,"",fixtures.orderingLabelsRepetition )).toBe(true);
                expect(il.uiTests.testVariant( fixtures.orderingStructure10,"",fixtures.orderingLabelsRepetition )).toBe(false);
                expect(il.uiTests.testVariant( fixtures.orderingStructure11,"",fixtures.orderingLabelsRepetition )).toBe(false);
                expect(il.uiTests.testVariant( fixtures.orderingStructure12,"",fixtures.orderingLabelsRepetition )).toBe(false);
                expect(il.uiTests.testVariant( fixtures.orderingStructure13,"",fixtures.orderingLabelsRepetition )).toBe(false);
            });
            it("Optional Elements Optional Repetition", function() {
                expect(il.uiTests.testVariant( fixtures.orderingStructure1,"",fixtures.orderingLabelsOptionalRepetition )).toBe(true);
                expect(il.uiTests.testVariant( fixtures.orderingStructure2,"",fixtures.orderingLabelsOptionalRepetition )).toBe(false);
                expect(il.uiTests.testVariant( fixtures.orderingStructure3,"",fixtures.orderingLabelsOptionalRepetition )).toBe(false);
                expect(il.uiTests.testVariant( fixtures.orderingStructure4,"",fixtures.orderingLabelsOptionalRepetition )).toBe(false);
                expect(il.uiTests.testVariant( fixtures.orderingStructure5,"",fixtures.orderingLabelsOptionalRepetition )).toBe(false);
                expect(il.uiTests.testVariant( fixtures.orderingStructure6,"",fixtures.orderingLabelsOptionalRepetition )).toBe(false);
                expect(il.uiTests.testVariant( fixtures.orderingStructure7,"",fixtures.orderingLabelsOptionalRepetition )).toBe(true);
                expect(il.uiTests.testVariant( fixtures.orderingStructure8,"",fixtures.orderingLabelsOptionalRepetition )).toBe(false);
                expect(il.uiTests.testVariant( fixtures.orderingStructure9,"",fixtures.orderingLabelsOptionalRepetition )).toBe(false);
                expect(il.uiTests.testVariant( fixtures.orderingStructure10,"",fixtures.orderingLabelsOptionalRepetition )).toBe(true);
                expect(il.uiTests.testVariant( fixtures.orderingStructure11,"",fixtures.orderingLabelsOptionalRepetition )).toBe(false);
                expect(il.uiTests.testVariant( fixtures.orderingStructure12,"",fixtures.orderingLabelsOptionalRepetition )).toBe(false);
                expect(il.uiTests.testVariant( fixtures.orderingStructure13,"",fixtures.orderingLabelsOptionalRepetition )).toBe(false);
            });
            it("Optional Elements Optional Repetition End", function() {
                expect(il.uiTests.testVariant( fixtures.orderingStructure1,"",fixtures.orderingLabelsOptionalRepetitionEnd )).toBe(true);
                expect(il.uiTests.testVariant( fixtures.orderingStructure2,"",fixtures.orderingLabelsOptionalRepetitionEnd )).toBe(false);
                expect(il.uiTests.testVariant( fixtures.orderingStructure3,"",fixtures.orderingLabelsOptionalRepetitionEnd )).toBe(false);
                expect(il.uiTests.testVariant( fixtures.orderingStructure4,"",fixtures.orderingLabelsOptionalRepetitionEnd )).toBe(true);
                expect(il.uiTests.testVariant( fixtures.orderingStructure5,"",fixtures.orderingLabelsOptionalRepetitionEnd )).toBe(false);
                expect(il.uiTests.testVariant( fixtures.orderingStructure6,"",fixtures.orderingLabelsOptionalRepetitionEnd )).toBe(false);
                expect(il.uiTests.testVariant( fixtures.orderingStructure7,"",fixtures.orderingLabelsOptionalRepetitionEnd )).toBe(false);
                expect(il.uiTests.testVariant( fixtures.orderingStructure8,"",fixtures.orderingLabelsOptionalRepetitionEnd )).toBe(false);
                expect(il.uiTests.testVariant( fixtures.orderingStructure9,"",fixtures.orderingLabelsOptionalRepetitionEnd )).toBe(false);
                expect(il.uiTests.testVariant( fixtures.orderingStructure10,"",fixtures.orderingLabelsOptionalRepetitionEnd )).toBe(true);
                expect(il.uiTests.testVariant( fixtures.orderingStructure11,"",fixtures.orderingLabelsOptionalRepetitionEnd )).toBe(true);
                expect(il.uiTests.testVariant( fixtures.orderingStructure12,"",fixtures.orderingLabelsOptionalRepetitionEnd )).toBe(true);
                expect(il.uiTests.testVariant( fixtures.orderingStructure13,"",fixtures.orderingLabelsOptionalRepetitionEnd )).toBe(true);
            });
        });


    });


});
