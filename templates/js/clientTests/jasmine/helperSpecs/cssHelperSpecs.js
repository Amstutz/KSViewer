describe("Helper CSS Suite", function() {
    var fixtures = il.uiTests.fixtures();

    describe("Stretch Rect", function() {
        beforeEach(function() {
            fixtures.rect = {
                left: 0,
                top: 0,
                width: 100,
                height: 100
            };
        });

        it("Stretch 0,0", function () {
            expect(il.uiTests.stretchRect(fixtures.rect)).not.toEqual(il.uiTests.stretchRect(fixtures.rect,0,0));
            expect(il.uiTests.stretchRect(fixtures.rect,0,0)).not.toEqual({left: 0, top: 0, width: 100, height: 100});
            expect(il.uiTests.stretchRect(fixtures.rect,0,0)).toEqual({left: 0, top: 0, width: 0, height: 0});
        });

        it("Stretch 1,1", function () {
            expect(il.uiTests.stretchRect(fixtures.rect)).toEqual({left: 0, top: 0, width: 100, height: 100});
            expect(il.uiTests.stretchRect(fixtures.rect, 1)).toEqual({left: 0, top: 0, width: 100, height: 100});
            expect(il.uiTests.stretchRect(fixtures.rect,1,1)).toEqual({left: 0, top: 0, width: 100, height: 100});
            expect(il.uiTests.stretchRect(fixtures.rect,"1","1")).toEqual({left: 0, top: 0, width: 100, height: 100});
        });
        it("Stretch positive", function () {
            expect(il.uiTests.stretchRect(fixtures.rect,0.5,0.5)).toEqual({left: 0, top: 0, width: 50, height: 50});
            expect(il.uiTests.stretchRect(fixtures.rect,2,2)).toEqual({left: 0, top: 0, width: 200, height: 200});
            expect(il.uiTests.stretchRect(fixtures.rect,2,0.5)).toEqual({left: 0, top: 0, width: 200, height: 50});
            expect(il.uiTests.stretchRect(fixtures.rect,0.5,2)).toEqual({left: 0, top: 0, width: 50, height: 200});
        });
        it("Stretch negative", function () {
            expect(il.uiTests.stretchRect(fixtures.rect,-1,-1)).toEqual({left: -100, top: -100, width: 100, height: 100});
            expect(il.uiTests.stretchRect(fixtures.rect,-0.5,0.5)).toEqual({left: -50, top: 0, width: 50, height: 50});
            expect(il.uiTests.stretchRect(fixtures.rect,2,-2)).toEqual({left: 0, top: -200, width: 200, height: 200});
        });

    });


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
        it("isRight", function () {
            expect(il.uiTests.collisionCheck("isRight", fixtures.rect1,fixtures.rect2)).toBe(false);
            expect(il.uiTests.collisionCheck("isRight", fixtures.rect2,fixtures.rect1)).toBe(true);
            expect(il.uiTests.collisionCheck("isRight", fixtures.rect6,fixtures.rect7)).toBe(false);
        });

        it("isRightOut", function () {
            expect(il.uiTests.collisionCheck("isRightOut", fixtures.rect1,fixtures.rect2)).toBe(false);
            expect(il.uiTests.collisionCheck("isRightOut", fixtures.rect2,fixtures.rect1)).toBe(false);
            expect(il.uiTests.collisionCheck("isRightOut", fixtures.rect6,fixtures.rect7)).toBe(false);
            expect(il.uiTests.collisionCheck("isRightOut", fixtures.rect5,fixtures.rect2)).toBe(false);
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
            expect(il.uiTests.collisionCheck("isBellow", fixtures.rect2,fixtures.rect1)).toBe(true);
            expect(il.uiTests.collisionCheck("isBellow", fixtures.rect6,fixtures.rect7)).toBe(false);
            expect(il.uiTests.collisionCheck("isBellow", fixtures.rect3,fixtures.rect2)).toBe(false);
            expect(il.uiTests.collisionCheck("isBellow", fixtures.rect2,fixtures.rect3)).toBe(true);
        });
        it("isBellowOut", function () {
            expect(il.uiTests.collisionCheck("isBellowOut", fixtures.rect1,fixtures.rect2)).toBe(false);
            expect(il.uiTests.collisionCheck("isBellowOut", fixtures.rect2,fixtures.rect1)).toBe(false);
            expect(il.uiTests.collisionCheck("isBellowOut", fixtures.rect6,fixtures.rect7)).toBe(false);
            expect(il.uiTests.collisionCheck("isBellowOut", fixtures.rect3,fixtures.rect2)).toBe(false);
            expect(il.uiTests.collisionCheck("isBellowOut", fixtures.rect2,fixtures.rect3)).toBe(true);
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
        it("Contains Set 1", function () {
            expect(il.uiTests.collisionCheck("isContained", fixtures.rect1,fixtures.rect2)).toBe(false);
            expect(il.uiTests.collisionCheck("isContained", fixtures.rect1,fixtures.rect3)).toBe(false);
            expect(il.uiTests.collisionCheck("isContained", fixtures.rect1,fixtures.rect4)).toBe(false);
            expect(il.uiTests.collisionCheck("isContained", fixtures.rect1,fixtures.rect5)).toBe(false);
            expect(il.uiTests.collisionCheck("isContained", fixtures.rect1,fixtures.rect6)).toBe(false);
            expect(il.uiTests.collisionCheck("isContained", fixtures.rect2,fixtures.rect1)).toBe(true);
            expect(il.uiTests.collisionCheck("isContained", fixtures.rect3,fixtures.rect1)).toBe(true);
            expect(il.uiTests.collisionCheck("isContained", fixtures.rect4,fixtures.rect1)).toBe(true);
            expect(il.uiTests.collisionCheck("isContained", fixtures.rect5,fixtures.rect1)).toBe(true);
            expect(il.uiTests.collisionCheck("isContained", fixtures.rect6,fixtures.rect1)).toBe(true);
        });
        it("Contains Set 2", function () {
            expect(il.uiTests.collisionCheck("isContained", fixtures.rect2,fixtures.rect3)).toBe(false);
            expect(il.uiTests.collisionCheck("isContained", fixtures.rect3,fixtures.rect2)).toBe(false);
            expect(il.uiTests.collisionCheck("isContained", fixtures.rect4,fixtures.rect2)).toBe(false);
            expect(il.uiTests.collisionCheck("isContained", fixtures.rect4,fixtures.rect6)).toBe(false);
            expect(il.uiTests.collisionCheck("isContained", fixtures.rect4,fixtures.rect5)).toBe(false);
            expect(il.uiTests.collisionCheck("isContained", fixtures.rect5,fixtures.rect2)).toBe(false);
            expect(il.uiTests.collisionCheck("isContained", fixtures.rect6,fixtures.rect7)).toBe(true);
            expect(il.uiTests.collisionCheck("isContained", fixtures.rect5,fixtures.rect6)).toBe(false);
            expect(il.uiTests.collisionCheck("isContained", fixtures.rect3,fixtures.rect6)).toBe(false);

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

        it("get BgColor From DOM", function () {
            expect(il.uiTests.getColor(fixtures.coloredStructure)["background-color"]).toEqual({"red":255,"green":240,"blue":0,"alpha":1});
            var sibling3 = fixtures.coloredStructure.find("#sibling3");
            expect(il.uiTests.getColor(sibling3)["background-color"]).toEqual({"red":2,"green":1,"blue":0,"alpha":1});
            var grandchild31 = fixtures.coloredStructure.find("#grandchild31");
            expect(il.uiTests.getColor(grandchild31)["background-color"]).toEqual({"red":1,"green":1,"blue":1,"alpha":0.6});
        });

        it("get BgColor From DOM Parents", function () {
            var parent = fixtures.coloredStructure.find("#parent");
            expect(il.uiTests.getColor(parent)["background-color"]).toEqual({"red":255,"green":240,"blue":0,"alpha":1});
            var element = fixtures.coloredStructure.find("#element");
            expect(il.uiTests.getColor(element)["background-color"]).toEqual({"red":255,"green":240,"blue":0,"alpha":1});
            var grandchild11 = fixtures.coloredStructure.find("#grandchild11");
            expect(il.uiTests.getColor(grandchild11)["background-color"]).toEqual({"red":255,"green":240,"blue":0,"alpha":1});
        });

    });

    describe("Property Checks", function() {

        it("check property is set", function () {
            expect(il.uiTests.propertyCheck("isSet")).toBe(false);
            expect(il.uiTests.propertyCheck("isSet",0)).toBe(false);
            expect(il.uiTests.propertyCheck("isSet","")).toBe(false);
            expect(il.uiTests.propertyCheck("isSet","","")).toBe(false);
            expect(il.uiTests.propertyCheck("isSet","","rgb(0,0,0)")).toBe(false);
            expect(il.uiTests.propertyCheck("isSet","rgb(0,0,0)")).toBe(true);
            expect(il.uiTests.propertyCheck("isSet","rgb(0,0,0)","")).toBe(true);
            expect(il.uiTests.propertyCheck("isSet","rgb(0,0,0)","rgb(0,0,0)")).toBe(true);

        });

        it("check property is Equal", function () {
            expect(il.uiTests.propertyCheck("isEqual")).toBe(true);
            expect(il.uiTests.propertyCheck("isEqual",0)).toBe(false);
            expect(il.uiTests.propertyCheck("isEqual","")).toBe(false);
            expect(il.uiTests.propertyCheck("isEqual","","")).toBe(true);
            expect(il.uiTests.propertyCheck("isEqual","","rgb(0,0,0)")).toBe(false);
            expect(il.uiTests.propertyCheck("isEqual","rgb(0,0,0)")).toBe(false);
            expect(il.uiTests.propertyCheck("isEqual","rgb(0,0,0)","")).toBe(false);
            expect(il.uiTests.propertyCheck("isEqual","rgb(0,0,0)","rgb(0,0,0)")).toBe(true);
        });

    });
});
