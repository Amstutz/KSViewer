
describe("A suite", function() {
    var testHtml = "<div class='collapse navbar-collapse' id='tb-collapse-2'> <ul class='ilToolbarItems nav navbar-nav'><input class='btn btn-default btn-primary' type='submit' name='cmd[start]' value='Start Survey'> </ul> </div>";

    var button = {};
    button.html = "<input class='btn btn-default btn-primary' type='submit' name='cmd[start]' value='Start Survey'>";
    button.value = "Start Survey";
    button.wrongValue = "Not Start Survey";
    button.parsedHtml = jQuery.parseHTML(button.html);


    beforeEach(function() {

    });

    it("contains spec with an expectation 1", function() {
        var value = il.uiTests.getContent(button.parsedHtml, "attribute", "value");
        expect(value).toBe(button.value);
        expect(value).not.toBe(button.wrongValue);
    });
});