il.uiTests.fixtures = function(){
    var fixtures = {};

    fixtures.badge = {};
    fixtures.badge.html = $("<span class='badge'>1</span>");
    fixtures.badge.wrongHtml = $("<span class='badge'>-1</span>");
    fixtures.badge.content = "1";
    fixtures.badge.selector = ".badge";

    fixtures.badge.numberRuleVariant = {
        "type":"wording",
        "subtype":"amount",
        "selectorType": "self",
        "operator":"=",
        "amount":"1",
        "regex": {
            "term":"^(?!0)(\\d+)$",
            "modifier": "g"
        },
        "not":""
    };

    fixtures.badge.glyphNeighbourVariant = {
        "type":"structure",
        "subtype":"amount",
        "selectors": [
            {
                "type": "parents",
                "selector": "a"
            },
            {
                "type": "children",
                "selector": ".glyphicon"
            }
        ],
        "operator":"=",
        "amount":"1",
        "not":""
    };

    fixtures.badge.neighbourHtml1 = $("<a><span class='glyphicon glyphicon-envelope'></span> <span class='badge'>1</span><span class='ilBadgeSpacer'>1</span></a>");
    fixtures.badge.neighbourHtml2 = $("<a><span class='glyphicon glyphicon-user'></span> <span> " +
        "<span><span class='badge'>0</span><span class='ilBadgeSpacer'>1</span></span>" +
        "<span><span class='badge'>1</span><span class='ilBadgeSpacer'>1</span></span>" +
    "</span></a>");
    fixtures.badge.neighbourHtml3 = $("<a><span></span> <span class='badge'>1</span><span class='ilBadgeSpacer'>1</span></a>");

    fixtures.button1 = {};
    fixtures.button1.value = "Start Survey";
    fixtures.button1.wrongValue = "Not Start Survey";
    fixtures.button1.html = $("<input class='btn btn-default btn-primary' type='submit' name='cmd[start]' value='"+fixtures.button1.value+"'>");

    fixtures.button2 = {};
    fixtures.button2.value = "Add New Item";
    fixtures.button2.wrongValue = "Not Add New Item";
    fixtures.button2.content = "<span>&nbsp;Add New Item&nbsp;</span> <span class=\"caret\"></span>";
    fixtures.button2.wrongContent= "Add New Item";
    fixtures.button2.html = $("<button type='button' class='btn btn-sm btn-primary dropdown-toggle' data-toggle='dropdown' data-container='body' id='ilAdvSelListAnchorText_asl'><span>&nbsp;Add New Item&nbsp;</span> <span class='caret'></span></button>");
    fixtures.button2.wrappedHtml = $("<div><button type='button' class='btn btn-sm btn-primary dropdown-toggle' data-toggle='dropdown' data-container='body' id='ilAdvSelListAnchorText_asl'><span>&nbsp;Add New Item&nbsp;</span> <span class='caret'></span></button></div>");

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

    fixtures.structure = $("" +
        "<div id='root'><span id='parentNeighbour'></span><span id='parent'>" +
            "<div id='sibling1' class='siblings'></div>" +
            "<ul id='element'>" +
                "<li id='child1' class='children'><a id='grandchild11' class='grandchildren'>Some Text</a><a id='grandchild12' class='grandchildren'>Some Text</a></li>" +
                "<li id='child2' class='children'><a id='grandchild21' class='grandchildren'>Some Text</a><a id='grandchild22' class='grandchildren'>Some Text</a></li>" +
                "<li id='child3' class='children'><a id='grandchild31' class='grandchildren'>Some Text</a><a id='grandchild32' class='grandchildren'>Some Text</a></li>" +
            "</ul>" +
            "<div id='sibling2' class='siblings'></div><span id='sibling3' class='siblings'></span>" +
        "</span></div>");

    return fixtures;
}
