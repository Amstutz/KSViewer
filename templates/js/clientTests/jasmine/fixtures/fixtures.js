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
        "selectorsA": [
            {
                "type": "self"
            }
        ],
        "selectorsB": [
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
        "selectorsA": [
            {
                "type": "self"
            }
        ],
        "selectorsB": [
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
    fixtures.badge.glyphPositionVariantTopRight= {
        "type":"css",
        "subtype":"positioning",
        "selectorsB": [
            {
                "type": "self"
            }
        ],
        "selectorsA": [
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
                "type": "isContained"
            },
            {
                "type": "collideHorizontal",
                "stretchHorizontalB": 0.8,
                "not": true
            },
            {
                "type": "collideVertical",
                "stretchVerticalB": 0.8,
                "not": true
            }
        ],
        "not":""
    };
    fixtures.badge.coloringGrey= {
        "type":"css",
        "subtype":"coloring",
        "selectorsA": [
            {
                "type": "self"
            }
        ],
        "coloring":[
            {
                "whichA": "background-color",
                "type": "isGrey"
            }
        ],
        "not":""
    };
    fixtures.badge.coloringRed= {
        "type":"css",
        "subtype":"coloring",
        "selectorsA": [
            {
                "type": "self"
            }
        ],
        "coloring":[
            {
                "whichA": "background-color",
                "type": "isGrey",
                "not": "true"
            },
            {
                "whichA": "background-color",
                "type": "isRedDominant",
                "not": ""
            },
        ],
        "not":""
    };

    fixtures.cssEvent = {};
    fixtures.cssEvent.id = "cssEventKS";
    fixtures.cssEvent.css = "<style id='"+fixtures.cssEvent.id+"Style'>" +
        "#"+fixtures.cssEvent.id+" > a.textColor:hover { color: red; }\n " +
        "#"+fixtures.cssEvent.id+" > a.textColor { color: blue; }\n " +
        "#"+fixtures.cssEvent.id+" > a.bgColor:hover { background-color: red; }\n " +
        "#"+fixtures.cssEvent.id+" > a:hover { cursor: pointer; }\n " +
        "#"+fixtures.cssEvent.id+" > a.underline:hover { text-decoration: underline; }\n " +
        "#"+fixtures.cssEvent.id+" > a.noChange:hover { cursor: default;}\n " +
        "</style>";
    fixtures.cssEvent.html = "<div id='"+fixtures.cssEvent.id+"'><a class='textColor'>Text Color on Hovere</a><a class='bgColor'> bh Color on Hovere</a><a class='noChange'> no Change</a><a class='underline'>underline</a></div>";
    fixtures.cssEvent.hoverUnderline= {
        "type":"css",
        "subtype":"properties",
        "selectorsA": [
            {
                "type": "self"
            }
        ],
        "properties":[
            {
                "simulate":{
                    type: "hover",
                    point: "before"
                },
                "whichA": "text-decoration",
                "value": "underline",
                "type": "isEqual"
            }
        ],
        "not":""
    };
    fixtures.cssEvent.hoverPointer= {
        "type":"css",
        "subtype":"properties",
        "selectorsA": [
            {
                "type": "self"
            }
        ],
        "properties":[
            {
                "simulate":{
                    type: "hover",
                    point: "before"
                },
                "whichA": "cursor",
                "value":"pointer",
                "type": "isEqual"
            }
        ],
        "not":""
    };
    fixtures.cssEvent.hoverColorTextDiff= {
        "type":"css",
        "subtype":"coloring",
        "selectorsA": [
            {
                "type": "self"
            }
        ],
        "selectorsB": [
            {
                "type": "self"
            }
        ],
        "coloring":[
            {
                "simulate":{
                    type: "hover",
                    point: "between"
                },
                "whichA": "color",
                "whichB":"color",
                "type": "isEqual",
                "not": true
            }
        ],
        "not":""
    };
    fixtures.cssEvent.hoverColorBgDiff= {
        "type":"css",
        "subtype":"coloring",
        "selectorsA": [
            {
                "type": "self"
            }
        ],
        "selectorsB": [
            {
                "type": "self"
            }
        ],
        "coloring":[
            {
                "simulate":{
                    type: "hover",
                    point: "between"
                },
                "whichA": "background-color",
                "whichB":"background-color",
                "type": "isEqual",
                "not": true
            }
        ],
        "not":""
    };
    fixtures.accessibility = {};

    fixtures.accessibility.isFocusable= {
        "type":"accessibility",
        "subtype":"focusable",
        "selectors": [
            {
                "type": "self"
            }
        ],
        "not":""
    };
    fixtures.accessibility.isTabbable= {
        "type":"accessibility",
        "subtype":"tabbable",
        "selectors": [
            {
                "type": "self"
            }
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
    fixtures.badge.badgePositionTopRightCorner = {
        "left": 0,
        "top": 0,
        "width": 100,
        "height": 100
    };
    fixtures.badge.glyphPositionTopRightCorner = {
        "left": 90,
        "top": 90,
        "width": 10,
        "height": 10
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
    "<li id='child1' class='children'><a id='grandchild11' class='grandchildren' href='#'>Some Text</a><a id='grandchild12' class='grandchildren'>Some Text</a></li>" +
    "<li id='child2' class='children'><a id='grandchild21' class='grandchildren' href='#'>Some Text</a><a id='grandchild22' class='grandchildren'>Some Text</a></li>" +
    "<li id='child3' class='children'><a id='grandchild31' class='grandchildren'>Some Text</a><a id='grandchild32' class='grandchildren'>Some Text</a></li>" +
    "</ul>" +
    "<div id='sibling2' class='siblings'></div><span id='sibling3' class='siblings'></span>" +
    "</span></div>");

    fixtures.coloredStructure = $("" +
        "<div id='root' style='background-color:rgb(255,240,0)'><span id='parentNeighbour'></span><span id='parent'>" +
            "<div id='sibling1' class='siblings'></div>" +
            "<ul id='element'>" +
                "<li id='child1' class='children'><a id='grandchild11' class='grandchildren' >Some Text</a><a id='grandchild12' class='grandchildren'>Some Text</a></li>" +
                "<li id='child2' class='children'><a id='grandchild21' class='grandchildren'>Some Text</a><a id='grandchild22' class='grandchildren'>Some Text</a></li>" +
                "<li id='child3' class='children'><a id='grandchild31' class='grandchildren' style='background-color:rgba(1,1,1,0.6)'>Some Text</a><a id='grandchild32' class='grandchildren'>Some Text</a></li>" +
            "</ul>" +
            "<div id='sibling2' class='siblings'></div><span id='sibling3' class='siblings' style='background-color:rgb(2,1,0)'></span>" +
        "</span></div>");

    fixtures.glyphedButton1HTML = "<a class='btn btn-default' href='ilias.php' role='button'>" +
        "<span class='glyphicon glyphicon-envelope' aria-label='envelope'></span><span>New Thread<span></a>";
    fixtures.glyphedButton2HTML = "<a class='btn btn-default' href='ilias.php' role='not-button'><span>New Thread<span>" +
        "<span class='glyphicon glyphicon-envelope' aria-label=''></span></a></div>";
    fixtures.glyphedButton3HTML = "<a class='btn btn-default' href='ilias.php'><span>New Thread<span></a>";
    fixtures.glyphedButton4HTML = "<button class='btn btn-default' href='ilias.php' role='button'><span>New Thread<span></button>";

    fixtures.glyphedButtonFixtures = {
        "description": "Glyphed Button",
        "not": "",
        "variants": [
            {
                "type":"structure",
                "subtype":"amount",
                "selectors": [
                    {
                        "type": "children",
                        "selector": ".glyphicon:first-child"
                    }
                ],
                "operator":"=",
                "amount":"1",
                "not":""
            },
            {
                "type":"structure",
                "subtype":"amount",
                "selectors": [
                    {
                        "type": "find",
                        "selector": ".glyphicon"
                    }
                ],
                "operator":"=",
                "amount":"1",
                "not":"true"
            }
        ]
    };

    fixtures.glyphedButtonAriaLabel = {
        "description": "Glyphed Button Aria Label",
        "not": "",
        "variants": [
            {
                "type":"accessibility",
                "subtype":"ariaLabeled",
                "selectors": [
                    {
                        "type": "children",
                        "selector": ".glyphicon"
                    }
                ],
                "not":""
            }
        ]
    };

    fixtures.glyphedButtonAriaRole = {
        "description": "Glyphed Button Aria Role",
        "not": "",
        "variants": [
            {
                "type":"accessibility",
                "subtype":"role",
                "selectors": [
                    {
                        "type": "self"
                    }
                ],
                "role": "button",
                "not":""
            },
            {
                "type":"structure",
                "subtype":"amount",
                "selectors": [
                    {
                        "type": "self",
                        "selector": "a"
                    }
                ],
                "operator":"=",
                "amount":"1",
                "not":"true"
            }
        ]
    };

    fixtures.primaryButton ="<button type='button' class='btn btn-sm btn-primary dropdown-toggle'><span>Add New Item</span></span></button>";
    fixtures.onePrimaryButton = {
        "description": "Only one primary Button",
        "not": "",
        "variants": [
            {
                "type":"structure",
                "subtype":"amount",
                "selectors": [
                    {
                        "type": "root"
                    },{
                        "type": "find",
                        "selector": ".btn-primary"
                    },
                ],
                "operator":"<=",
                "amount":"1",
                "not":""
            }
        ]
    };
    return fixtures;
}
