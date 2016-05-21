describe("Helper Simulate Suite", function() {
    describe("Simulate CSS Event", function() {
        it("Simulate Link Hover", function () {
            expect($("a").css("text-decoration")).toBe("none");
            il.uiTests.simulateCssEvent('hover');
            expect($("a").css("text-decoration")).toBe("underline");
            il.uiTests.simulateCssEvent('stop');
            expect($("a").css("text-decoration")).toBe("none");

        });
    });
});
