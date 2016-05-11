describe("UI Test Suite", function() {
    describe("Content Suite", function() {

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

        fixtures.buttonRules = {};
        fixtures.buttonRules.variant1 = {
            "type":"wording",
            "subtype":"amount",
            "selectorType": "selector",
            "selector": ".btn",
            "operator":"=",
            "amount":"3",
            "regex": "",
            "not":""
        };
        fixtures.buttonRules.variant2= {
            "type":"wording",
            "subtype":"amount",
            "selectorType": "selector",
            "selector": ".btn",
            "operator":"=",
            "amount":"4",
            "regex": "",
            "not":""
        };
        fixtures.buttonRules.variant3 = {
            "type":"wording",
            "subtype":"amount",
            "selectorType": "attribute",
            "selector": "value",
            "operator":"=",
            "amount":"2",
            "regex": "",
            "not":""
        };
        fixtures.buttonRules.variant4= {
            "type":"wording",
            "subtype":"amount",
            "selectorType": "selector",
            "selector": "value",
            "operator":"=",
            "amount":"4",
            "regex": "",
            "not":""
        };

        fixtures.buttonEntry = {
            "id": "button",
            "title": "Button",
            "selector":".btn",
            "rulesCategories":[
                {
                    "id":"Wording",
                    "rules":  [{
                        "description": "The caption of button SHOULD contain no more than two words.",
                        "level": "MUST",
                        "tests":[
                            {
                                "description": "Test 1.1.1",
                                "not": "",
                                "variants": [fixtures.buttonRules.variant1,fixtures.buttonRules.variant1]
                            }
                        ]
                    }
                    ]
                }
            ]
        };

        beforeEach(function() {

        });

        describe("Wording", function() {
            describe("Amount", function() {
                it("By Selector", function() {
                    expect(il.uiTests.testVariant(fixtures.button2.wrappedHtml,fixtures.buttonEntry.selector,fixtures.buttonRules.variant1)).toBe(true);
                    expect(il.uiTests.testVariant(fixtures.button2.wrappedHtml,fixtures.buttonEntry.selector,fixtures.buttonRules.variant2)).toBe(false);
                });
                it("By Attribute", function() {
                    expect(il.uiTests.testVariant(fixtures.button1.html,fixtures.buttonEntry.selector,fixtures.buttonRules.variant3)).toBe(true);
                    expect(il.uiTests.testVariant(fixtures.button1.html,fixtures.buttonEntry.selector,fixtures.buttonRules.variant4)).toBe(false);

                });
                it("With Attribute", function() {
                    expect(il.uiTests.testVariant(fixtures.button1.html,fixtures.buttonEntry.selector,fixtures.buttonRules.variant3)).toBe(true);
                    expect(il.uiTests.testVariant(fixtures.button1.html,fixtures.buttonEntry.selector,fixtures.buttonRules.variant4)).toBe(false);

                });
            });
        });


    });
});