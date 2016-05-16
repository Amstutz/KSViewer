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

            beforeEach(function() {
                $(".badge").remove("#neighbourHtml1");
            });
        });
    });


});
