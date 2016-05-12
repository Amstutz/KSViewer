describe("Helper Structure Suite", function() {
    var fixtures = il.uiTests.fixtures();

    var dom = $(fixtures.structure);
    var element = dom.find("#element");
    var child1 = dom.find("#child1");

    beforeEach(function() {

    });

    describe("Get Structure", function() {
        it("Get Siblings", function () {
            expect(il.uiTests.getRelatives(element, "siblings").get()).toContain(dom.find(".siblings")[0]);
            expect(il.uiTests.getRelatives(element, "siblings").get()).toContain(dom.find(".siblings")[1]);
            expect(il.uiTests.getRelatives(element, "siblings").get()).toContain(dom.find(".siblings")[2]);
            expect(il.uiTests.getRelatives(element, "siblings").get()).not.toContain(dom.find(".parent")[0]);
            expect(il.uiTests.getRelatives(element, "siblings").get()).not.toContain(dom.find(".child")[0]);
        });
        it("Get Next", function () {
            expect(il.uiTests.getRelatives(element, "next").get()).toContain(dom.find("#sibling2")[0]);
            expect(il.uiTests.getRelatives(element, "next").get()).not.toContain(dom.find("#sibling3")[0]);
            expect(il.uiTests.getRelatives(element, "next","span").get()).not.toContain(dom.find("#sibling3")[0]);
            expect(il.uiTests.getRelatives(element, "next","span").get()).not.toContain(dom.find("#sibling2")[0]);
        });
        it("Get Next All", function () {
            expect(il.uiTests.getRelatives(element, "nextAll").get()).toContain(dom.find("#sibling2")[0]);
            expect(il.uiTests.getRelatives(element, "nextAll").get()).toContain(dom.find("#sibling3")[0]);
            expect(il.uiTests.getRelatives(element, "nextAll","span").get()).toContain(dom.find("#sibling3")[0]);
            expect(il.uiTests.getRelatives(element, "nextAll","span").get()).not.toContain(dom.find("#sibling2")[0]);
        });
        it("Get Previous", function () {
            expect(il.uiTests.getRelatives(element, "prev").get()).toContain(dom.find("#sibling1")[0]);
        });
        it("Get Previous All", function () {
            expect(il.uiTests.getRelatives(element, "prevAll").get()).toContain(dom.find("#sibling1")[0]);
        });
        it("Get Parent", function () {
            expect(il.uiTests.getRelatives(element, "parent").get()).toContain(dom.find("#parent")[0]);
            expect(il.uiTests.getRelatives(element, "parent").get()).not.toContain(dom.find("#root")[0]);
            expect(il.uiTests.getRelatives(element, "parent").get()).not.toContain(dom.find("#parentNeighbour")[0]);
        });
        it("Get Parents", function () {
            expect(il.uiTests.getRelatives(element, "parents").get()).toContain(dom.find("#parent")[0]);
            expect(il.uiTests.getRelatives(element, "parents").get()).toContain(dom.get()[0]);
            expect(il.uiTests.getRelatives(element, "parents").get()).not.toContain(dom.find("#parentNeighbour")[0]);
        });
        it("Get Children", function () {
            expect(il.uiTests.getRelatives(element, "children").get()).toContain(dom.find("#child1")[0]);
            expect(il.uiTests.getRelatives(element, "children").get()).toContain(dom.find("#child2")[0]);
            expect(il.uiTests.getRelatives(element, "children").get()).toContain(dom.find("#child3")[0]);
            expect(il.uiTests.getRelatives(element, "children").get()).not.toContain(dom.find("#grandchild11")[0]);
        });
        it("Get Selector", function () {
            expect(il.uiTests.getRelatives(element, "selector","#grandchild11").get()).toContain(dom.find("#grandchild11")[0]);
        });
        it("Get Root", function () {
            expect(il.uiTests.getRelatives(element, "root").get()).toContain(dom.get()[0]);
        });
    });

    describe("Get Structure By Chain", function() {
        it("Get Sibling of Parent", function () {
            expect(il.uiTests.getRelativesByChain(child1, [{"type":"parents","selector":"#parent"},{"type":"children","selector":"#sibling1"}]).get()).toContain(dom.find(".siblings")[0]);
        });
    });

    describe("Count Structure", function() {
        it("Count Siblings", function () {
            expect(il.uiTests.countRelatives(element, [{type:"siblings"}])).toBe(3);
        });
        it("Count Next", function () {
            expect(il.uiTests.countRelatives(element, [{type:"next"}])).toBe(1);
            expect(il.uiTests.countRelatives(element, [{type:"next",selector:"span"}])).toBe(0);
        });
        it("Count Next All", function () {
            expect(il.uiTests.countRelatives(element, [{type:"nextAll"}])).toBe(2);
            expect(il.uiTests.countRelatives(element, [{type:"nextAll",selector:"span"}])).toBe(1);
        });
        it("Count Previous", function () {
            expect(il.uiTests.countRelatives(element, [{type:"prev"}])).toBe(1);
        });
        it("Count Previous All", function () {
            expect(il.uiTests.countRelatives(element, [{type:"prevAll"}])).toBe(1);
        });
        it("Count Parent", function () {
            expect(il.uiTests.countRelatives(element, [{type:"parent"}])).toBe(1);
        });
        it("Count Parents", function () {
            expect(il.uiTests.countRelatives(element, [{type:"parents"}])).toBe(2);
        });
        it("Count Children", function () {
            expect(il.uiTests.countRelatives(element, [{type:"children"}])).toBe(3);
        });
        it("Count Selector", function () {
            expect(il.uiTests.countRelatives(element, [{type:"selector",selector:".grandchildren"}])).toBe(6);
        });
        it("Count Root", function () {
            expect(il.uiTests.countRelatives(element, [{type:"root"}])).toBe(1);
        });
    });


});
