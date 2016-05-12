describe("Structure Suite", function() {
    var fixtures = il.uiTests.fixtures();

    beforeEach(function() {

    });

    describe("Structure", function() {
        describe("Amount", function() {
            it("Badge Test", function() {
                expect(il.uiTests.testVariant( fixtures.badge.neighbourHtml1.find(".badge"),fixtures.badge.selector ,fixtures.badge.glyphNeighbourVariant )).toBe(true);
                expect(il.uiTests.testVariant( fixtures.badge.neighbourHtml2.find(".badge"),fixtures.badge.selector ,fixtures.badge.glyphNeighbourVariant )).toBe(true);
                expect(il.uiTests.testVariant( fixtures.badge.neighbourHtml3,fixtures.badge.selector ,fixtures.badge.glyphNeighbourVariant )).toBe(false);
            });
        });
    });


});
