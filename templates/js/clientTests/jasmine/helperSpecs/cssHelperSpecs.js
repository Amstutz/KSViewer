describe("Helper CSS Suite", function() {
    var fixtures = il.uiTests.fixtures();

    describe("Collision Checks", function() {
        beforeEach(function() {
            fixtures.rect1 = {
                left: 0,
                top: 0,
                width: 100,
                height: 100
            };
            fixtures.rect2 = {
                left: 50,
                top: 50,
                width: 50,
                height: 50
            };
            fixtures.rect3 = {
                left: 10,
                top: 10,
                width: 10,
                height: 10
            };
            fixtures.rect4 = {
                left: 25,
                top: 25,
                width: 50,
                height: 50
            };
            fixtures.rect5 = {
                left: 90,
                top: 10,
                width: 5,
                height: 5
            };
            fixtures.rect6 = {
                left: 10,
                top: 90,
                width: 5,
                height: 5
            };
            fixtures.rect7 = {
                left: 10,
                top: 90,
                width: 5,
                height: 5
            };
        });

        it("equalLeft", function () {
            expect(il.uiTests.collisionCheck("equalLeft", fixtures.rect6,fixtures.rect7)).toBe(true);
            expect(il.uiTests.collisionCheck("equalLeft", fixtures.rect6,fixtures.rect5)).toBe(false);
        });

        it("equalRight", function () {
            expect(il.uiTests.collisionCheck("equalRight", fixtures.rect6,fixtures.rect7)).toBe(true);
            expect(il.uiTests.collisionCheck("equalRight", fixtures.rect6,fixtures.rect5)).toBe(false);
        });

        it("equalTop", function () {
            expect(il.uiTests.collisionCheck("equalTop", fixtures.rect6,fixtures.rect7)).toBe(true);
            expect(il.uiTests.collisionCheck("equalTop", fixtures.rect6,fixtures.rect5)).toBe(false);
        });
        it("equalBottom", function () {
            expect(il.uiTests.collisionCheck("equalBottom", fixtures.rect6,fixtures.rect7)).toBe(true);
            expect(il.uiTests.collisionCheck("equalBottom", fixtures.rect6,fixtures.rect5)).toBe(false);
        });
        it("equalHorizontal", function () {
            expect(il.uiTests.collisionCheck("equalHorizontal", fixtures.rect6,fixtures.rect7)).toBe(true);
            expect(il.uiTests.collisionCheck("equalHorizontal", fixtures.rect6,fixtures.rect5)).toBe(false);
        });
        it("equalVertical", function () {
            expect(il.uiTests.collisionCheck("equalVertical", fixtures.rect6,fixtures.rect7)).toBe(true);
            expect(il.uiTests.collisionCheck("equalVertical", fixtures.rect6,fixtures.rect5)).toBe(false);
        });
        it("equal", function () {
            expect(il.uiTests.collisionCheck("equal", fixtures.rect6,fixtures.rect7)).toBe(true);
            expect(il.uiTests.collisionCheck("equal", fixtures.rect6,fixtures.rect5)).toBe(false);
            expect(il.uiTests.collisionCheck("equal", fixtures.rect6,fixtures.rect3)).toBe(false);

        });

        it("isLeft", function () {
            expect(il.uiTests.collisionCheck("isLeft", fixtures.rect1,fixtures.rect2)).toBe(true);
            expect(il.uiTests.collisionCheck("isLeft", fixtures.rect2,fixtures.rect1)).toBe(false);
            expect(il.uiTests.collisionCheck("isLeft", fixtures.rect6,fixtures.rect7)).toBe(false);
        });

        it("isLeftOut", function () {
            expect(il.uiTests.collisionCheck("isLeftOut", fixtures.rect1,fixtures.rect2)).toBe(false);
            expect(il.uiTests.collisionCheck("isLeftOut", fixtures.rect6,fixtures.rect7)).toBe(false);
            expect(il.uiTests.collisionCheck("isLeftOut", fixtures.rect3,fixtures.rect2)).toBe(true);
        });

        it("isAbove", function () {
            expect(il.uiTests.collisionCheck("isAbove", fixtures.rect1,fixtures.rect2)).toBe(true);
            expect(il.uiTests.collisionCheck("isAbove", fixtures.rect6,fixtures.rect7)).toBe(false);
            expect(il.uiTests.collisionCheck("isAbove", fixtures.rect4,fixtures.rect2)).toBe(true);
            expect(il.uiTests.collisionCheck("isAbove", fixtures.rect3,fixtures.rect2)).toBe(true);
        });

        it("isAboveOut", function () {
            expect(il.uiTests.collisionCheck("isAboveOut", fixtures.rect1,fixtures.rect2)).toBe(false);
            expect(il.uiTests.collisionCheck("isAboveOut", fixtures.rect6,fixtures.rect7)).toBe(false);
            expect(il.uiTests.collisionCheck("isAboveOut", fixtures.rect4,fixtures.rect2)).toBe(false);
            expect(il.uiTests.collisionCheck("isAboveOut", fixtures.rect3,fixtures.rect2)).toBe(true);
        });

        it("isBellow", function () {
            expect(il.uiTests.collisionCheck("isBellow", fixtures.rect1,fixtures.rect2)).toBe(false);
            expect(il.uiTests.collisionCheck("isBellow", fixtures.rect2,fixtures.rect1)).toBe(false);
            expect(il.uiTests.collisionCheck("isBellow", fixtures.rect6,fixtures.rect7)).toBe(false);
            expect(il.uiTests.collisionCheck("isBellow", fixtures.rect3,fixtures.rect2)).toBe(false);
            expect(il.uiTests.collisionCheck("isBellow", fixtures.rect2,fixtures.rect3)).toBe(true);
        });

        it("Collide Set 1", function () {
            expect(il.uiTests.collisionCheck("collide", fixtures.rect1,fixtures.rect2)).toBe(true);
            expect(il.uiTests.collisionCheck("collide", fixtures.rect1,fixtures.rect3)).toBe(true);
            expect(il.uiTests.collisionCheck("collide", fixtures.rect1,fixtures.rect4)).toBe(true);
            expect(il.uiTests.collisionCheck("collide", fixtures.rect1,fixtures.rect5)).toBe(true);
            expect(il.uiTests.collisionCheck("collide", fixtures.rect1,fixtures.rect6)).toBe(true);
            expect(il.uiTests.collisionCheck("collide", fixtures.rect2,fixtures.rect1)).toBe(true);
            expect(il.uiTests.collisionCheck("collide", fixtures.rect3,fixtures.rect1)).toBe(true);
            expect(il.uiTests.collisionCheck("collide", fixtures.rect4,fixtures.rect1)).toBe(true);
            expect(il.uiTests.collisionCheck("collide", fixtures.rect5,fixtures.rect1)).toBe(true);
            expect(il.uiTests.collisionCheck("collide", fixtures.rect6,fixtures.rect1)).toBe(true);
        });

        it("Collide Set 2", function () {
            expect(il.uiTests.collisionCheck("collide", fixtures.rect2,fixtures.rect3)).toBe(false);
            expect(il.uiTests.collisionCheck("collide", fixtures.rect3,fixtures.rect2)).toBe(false);
            expect(il.uiTests.collisionCheck("collide", fixtures.rect4,fixtures.rect2)).toBe(true);
            expect(il.uiTests.collisionCheck("collide", fixtures.rect4,fixtures.rect6)).toBe(false);
            expect(il.uiTests.collisionCheck("collide", fixtures.rect4,fixtures.rect5)).toBe(false);
            expect(il.uiTests.collisionCheck("collide", fixtures.rect5,fixtures.rect2)).toBe(false);
            expect(il.uiTests.collisionCheck("collide", fixtures.rect6,fixtures.rect7)).toBe(true);
            expect(il.uiTests.collisionCheck("collide", fixtures.rect5,fixtures.rect6)).toBe(false);
            expect(il.uiTests.collisionCheck("collide", fixtures.rect3,fixtures.rect6)).toBe(false);

        });

    });
});
