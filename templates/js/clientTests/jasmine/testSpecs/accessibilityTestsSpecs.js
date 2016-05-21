describe("Accessbility Suite", function() {
    var fixtures = il.uiTests.fixtures();

    describe("Focusable", function() {
        beforeEach(function() {
            $('body').append(fixtures.structure);
        });
        it("Focus Link", function() {
            expect(il.uiTests.accessibility($("#grandchild11"),"",fixtures.accessibility.isFocusable)).toBe(true);
            $('#link1').prop('#grandchild11', -1);
            expect(il.uiTests.accessibility($("#grandchild11"),"",fixtures.accessibility.isFocusable)).toBe(true);
            expect(il.uiTests.accessibility($("#grandchild21"),"",fixtures.accessibility.isFocusable)).toBe(true);

            expect(il.uiTests.accessibility($("#grandchild12"),"",fixtures.accessibility.isFocusable)).toBe(false);
            $('#grandchild12').prop('href', "#");
            expect(il.uiTests.accessibility($("#grandchild12"),"",fixtures.accessibility.isFocusable)).toBe(true);
            $('#grandchild12').removeAttr('href');
            expect(il.uiTests.accessibility($("#grandchild12"),"",fixtures.accessibility.isFocusable)).toBe(false);

            expect(il.uiTests.accessibility($("#grandchild22"),"",fixtures.accessibility.isFocusable)).toBe(false);
        });
        it("Focus li", function() {

            expect(il.uiTests.accessibility($("#child1"),"",fixtures.accessibility.isFocusable)).toBe(false);
            $('#child1').prop('tabIndex', 1);
            expect(il.uiTests.accessibility($("#child1"),"",fixtures.accessibility.isFocusable)).toBe(true);
            $('#child1').prop('tabIndex', -1);
            expect(il.uiTests.accessibility($("#child2"),"",fixtures.accessibility.isFocusable)).toBe(false);
        });
        it("Focus ul", function() {

            expect(il.uiTests.accessibility($("#element"),"",fixtures.accessibility.isFocusable)).toBe(false);
        });
        it("Focus div", function() {

            expect(il.uiTests.accessibility($("#sibling1"),"",fixtures.accessibility.isFocusable)).toBe(false);
            expect(il.uiTests.accessibility($("#sibling2"),"",fixtures.accessibility.isFocusable)).toBe(false);
        });
        afterEach(function() {
            $("#root").remove();
        });
    });

    describe("Tabbable", function() {
        beforeEach(function() {
            $('body').append(fixtures.structure);
        });
        it("Tab Link", function() {
            expect(il.uiTests.accessibility($("#grandchild11"),"",fixtures.accessibility.isTabbable)).toBe(true);
            $('#grandchild11').prop('tabIndex', -1);
            expect(il.uiTests.accessibility($("#grandchild11"),"",fixtures.accessibility.isTabbable)).toBe(false);
            expect(il.uiTests.accessibility($("#grandchild21"),"",fixtures.accessibility.isTabbable)).toBe(true);

            expect(il.uiTests.accessibility($("#grandchild12"),"",fixtures.accessibility.isTabbable)).toBe(false);
            $('#grandchild12').prop('href', "#");
            expect(il.uiTests.accessibility($("#grandchild12"),"",fixtures.accessibility.isTabbable)).toBe(true);
            $('#grandchild12').removeAttr('href');
            expect(il.uiTests.accessibility($("#grandchild22"),"",fixtures.accessibility.isTabbable)).toBe(false);
        });
        it("Tab li", function() {
            expect(il.uiTests.accessibility($("#child1"),"",fixtures.accessibility.isTabbable)).toBe(false);
            $('#child1').prop('tabIndex', 1);
            expect(il.uiTests.accessibility($("#child1"),"",fixtures.accessibility.isTabbable)).toBe(true);

            expect(il.uiTests.accessibility($("#child2"),"",fixtures.accessibility.isTabbable)).toBe(false);
        });
        it("Tab ul", function() {

            expect(il.uiTests.accessibility($("#element"),"",fixtures.accessibility.isTabbable)).toBe(false);
        });
        it("Tab div", function() {

            expect(il.uiTests.accessibility($("#sibling1"),"",fixtures.accessibility.isTabbable)).toBe(false);
            expect(il.uiTests.accessibility($("#sibling2"),"",fixtures.accessibility.isTabbable)).toBe(false);
        });
        afterEach(function() {
            $("#root").remove();
        });
    });

    describe("Labeled", function() {
        it("Glyphicon Aria label", function() {
            expect(il.uiTests.testRule( fixtures.glyphedButton1HTML,"" ,fixtures.glyphedButtonAriaLabel )).toBe(true);
            expect(il.uiTests.testRule( fixtures.glyphedButton2HTML,"" ,fixtures.glyphedButtonAriaLabel )).toBe(false);
            expect(il.uiTests.testRule( fixtures.glyphedButton3HTML,"" ,fixtures.glyphedButtonAriaLabel )).toBe(false);
        });
    });

    describe("Role", function() {
        it("Button Role", function() {
            expect(il.uiTests.testRule( fixtures.glyphedButton1HTML,"" ,fixtures.glyphedButtonAriaRole )).toBe(true);
            expect(il.uiTests.testRule( fixtures.glyphedButton2HTML,"" ,fixtures.glyphedButtonAriaRole )).toBe(false);
            expect(il.uiTests.testRule( fixtures.glyphedButton3HTML,"" ,fixtures.glyphedButtonAriaRole )).toBe(false);
            expect(il.uiTests.testRule( fixtures.glyphedButton4HTML,"" ,fixtures.glyphedButtonAriaRole )).toBe(true);
        });
    });

});
