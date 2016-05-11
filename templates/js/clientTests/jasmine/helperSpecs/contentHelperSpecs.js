describe("Helper Suite", function() {
    describe("Helper Content Suite", function() {

        var fixtures = {};
        fixtures.button1 = {};
        fixtures.button1.value = "Start Survey";
        fixtures.button1.wrongValue = "Not Start Survey";
        fixtures.button1.html = $("<input class='btn btn-default btn-primary' type='submit' name='cmd[start]' value='"+fixtures.button1.value+"'>");

        fixtures.button2 = {};
        fixtures.button2.value = "Add New Item";
        fixtures.button2.wrongValue = "Not Add New Item";
        fixtures.button2.content = "<span>Add New Item</span> <span class=\"caret\"></span>";
        fixtures.button2.wrongContent= "Add New Item";
        fixtures.button2.html = $("<button type='button' class='btn btn-sm btn-primary dropdown-toggle' data-toggle='dropdown' data-container='body' id='ilAdvSelListAnchorText_asl'><span>Add New Item</span> <span class='caret'></span></button>");
        fixtures.button2.wrappedHtml = $("<div><button type='button' class='btn btn-sm btn-primary dropdown-toggle' data-toggle='dropdown' data-container='body' id='ilAdvSelListAnchorText_asl'><span>Add New Item</span> <span class='caret'></span></button></div>");



        beforeEach(function() {

        });
        it("Compare Values", function() {
            expect(il.uiTests.compareValues("<",1,2)).toBe(true);
            expect(il.uiTests.compareValues("<",2,1)).toBe(false);

            expect(il.uiTests.compareValues(">",2,1)).toBe(true);
            expect(il.uiTests.compareValues(">",1,2)).toBe(false);

            expect(il.uiTests.compareValues(">=",2,1)).toBe(true);
            expect(il.uiTests.compareValues(">=",2,2)).toBe(true);

            expect(il.uiTests.compareValues("<=",1,2)).toBe(true);
            expect(il.uiTests.compareValues("<=",2,2)).toBe(true);

            expect(il.uiTests.compareValues("=",1,2)).toBe(false);
            expect(il.uiTests.compareValues("=",2,2)).toBe(true);

            expect(il.uiTests.compareValues("==",1,2)).toBe(false);
            expect(il.uiTests.compareValues("==",2,2)).toBe(true);

            expect(il.uiTests.compareValues("!=",1,2)).toBe(true);
            expect(il.uiTests.compareValues("!=",2,2)).toBe(false);
        });


        it("Wrap Element", function() {
            var value = il.uiTests.wrapElement(fixtures.button2.wrappedHtml);
            expect($($(value).html()).html()).toBe(fixtures.button2.wrappedHtml.html());
            expect($(value).html()).not.toBe(fixtures.button2.wrappedHtml.html());
        });

        it("By Selector wrapped", function() {
            var value = il.uiTests.getContent(fixtures.button2.wrappedHtml, "selector", ".btn");
            expect(value).toBe(fixtures.button2.content);
            expect(value).not.toBe(fixtures.button2.wrongContent);
        });

        it("By Selector unwrapped", function() {
            var value = il.uiTests.getContent(fixtures.button2.html, "selector", ".btn");
            expect(value).toBe(fixtures.button2.content);
            expect(value).not.toBe(fixtures.button2.wrongContent);
        });


        describe("Get Content", function() {
            it("By Attribute", function() {
                var value = il.uiTests.getContent(fixtures.button1.html, "attribute", "value");
                expect(value).toBe(fixtures.button1.value);
                expect(value).not.toBe(fixtures.button1.wrongValue);
            });

            it("By Selector wrapped", function() {
                var value = il.uiTests.getContent(fixtures.button2.wrappedHtml, "selector", ".btn");
                expect(value).toBe(fixtures.button2.content);
                expect(value).not.toBe(fixtures.button2.wrongContent);
            });

            it("By Selector unwrapped", function() {
                var value = il.uiTests.getContent(fixtures.button2.html, "selector", ".btn");
                expect(value).toBe(fixtures.button2.content);
                expect(value).not.toBe(fixtures.button2.wrongContent);
            });
        });

        describe("Get Text", function() {
            it("Of Text", function() {
                var value = il.uiTests.getText(fixtures.button1.value);
                expect(value).toBe(fixtures.button1.value);
                expect(value).not.toBe(fixtures.button1.wrongValue);
            });

            it("Of Html", function() {
                var value = il.uiTests.getText(fixtures.button2.content , "selector", ".btn");
                expect(value).toBe(fixtures.button2.value);
                expect(value).not.toBe(fixtures.button1.wrongValue);
            });
        });

        describe("Count Words in Text", function() {
            it("Text Empty", function() {
                expect(il.uiTests.countWords()).toBe(0);
                expect(il.uiTests.countWords("")).toBe(0);
                expect(il.uiTests.countWords(" ")).toBe(0);
            });

            it("Text Cases", function() {


                expect(il.uiTests.countWords("word1")).toBe(1);
                expect(il.uiTests.countWords("word1 word2 word3")).toBe(3);
            });

            it("Numeric Cases", function() {
                expect(il.uiTests.countWords(1)).toBe(1);
                expect(il.uiTests.countWords(0)).toBe(1);
            });

            it("Special Cases", function() {
                expect(il.uiTests.countWords(">")).toBe(1);
                expect(il.uiTests.countWords("1 + 1")).toBe(3);
                expect(il.uiTests.countWords("1+1")).toBe(1);
                expect(il.uiTests.countWords("1+1")).toBe(1);
                expect(il.uiTests.countWords("word1     word2   word3")).toBe(3);
                expect(il.uiTests.countWords(" word1     word2   word3 ")).toBe(3);
            });
            it("Regex Cases", function() {
                expect( function(){il.uiTests.countWords("Nothing","no regex")}).toThrow(new Error("No RegExp"));
                expect(il.uiTests.countWords(" word 1     word 2  word3 word ",/word( |$)/g)).toBe(3);
                expect(il.uiTests.countWords(" word 1     word 2  word",/word( |$)/g)).toBe(3);

            });

        });

    });
});