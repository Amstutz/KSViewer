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





    describe("Color Checks", function() {
        it("Empty Color From String", function () {
            expect(il.uiTests.getColorFromString("")).toEqual({"red":0,"green":0,"blue":0,"alpha":0});
        });

        it("get Color From String without alpha", function () {
            expect(il.uiTests.getColorFromString("rgb(0,0,0)")).toEqual({"red":0,"green":0,"blue":0,"alpha":1});
            expect(il.uiTests.getColorFromString("rgb(0, 0, 0)")).toEqual({"red":0,"green":0,"blue":0,"alpha":1});
            expect(il.uiTests.getColorFromString("rgb(252, 248, 227)")).toEqual({"red":252,"green":248,"blue":227,"alpha":1});
        });
        it("get Color From String without alpha", function () {
            expect(il.uiTests.getColorFromString("rgba(0, 0, 0, 0)")).toEqual({"red":0,"green":0,"blue":0,"alpha":0});
            expect(il.uiTests.getColorFromString("rgb(1, 11, 111, 0.5)")).toEqual({"red":1,"green":11,"blue":111,"alpha":0.5});
            expect(il.uiTests.getColorFromString("rgb(1, 11, 111, 0.111)")).toEqual({"red":1,"green":11,"blue":111,"alpha":0.111});
            expect(il.uiTests.getColorFromString("rgb(1, 11, 111, 1.0)")).toEqual({"red":1,"green":11,"blue":111,"alpha":1});
        });



        it("Check color white", function () {
            expect(il.uiTests.colorCheck("isWhite",il.uiTests.getColorFromString("rgb(0,0,0)")))
                .toBe(false);
            expect(il.uiTests.colorCheck("isWhite",il.uiTests.getColorFromString("rgb(0,0,0,1)")))
                .toBe(false);
            expect(il.uiTests.colorCheck("isWhite",il.uiTests.getColorFromString("rgb(255,255,255)")))
                .toBe(true);
            expect(il.uiTests.colorCheck("isWhite",il.uiTests.getColorFromString("rgb(255,255,255,1)")))
                .toBe(true);
            expect(il.uiTests.colorCheck("isWhite",il.uiTests.getColorFromString("rgb(1,2,3)")))
                .toBe(false);
            expect(il.uiTests.colorCheck("isWhite",il.uiTests.getColorFromString("rgb(1,1,1)")))
                .toBe(false);
        });
        it("Check color black", function () {
            expect(il.uiTests.colorCheck("isBlack",il.uiTests.getColorFromString("rgb(0,0,0)")))
                .toBe(true);
            expect(il.uiTests.colorCheck("isBlack",il.uiTests.getColorFromString("rgb(0,0,0,1)")))
                .toBe(true);
            expect(il.uiTests.colorCheck("isBlack",il.uiTests.getColorFromString("rgb(255,255,255)")))
                .toBe(false);
            expect(il.uiTests.colorCheck("isBlack",il.uiTests.getColorFromString("rgb(255,255,255,1)")))
                .toBe(false);
            expect(il.uiTests.colorCheck("isBlack",il.uiTests.getColorFromString("rgb(1,2,3)")))
                .toBe(false);
            expect(il.uiTests.colorCheck("isBlack",il.uiTests.getColorFromString("rgb(1,1,1)")))
                .toBe(false);
        });
        it("Check color grey", function () {
            expect(il.uiTests.colorCheck("isGrey",il.uiTests.getColorFromString("rgb(0,0,0)")))
                .toBe(true);
            expect(il.uiTests.colorCheck("isGrey",il.uiTests.getColorFromString("rgb(0,0,0,1)")))
                .toBe(true);
            expect(il.uiTests.colorCheck("isGrey",il.uiTests.getColorFromString("rgb(255,255,255)")))
                .toBe(true);
            expect(il.uiTests.colorCheck("isGrey",il.uiTests.getColorFromString("rgb(255,255,255,1)")))
                .toBe(true);
            expect(il.uiTests.colorCheck("isGrey",il.uiTests.getColorFromString("rgb(1,2,3)")))
                .toBe(false);
            expect(il.uiTests.colorCheck("isGrey",il.uiTests.getColorFromString("rgb(1,1,1)")))
                .toBe(true);
        });
        it("Check color transparent", function () {
            expect(il.uiTests.colorCheck("isTransparent",il.uiTests.getColorFromString("rgb(0,0,0)")))
                .toBe(false);
            expect(il.uiTests.colorCheck("isTransparent",il.uiTests.getColorFromString("rgb(0,0,0)")))
                .toBe(false);
            expect(il.uiTests.colorCheck("isTransparent",il.uiTests.getColorFromString("rgb(0,0,0,1)")))
                .toBe(false);
            expect(il.uiTests.colorCheck("isTransparent",il.uiTests.getColorFromString("rgb(255,255,255)")))
                .toBe(false);
            expect(il.uiTests.colorCheck("isTransparent",il.uiTests.getColorFromString("rgb(255,255,255,1)")))
                .toBe(false);
            expect(il.uiTests.colorCheck("isTransparent",il.uiTests.getColorFromString("rgb(1,2,3,0)")))
                .toBe(true);
        });

        it("Check color isOpaque", function () {
            expect(il.uiTests.colorCheck("isOpaque",il.uiTests.getColorFromString("rgb(0,0,0)")))
                .toBe(true);
            expect(il.uiTests.colorCheck("isOpaque",il.uiTests.getColorFromString("rgb(0,0,0)")))
                .toBe(true);
            expect(il.uiTests.colorCheck("isOpaque",il.uiTests.getColorFromString("rgb(0,0,0,1)")))
                .toBe(true);
            expect(il.uiTests.colorCheck("isOpaque",il.uiTests.getColorFromString("rgb(255,255,255)")))
                .toBe(true);
            expect(il.uiTests.colorCheck("isOpaque",il.uiTests.getColorFromString("rgb(255,255,255,1)")))
                .toBe(true);
            expect(il.uiTests.colorCheck("isOpaque",il.uiTests.getColorFromString("rgb(1,2,3,0)")))
                .toBe(false);
        });

        it("Check color isRedDominant", function () {
            expect(il.uiTests.colorCheck("isRedDominant",il.uiTests.getColorFromString("rgb(0,0,0)")))
                .toBe(false);
            expect(il.uiTests.colorCheck("isRedDominant",il.uiTests.getColorFromString("rgb(3,2,1)")))
                .toBe(true);
            expect(il.uiTests.colorCheck("isRedDominant",il.uiTests.getColorFromString("rgb(2,3,1)")))
                .toBe(false);
            expect(il.uiTests.colorCheck("isRedDominant",il.uiTests.getColorFromString("rgb(2,1,3)")))
                .toBe(false);
        });

        it("Check color isGreenDominant", function () {
            expect(il.uiTests.colorCheck("isGreenDominant",il.uiTests.getColorFromString("rgb(0,0,0)")))
                .toBe(false);
            expect(il.uiTests.colorCheck("isGreenDominant",il.uiTests.getColorFromString("rgb(3,2,1)")))
                .toBe(false);
            expect(il.uiTests.colorCheck("isGreenDominant",il.uiTests.getColorFromString("rgb(2,3,1)")))
                .toBe(true);
            expect(il.uiTests.colorCheck("isGreenDominant",il.uiTests.getColorFromString("rgb(2,1,3)")))
                .toBe(false);
        });

        it("Check color isBlueDominant", function () {
            expect(il.uiTests.colorCheck("isBlueDominant",il.uiTests.getColorFromString("rgb(0,0,0)")))
                .toBe(false);
            expect(il.uiTests.colorCheck("isBlueDominant",il.uiTests.getColorFromString("rgb(3,2,1)")))
                .toBe(false);
            expect(il.uiTests.colorCheck("isBlueDominant",il.uiTests.getColorFromString("rgb(2,3,1)")))
                .toBe(false);
            expect(il.uiTests.colorCheck("isBlueDominant",il.uiTests.getColorFromString("rgb(2,1,3)")))
                .toBe(true);
        });

        it("get Color From DOM", function () {
            expect(il.uiTests.getBackgroundColor(fixtures.coloredStructure)).toEqual({"red":255,"green":240,"blue":0,"alpha":1});
            var sibling3 = fixtures.coloredStructure.find("#sibling3");
            expect(il.uiTests.getBackgroundColor(sibling3)).toEqual({"red":2,"green":1,"blue":0,"alpha":1});
            var grandchild31 = fixtures.coloredStructure.find("#grandchild31");
            expect(il.uiTests.getBackgroundColor(grandchild31)).toEqual({"red":1,"green":1,"blue":1,"alpha":0.6});
        });

        it("get Color From DOM Parents", function () {
            var parent = fixtures.coloredStructure.find("#parent");
            expect(il.uiTests.getBackgroundColor(parent)).toEqual({"red":255,"green":240,"blue":0,"alpha":1});
            var element = fixtures.coloredStructure.find("#element");
            expect(il.uiTests.getBackgroundColor(element)).toEqual({"red":255,"green":240,"blue":0,"alpha":1});
            var grandchild11 = fixtures.coloredStructure.find("#grandchild11");
            expect(il.uiTests.getBackgroundColor(grandchild11)).toEqual({"red":255,"green":240,"blue":0,"alpha":1});
        });
    });
});
