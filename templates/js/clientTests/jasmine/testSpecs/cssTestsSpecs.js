describe("CSS Suite", function() {
    var fixtures = il.uiTests.fixtures();

    describe("Positioning", function() {
        describe("Badge Test", function() {
            var glyph;
            var badge;

            beforeEach(function() {
                $("body").append(fixtures.badge.neighbourHtml1.html);
                glyph = $("#neighbourHtml1").find(".glyphicon");
                glyph.css("position","absolute");
                glyph.offset({"left": fixtures.badge.glyphPosition.left,"top": fixtures.badge.glyphPosition.top});
                glyph.width(fixtures.badge.glyphPosition.width);
                glyph.height(fixtures.badge.glyphPosition.height);

                badge = $("#neighbourHtml1").find(".badge");
                badge.css("position","absolute");
            });

            it("Badge Top Test", function() {
                badge.offset({"left": fixtures.badge.badgePositionTop.left,"top": fixtures.badge.badgePositionTop.top});
                badge.width(fixtures.badge.badgePositionTop.width);
                badge.height(fixtures.badge.badgePositionTop.height);

                expect(il.uiTests.css(badge,".badge",fixtures.badge.glyphPositionVariantTop)).toBe(true);
                expect(il.uiTests.css(badge,".badge",fixtures.badge.glyphPositionVariantBottom)).toBe(false);


            });

            it("Badge Bottom Test", function() {
                badge.offset({"left": fixtures.badge.badgePositionBottom.left,"top": fixtures.badge.badgePositionBottom.top});
                badge.width(fixtures.badge.badgePositionBottom.width);
                badge.height(fixtures.badge.badgePositionBottom.height);

                expect(il.uiTests.css(badge,".badge",fixtures.badge.glyphPositionVariantTop)).toBe(false);
                expect(il.uiTests.css(badge,".badge",fixtures.badge.glyphPositionVariantBottom)).toBe(true);


            });

            it("Badge Wrong Test", function() {
                badge.offset({"left": fixtures.badge.badgePositionWrong.left,"top": fixtures.badge.badgePositionWrong.top});
                badge.width(fixtures.badge.badgePositionWrong.width);
                badge.height(fixtures.badge.badgePositionWrong.height);

                expect(il.uiTests.css(badge,".badge",fixtures.badge.glyphPositionVariantTop)).toBe(false);
                expect(il.uiTests.css(badge,".badge",fixtures.badge.glyphPositionVariantBottom)).toBe(false);
            });

            it("Top Right Corner Test pass", function() {
                glyph.offset({"left": fixtures.badge.glyphPositionTopRightCorner.left,"top": fixtures.badge.glyphPositionTopRightCorner.top});
                glyph.width(fixtures.badge.glyphPositionTopRightCorner.width);
                glyph.height(fixtures.badge.glyphPositionTopRightCorner.height);

                badge.offset({"left": fixtures.badge.badgePositionTopRightCorner.left,"top": fixtures.badge.badgePositionTopRightCorner.top});
                badge.width(fixtures.badge.badgePositionTopRightCorner.width);
                badge.height(fixtures.badge.badgePositionTopRightCorner.height);

                console.log("lsdkfjlsdfjalskdfjsld lsdkfjsdl f");
                expect(il.uiTests.css(badge,"",fixtures.badge.glyphPositionVariantTopRight)).toBe(true);
            });

            afterEach(function() {
                $("#neighbourHtml1").remove();
            });
        });
    });
    describe("backgroundColoring", function() {
        describe("Badge Test", function() {

            it("Badge Grey Test", function() {
                expect(il.uiTests.css(fixtures.badge.html,".badge",fixtures.badge.coloringGrey)).toBe(true);
                expect(il.uiTests.css(fixtures.badge.htmlGrey,".badge",fixtures.badge.coloringGrey)).toBe(true);
                expect(il.uiTests.css(fixtures.badge.htmlRed,".badge",fixtures.badge.coloringGrey)).toBe(false);
            });

            it("Badge Red Test", function() {
                expect(il.uiTests.css(fixtures.badge.html,".badge",fixtures.badge.coloringRed)).toBe(false);
                expect(il.uiTests.css(fixtures.badge.htmlGrey,".badge",fixtures.badge.coloringRed)).toBe(false);
                expect(il.uiTests.css(fixtures.badge.htmlRed,".badge",fixtures.badge.coloringRed)).toBe(true);

            });
        });
    });

    describe("CSS Events Tests", function() {
        beforeEach(function() {
            $('head').append( fixtures.cssEvent.css);
            $('body').append( fixtures.cssEvent.html);
        });
        describe("Simulate Hover", function() {
            it("On Link Text Color", function() {
                expect(il.uiTests.css($("#"+fixtures.cssEvent.id+" a.textColor"),"",fixtures.cssEvent.hoverColorTextDiff)).toBe(true);
                expect(il.uiTests.css($("#"+fixtures.cssEvent.id+" a.noChange"), "",fixtures.cssEvent.hoverColorTextDiff)).toBe(false);
                expect(il.uiTests.css($("#"+fixtures.cssEvent.id+" a.bgColor"), "",fixtures.cssEvent.hoverColorTextDiff)).toBe(false);
            });

            it("On Link Bg Color", function() {
                expect(il.uiTests.css($("#"+fixtures.cssEvent.id+" a.textColor"), "", fixtures.cssEvent.hoverColorBgDiff)).toBe(false);
                expect(il.uiTests.css($("#"+fixtures.cssEvent.id+" a.noChange") , "", fixtures.cssEvent.hoverColorBgDiff)).toBe(false);
                expect(il.uiTests.css($("#"+fixtures.cssEvent.id+" a.bgColor") , "", fixtures.cssEvent.hoverColorBgDiff)).toBe(true);
            });

            it("On Link Pointer Cursor", function() {
                expect(il.uiTests.css($("#"+fixtures.cssEvent.id+" a.textColor"), "", fixtures.cssEvent.hoverPointer)).toBe(true);
                expect(il.uiTests.css($("#"+fixtures.cssEvent.id+" a.noChange") , "", fixtures.cssEvent.hoverPointer)).toBe(false);
                expect(il.uiTests.css($("#"+fixtures.cssEvent.id+" a.bgColor") , "", fixtures.cssEvent.hoverPointer)).toBe(true);
            });

            it("On Link Underline", function() {
                expect(il.uiTests.css($("#"+fixtures.cssEvent.id+" a.textColor"), "", fixtures.cssEvent.hoverUnderline)).toBe(false);
                expect(il.uiTests.css($("#"+fixtures.cssEvent.id+" a.noChange") , "", fixtures.cssEvent.hoverUnderline)).toBe(false);
                expect(il.uiTests.css($("#"+fixtures.cssEvent.id+" a.bgColor") , "", fixtures.cssEvent.hoverUnderline)).toBe(false);
                expect(il.uiTests.css($("#"+fixtures.cssEvent.id+" a.underline") , "", fixtures.cssEvent.hoverUnderline)).toBe(true);

            });
        });

        afterEach(function() {
            $("#"+fixtures.cssEvent.id).remove( );
            $("#"+fixtures.cssEvent.id+"Style").remove();
        });
    });

});
