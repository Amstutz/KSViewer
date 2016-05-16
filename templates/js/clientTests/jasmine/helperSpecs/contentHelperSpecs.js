
describe("Helper Content Suite", function() {
    var fixtures = il.uiTests.fixtures();

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



    describe("Get Content", function() {
        it("Own Content", function() {
            var value = il.uiTests.getContent(fixtures.button2.html, "self");
            expect(value).toBe(fixtures.button2.content);
            expect(value).not.toBe(fixtures.button2.wrongContent);

            var value = il.uiTests.getContent(fixtures.badge.html, "self");
            expect(value).toBe(fixtures.badge.content);
        });

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

        it("Of Badge", function() {
            var value = il.uiTests.getContent(fixtures.badge.html, "selector", ".badge");
            expect(value).toBe(fixtures.badge.content);
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
            //expect( function(){il.uiTests.countWords("Nothing","no regex")}).toThrow(new Error("No RegExp"));
            expect(il.uiTests.countWords(" word 1     word 2  word3 word ",/word( |$)/g)).toBe(3);
            expect(il.uiTests.countWords(" word 1     word 2  word",/word( |$)/g)).toBe(3);

        });

        it("Regex Cases 2", function() {
            //expect( function(){il.uiTests.countWords("Nothing","no regex")}).toThrow(new Error("No RegExp"));
            expect(il.uiTests.countWords(" word 1     word 2  word3 word ",{"term":"word( |$)","modifier":"g"})).toBe(3);
            expect(il.uiTests.countWords(" word 1     word 2  word",{"term":"word( |$)","modifier":"g"})).toBe(3);
            expect(il.uiTests.countWords("ofword 1     1word 2  word",{"term":"( |^)word( |$)","modifier":"g"})).toBe(1);
        });

        it("Only one positive Integer", function() {
            expect(il.uiTests.countWords("A",/^\d+$/g)).toBe(0);
            expect(il.uiTests.countWords("A1",/^\d+$/g)).toBe(0);
            expect(il.uiTests.countWords("1A",/^\d+$/g)).toBe(0);
            expect(il.uiTests.countWords("A 1",/^\d+$/g)).toBe(0);
            expect(il.uiTests.countWords("1 A",/^\d+$/g)).toBe(0);
            expect(il.uiTests.countWords("0",/^\d+$/g)).toBe(1);
            expect(il.uiTests.countWords("1",/^\d+$/g)).toBe(1);
            expect(il.uiTests.countWords("19",/^\d+$/g)).toBe(1);
            expect(il.uiTests.countWords(" 1123 ",/^\d+$/g)).toBe(1);
            expect(il.uiTests.countWords("1 22 3",/^\d+$/g)).toBe(0);
            expect(il.uiTests.countWords("1 22 3 ",/^\d+$/g)).toBe(0);
            expect(il.uiTests.countWords("1.1",/^\d+$/g)).toBe(0);

        });

        it("Only positive Numbers without 0", function() {
            expect(il.uiTests.countWords("A",/^(?!0)(\d+)$/g)).toBe(0);
            expect(il.uiTests.countWords("0",/^(?!0)(\d+)$/g)).toBe(0);
            expect(il.uiTests.countWords("1",/^(?!0)(\d+)$/g)).toBe(1);
            expect(il.uiTests.countWords("01",/^(?!0)(\d+)$/g)).toBe(0);
            expect(il.uiTests.countWords("10",/^(?!0)(\d+)$/g)).toBe(1);
            expect(il.uiTests.countWords("1.0",/^(?!0)(\d+)$/g)).toBe(0);
            expect(il.uiTests.countWords("1.1",/^(?!0)(\d+)$/g)).toBe(0);
        });

        it("Only one Float", function() {
            expect(il.uiTests.countWords("A",/^-?\d+\.?\d*$/g)).toBe(0);
            expect(il.uiTests.countWords("A.0",/^-?\d+\.?\d*$/g)).toBe(0);
            expect(il.uiTests.countWords("0",/^-?\d+\.?\d*$/g)).toBe(1);
            expect(il.uiTests.countWords("1",/^-?\d+\.?\d*$/g)).toBe(1);
            expect(il.uiTests.countWords("19",/^-?\d+\.?\d*$/g)).toBe(1);
            expect(il.uiTests.countWords("0.1",/^-?\d+\.?\d*$/g)).toBe(1);
            expect(il.uiTests.countWords("1.1",/^-?\d+\.?\d*$/g)).toBe(1);
            expect(il.uiTests.countWords(" 1123 ",/^-?\d+\.?\d*$/g)).toBe(1);
            expect(il.uiTests.countWords(" 1 22 3",/^-?\d+\.?\d*$/g)).toBe(0);
            expect(il.uiTests.countWords(" 1 012 3",/^-?\d+\.?\d*$/g)).toBe(0);
        });

        it("Ignore words", function() {
            expect(il.uiTests.countWords("word1","","word1")).toBe(0);
            expect(il.uiTests.countWords("word2","","word1")).toBe(1);
            expect(il.uiTests.countWords("word1","",["word1"])).toBe(0);
            expect(il.uiTests.countWords("word2","",["word1"])).toBe(1);
            expect(il.uiTests.countWords("word1 word2 word3","","word1")).toBe(2);
            expect(il.uiTests.countWords("word2 word1 word3","","word1")).toBe(2);
            expect(il.uiTests.countWords("word1 word2 word3","",["word1","word2","noword"])).toBe(1);
            expect(il.uiTests.countWords("word2 word1 word3","",["word1","word2","noword"])).toBe(1);
            expect(il.uiTests.countWords(" word 1     word 2  word3 word ",/word( |$)/g, "word1")).toBe(3);
            expect(il.uiTests.countWords(" word 1     word 2  word3 word ",/word( |$)/g, "word")).toBe(0);

            expect(il.uiTests.countWords(" word 1     word 2  word",/word( |$)/g,"word")).toBe(0);
        });
        it("Ignore regex", function() {
            expect(il.uiTests.countWords("word1","",{term:"word( |$)",modifier:"g"})).toBe(1);
            expect(il.uiTests.countWords("word1","",{term:"word1( |$)",modifier:"g"})).toBe(0);

            expect(il.uiTests.countWords("word1","",[{term:"word( |$)",modifier:"g"}])).toBe(1);
            expect(il.uiTests.countWords("word1","",[{term:"word1( |$)",modifier:"g"}])).toBe(0);

            expect(il.uiTests.countWords("ofword1","of$","word1")).toBe(0);
            expect(il.uiTests.countWords("ofword1","of$",[{term:"( |^)word1( |$)",modifier:"g"}])).toBe(0);
            expect(il.uiTests.countWords("ofword1","of$",[{term:"word1( |$)",modifier:"g"}])).toBe(1);

            expect(il.uiTests.countWords(" word 1     word 2  word3 word ",/word( |$)/g, [{term:"word",modifier:"g"}])).toBe(0);

            expect(il.uiTests.countWords(" word1     word2  word word1word2word",/word( |$)/g,
                [{term:"word1",modifier:"g"},{term:"word2",modifier:"g"}])).toBe(2);
        });
        it("Conjunctions", function() {
            expect(il.uiTests.countWords("Although as far as word1 word2 and before word3","",{list:[],"ignoreConjunctions":true})).toBe(3);
            expect(il.uiTests.countWords("Although as far as word1 word2 and before word3","",{list:[]})).toBe(9);

        });
        it("Prepositons", function() {
            expect(il.uiTests.countWords("For word1 to word2 in addition to word3","",{list:[],"ignorePrepositions":true})).toBe(3);
            expect(il.uiTests.countWords("For word1 to word2 in addition to word3","",{list:[]})).toBe(8);

        });
        it("Prepositons and Conjunctions", function() {
            expect(il.uiTests.countWords("Although as far as word1 word2 and before word3 For word1 to word2 in addition to word3","",
                {list:[],"ignorePrepositions":true,"ignoreConjunctions":true})).toBe(6);
            expect(il.uiTests.countWords("Although as far as word1 word2 and before word3 For word1 to word2 in addition to word3","",
                {list:[]})).toBe(17);

        });
    });

});
