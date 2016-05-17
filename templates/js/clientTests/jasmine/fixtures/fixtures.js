il.uiTests.fixtures = function(){
    var fixtures = {};

    fixtures.badge = {};
    fixtures.badge.html = $("<span class='badge'>1</span>");
    fixtures.badge.htmlGrey = $("<span class='badge' style='background-color:rgb(1,1,1)'>1</span>");
    fixtures.badge.htmlRed = $("<span class='badge' style='background-color:rgb(3,1,1)'>1</span>");

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

    fixtures.badge.glyphPositionVariantTop= {
        "type":"css",
        "subtype":"positioning",
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
        "positioning":[
            {
                "type": "collide"
            },
            {
                "type": "isAbove"
            },
            {
                "type": "isLeft",
                "not": "true"
            }
        ],
        "not":""
    };
    fixtures.badge.glyphPositionVariantBottom= {
        "type":"css",
        "subtype":"positioning",
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
        "positioning":[
            {
                "type": "collide"
            },
            {
                "type": "isAbove",
                "not": "true"
            },
            {
                "type": "isLeft",
                "not": "true"
            }
        ],
        "not":""
    };
    fixtures.badge.coloringGrey= {
        "type":"css",
        "subtype":"backgroundColoring",
        "selectors": [
            {
                "type": "self"
            }
        ],
        "coloring":[
            {
                "type": "isGrey"
            }
        ],
        "not":""
    };
    fixtures.badge.coloringRed= {
        "type":"css",
        "subtype":"backgroundColoring",
        "selectors": [
            {
                "type": "self"
            }
        ],
        "coloring":[
            {
                "type": "isGrey",
                "not": "true"
            },
            {
                "type": "isRedDominant",
                "not": ""
            },
        ],
        "not":""
    };
    fixtures.badge.neighbourHtml1 = {};
    fixtures.badge.neighbourHtml1.id = "neighbourHtml1";
    fixtures.badge.glyphPosition = {
        "left": 50,
        "top": 50,
        "width": 25,
        "height": 25
    };
    fixtures.badge.badgePositionTop = {
        "left": 60,
        "top": 40,
        "width": 25,
        "height": 25
    };
    fixtures.badge.badgePositionBottom = {
        "left": 60,
        "top": 60,
        "width": 25,
        "height": 25
    };
    fixtures.badge.badgePositionWrong = {
        "left": 10,
        "top": 50,
        "width": 50,
        "height": 50
    };
    fixtures.badge.neighbourHtml1.html = $("<a id="+fixtures.badge.neighbourHtml1.id+">" +
        "<span class='glyphicon glyphicon-envelope'></span> " +
        "<span class='badge'>1</span><span class='ilBadgeSpacer'>1</span>" +
    "</a>");
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

    fixtures.button3 = {};
    fixtures.button3.value = "Not Start nor Survey";
    fixtures.button3.html = $("<input class='btn btn-default btn-primary' type='submit' name='cmd[start]' value='"+fixtures.button3.value+"'>");

    fixtures.buttonRules.variant5 = {
        "type":"wording",
        "subtype":"amount",
        "selectorType": "attribute",
        "selector": "value",
        "operator":"=",
        "amount":"0",
        "regex": "( |\\(|^)[a-z][a-zA-Z0-9]*",
        "ignore":{
          "list": ["&nbsp;"],
            "ignoreConjunctions":true,
            "ignorePrepositions":true
        },
        "not":""
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

    fixtures.coloredStructure = $("" +
        "<div id='root' style='background-color:rgb(255,240,0)'><span id='parentNeighbour'></span><span id='parent'>" +
            "<div id='sibling1' class='siblings'></div>" +
            "<ul id='element'>" +
                "<li id='child1' class='children'><a id='grandchild11' class='grandchildren'>Some Text</a><a id='grandchild12' class='grandchildren'>Some Text</a></li>" +
                "<li id='child2' class='children'><a id='grandchild21' class='grandchildren'>Some Text</a><a id='grandchild22' class='grandchildren'>Some Text</a></li>" +
                "<li id='child3' class='children'><a id='grandchild31' class='grandchildren' style='background-color:rgba(1,1,1,0.6)'>Some Text</a><a id='grandchild32' class='grandchildren'>Some Text</a></li>" +
            "</ul>" +
            "<div id='sibling2' class='siblings'></div><span id='sibling3' class='siblings' style='background-color:rgb(2,1,0)'></span>" +
        "</span></div>");

    return fixtures;
}