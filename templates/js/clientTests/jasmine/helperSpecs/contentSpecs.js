
describe("Helper Content Suite", function() {
    var testHtml = "<div class='collapse navbar-collapse' id='tb-collapse-2'> <ul class='ilToolbarItems nav navbar-nav'><input class='btn btn-default btn-primary' type='submit' name='cmd[start]' value='Start Survey'> </ul> </div>";

    var fixtures = {};
    fixtures.button1 = {};
    fixtures.button1.value = "Start Survey";
    fixtures.button1.wrongValue = "Not Start Survey";
    fixtures.button1.html = jQuery.parseHTML("<input class='btn btn-default btn-primary' type='submit' name='cmd[start]' value='"+fixtures.button1.value+"'>");

    fixtures.button2 = {};
    fixtures.button2.value = "Add New Item";
    fixtures.button2.wrongValue = "Not Start Survey";
    fixtures.button2.html = jQuery.parseHTML("<button type='button' class='btn btn-sm btn-primary dropdown-toggle' data-toggle='dropdown' data-container='body' id='ilAdvSelListAnchorText_asl'><span>Add New Item</span> <span class='caret'></span></button>");



    beforeEach(function() {

    });

    describe("Get Content", function() {
        it("By Attribute", function() {
            var value = il.uiTests.getContent(fixtures.button.parsedHtml, "attribute", "value");
            expect(value).toBe(fixtures.button.value);
            expect(value).not.toBe(fixtures.button.wrongValue);
        });
        it("By Selector", function() {
            var value = il.uiTests.getContent(fixtures.button.parsedHtml, "attribute", "value");
            expect(value).toBe(fixtures.button.value);
            expect(value).not.toBe(fixtures.button.wrongValue);
        });
    });
});