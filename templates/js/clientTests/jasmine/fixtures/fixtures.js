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
        "regex": {
            "term":"^(?!0)(\\d+)$",
            "modifier": "g"
        },
        "ignore":{
            "list": ["&nbsp;"],
            "ignoreConjunctions":true,
            "ignorePrepositions":true
        },
        "contentType": "content",
        "operator":"=",
        "amount":"1",
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
        "selectors":[{
            type: "find",
            selector: ".btn"
        }],
        "contentType": "content",
        "operator":"=",
        "amount":"3",
        "regex": "",
        "not":""
    };
    fixtures.buttonRules.variant2= {
        "type":"wording",
        "subtype":"amount",
        "selectors":[{
            type: "find",
            selector: ".btn"
        }],
        "contentType": "content",
        "operator":"=",
        "amount":"4",
        "regex": "",
        "not":""
    };
    fixtures.buttonRules.variant3 = {
        "type":"wording",
        "subtype":"amount",
        "selectors":[{
            type: "self"
        }],
        "contentType": "attribute",
        "contentSelector": "value",
        "operator":"=",
        "amount":"2",
        "regex": "",
        "not":""
    };
    fixtures.buttonRules.variant4= {
        "type":"wording",
        "subtype":"amount",
        "selectors":[{
            type: "self"
        }],
        "contentType": "content",
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
        "selectors":[{
            type: "self"
        }],
        "contentType": "attribute",
        "contentSelector": "value",
        "operator":"=",
        "amount":"0",
        "regex": "( |\\(|^)[a-z][a-zA-Z0-9]*",
        "ignore":{
          "list": ["&nbsp;"],
            "ignoreConjunctions":true,
            "ignorePrepositions":true
        },
        "contentType": "content",
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

    fixtures.binaryCheckboxesRadio = {
        "description": "A checkbox MUST be used whenever a user has to perform a binary choice",
        "not": "",
        "variants": [
            {
                "type":"structure",
                "subtype":"amount",
                "selectors": [
                    {
                        "type": "parents",
                        "selector": ".radio"
                    },{
                        "type": "siblings",
                        "selector": ".radio"
                    }
                ],
                "operator":">",
                "amount":"2",
                "not":""
            }
        ]
    };
    fixtures.radioNot0Words = {
        "description": "Must be labeled",
        "not": "",
        "variants": [
            {
                "type":"wording",
                "subtype":"amount",
                "selectors": [
                    {
                        "type": "parents",
                        "selector": "label"
                    }
                ],
                "operator":">",
                "amount":"0",
                "not":""
            }
        ]
    };
    fixtures.radioSmallerThan6Words = {
        "description": "This label SHOULD not consist of more than 5 words. ",
        "not": "",
        "variants": [
            {
                "type":"wording",
                "subtype":"amount",
                "selectors": [
                    {
                        "type": "parents",
                        "selector": "label"
                    }
                ],
                "operator":"<=",
                "amount":"5",
                "not":""
            }
        ]
    };
    fixtures.radioSmallerThan6 = {
        "description": "Amount must be smaller than 6. ",
        "not": "",
        "variants": [
            {
                "type":"structure",
                "subtype":"amount",
                "selectors": [
                    {
                        "type": "parents",
                        "selector": ".radio"
                    },{
                        "type": "siblings",
                        "selector": ".radio"
                    }
                ],
                "operator":"<=",
                "amount":"5",
                "not":""
            }
        ]
    };
    fixtures.radioButtons1 = $("<div id='mail_type'>" +
    "<div class='radio'>" +
    "<label><input type='radio' name='mail_type' id='mail_type_2' value='2'>For Tutors and Administrators only</label>" +
    "<div class='help-block'>Only administrators</div>" +
    "</div> " +
    "</div>");


    fixtures.radioButtons2 = $("<div id='mail_type'>" +
    "<div class='radio'>" +
        "<label><input type='radio' name='mail_type' id='mail_type_2' value='2'>For Tutors and Administrators only Test more than 5</label>" +
        "<div class='help-block'>Only administrators</div>" +
        "</div> " +
    "<div class='radio'>" +
        "<label><input type='radio' type' id='mail_type_1' value='1' checked='checked'>For all Participants</label>" +
        "<div class='help-block'>Members, administrators and tutors can use the feature ‘Mail to Members’ in the ‘Members’ tab.</div> " +
    "</div></div>");

    fixtures.radioButtons3 = $("<div id='mail_type'>" +
    "<div class='radio'>" +
    "<label><input type='radio' name='mail_type' id='mail_type_2' value='2'></label>" +
    "<div class='help-block'>Only administrators</div>" +
    "</div> " +
    "<div class='radio'>" +
    "<label><input type='radio' type' id='mail_type_1' value='1' checked='checked'></label>" +
    "<div class='help-block'>No Text Members, administrators and tutors can use the feature ‘Mail to Members’ in the ‘Members’ tab.</div> " +
    "</div>" +
    "<div class='radio'>" +
    "<label><input type='radio' type' id='mail_type_1' value='1' checked='checked'>For all Participants</label>" +
    "<div class='help-block'>Members, administrators and tutors can use the feature ‘Mail to Members’ in the ‘Members’ tab.</div> " +
    "</div>" +
    "</div>");
    fixtures.radioButtons6 = $("<div id='mail_type'>" +
    "<div class='radio'>" +
    "<label><input type='radio' name='mail_type' id='mail_type_2' value='2'>For Tutors and Administrators only</label>" +
    "<div class='help-block'>Only administrators</div>" +
    "</div> " +
    "<div class='radio'>" +
    "<label><input type='radio' type' id='mail_type_1' value='1' checked='checked'>For all Participants</label>" +
    "<div class='help-block'>Members, administrators and tutors can use the feature ‘Mail to Members’ in the ‘Members’ tab.</div> " +
    "</div>" +
    "<div class='radio'>" +
    "<label><input type='radio' type' id='mail_type_1' value='1' checked='checked'>For all Participants</label>" +
    "<div class='help-block'>Members, administrators and tutors can use the feature ‘Mail to Members’ in the ‘Members’ tab.</div> " +
    "</div>" +
    "<div class='radio'>" +
    "<label><input type='radio' type' id='mail_type_1' value='1' checked='checked'>For all Participants</label>" +
    "<div class='help-block'>Members, administrators and tutors can use the feature ‘Mail to Members’ in the ‘Members’ tab.</div> " +
    "</div>" +
    "<div class='radio'>" +
    "<label><input type='radio' type' id='mail_type_1' value='1' checked='checked'>For all Participants</label>" +
    "<div class='help-block'>Members, administrators and tutors can use the feature ‘Mail to Members’ in the ‘Members’ tab.</div> " +
    "</div>" +
    "<div class='radio'>" +
    "<label><input type='radio' type' id='mail_type_1' value='1' checked='checked'>For all Participants</label>" +
    "<div class='help-block'>Members, administrators and tutors can use the feature ‘Mail to Members’ in the ‘Members’ tab.</div> " +
    "</div>" +
    "</div>");
    fixtures.checkboxPositive = {
        "type":"wording",
        "subtype":"amount",
        "selectors":[{
            type: "parents",
            selector: ".form-group"
        },{
            type: "children",
            selector: "label"
        }],
        "contentType": "content",
        "operator":">",
        "amount":"0",
        "regex": {
            "term":"( |^)not(?= |$)",
            "modifier": "gi"
        },
        "not":"not"
    };

    fixtures.checkboxDescriptionPlace = {
        "type":"wording",
        "subtype":"amount",
        "selectors":[{
            type: "parents",
            selector: "label"
        }],
        "contentType": "content",
        "operator":"=",
        "amount":"0",
        "not":""
    };

    fixtures.radioCheckboxSectionOke = $("<div class='form-group' id='il_prop_cont_show_members'> " +
    "<label for='show_members' class='col-sm-3 control-label'>Show Members</label> " +
    "<div class='col-sm-9'> " +
    "<div class='checkbox'> " +
    "<label> " +
    "<input type='checkbox' id='show_members' name='show_members' value='1' checked='checked'>&nbsp;</label> " +
    "</div><div class='help-block'>If activated...</div> " +
    "</div> " +
    "</div>");
    fixtures.radioCheckboxSectionWrongDescriptionPlace = $("<div class='form-group' id='il_prop_cont_show_members'> " +
    "<label for='show_members' class='col-sm-3 control-label'>Show Members</label> " +
    "<div class='col-sm-9'> " +
    "<div class='checkbox'> " +
    "<label> " +
    "<input type='checkbox' id='show_members' name='show_members' value='1' checked='checked'>&nbsp;Wrong Desription" +
    "</label> " +
    "</div><div class='help-block'>If activated...</div> " +
    "</div> " +
    "</div>");
    fixtures.radioCheckboxSectionNegation1 = $("<div class='form-group' id='il_prop_cont_show_members'> " +
    "<label for='show_members' class='col-sm-3 control-label'>Not Show Members</label> " +
    "<div class='col-sm-9'> " +
    "<div class='checkbox'> " +
    "<label> " +
    "<input type='checkbox' id='show_members' name='show_members' value='1' checked='checked'>&nbsp;</label> " +
    "</div><div class='help-block'>If activated...</div> " +
    "</div> " +
    "</div>");
    fixtures.radioCheckboxSectionNegation2 = $("<div class='form-group' id='il_prop_cont_show_members'> " +
    "<label for='show_members' class='col-sm-3 control-label'>Show Members not</label> " +
    "<div class='col-sm-9'> " +
    "<div class='checkbox'> " +
    "<label> " +
    "<input type='checkbox' id='show_members' name='show_members' value='1' checked='checked'>&nbsp;</label> " +
    "</div><div class='help-block'>If activated...</div> " +
    "</div> " +
    "</div>");

    fixtures.equalLabelRadioGroup = {
        "type":"wording",
        "subtype":"compare",
        "selectorsA":[{
            type: "parents",
            selector: "label"
        }],
        "selectorsB":[{
            type: "parents",
            selector: ".form-group"
        },{
            type: "children",
            selector: "label"
        }
        ],
        "contentTypeA": "content",
        "contentTypeB": "content",
        "not":"true"
    };

    fixtures.radioGroupLabel = $("<div class='form-group' id='il_prop_cont_mail_type'> " +
    "<label for='mail_type' class='col-sm-3 control-label'>Mail to Members</label> " +
    "<div class='col-sm-9'> " +
    "<div id='mail_type'> " +
    "<div class='radio'> " +
    "<label><input type='radio'  name='mail_type' id='mail_type_2' value='2'>" +
    "For Tutors and Administrators only</label> " +
    "<div class='help-block'>Only administrators and tutors can use.</div> " +
    "</div> " +
    "<div class='radio'> " +
    "<label><input type='radio'  name='mail_type' id='mail_type_1' value='1' checked='checked'>" +
    "Mail to Members</label> " +
    "<div class='help-block'>Members, administrators</div> " +
    "</div> " +
    "</div> " +
    "</div> " +
    "</div>");

    fixtures.orderingLabels = {
        "type":"structure",
        "subtype":"ordering",

        "selectors":[{
            type: "children",
            selector: "div"
        }],
        "items":[
            {
                "variant": {
                    "type": "wording",
                    "subtype": "amount",
                    "regex": "1"
                }
            },
            {
                "variant": {
                    "type": "wording",
                    "subtype": "amount",
                    "regex": "2"
                }
            },
            {
                "variant": {
                    "type": "wording",
                    "subtype": "amount",
                    "regex": "3"
                }
            },
            {
                "variant": {
                    "type": "wording",
                    "subtype": "amount",
                    "regex": "4"
                }
            }
        ],


        "not":""
    };
    fixtures.orderingLabelsOptional = {
        "type":"structure",
        "subtype":"ordering",

        "selectors":[{
            type: "children",
            selector: "div"
        }],
        "items":[
            {
                "variant": {
                    "type": "wording",
                    "subtype": "amount",
                    "regex": "1"
                }
            },
            {
                "variant": {
                    "type": "wording",
                    "subtype": "amount",
                    "regex": "2"
                }
            },
            {
                "variant": {
                    "type": "wording",
                    "subtype": "amount",
                    "regex": "3"
                },
                "optional": true,
            },
            {
                "variant": {
                    "type": "wording",
                    "subtype": "amount",
                    "regex": "4"
                }
            }
        ],

        "not":""
    };
    fixtures.orderingLabelsRepetition = {
        "type":"structure",
        "subtype":"ordering",

        "selectors":[{
            type: "children",
            selector: "div"
        }],
        "items":[
            {
                "variant": {
                    "type": "wording",
                    "subtype": "amount",
                    "regex": "1"
                },
                "repetitions": 2
            },
            {
                "variant": {
                    "type": "wording",
                    "subtype": "amount",
                    "regex": "2"
                }
            },
            {
                "variant": {
                    "type": "wording",
                    "subtype": "amount",
                    "regex": "3"
                },
                "optional": true
            },
            {
                "variant": {
                    "type": "wording",
                    "subtype": "amount",
                    "regex": "4"
                }
            }
        ],

        "not":""
    };
    fixtures.orderingLabelsOptionalRepetition = {
        "type":"structure",
        "subtype":"ordering",

        "selectors":[{
            type: "children",
            selector: "div"
        }],
        "items":[
            {
                "variant": {
                    "type": "wording",
                    "subtype": "amount",
                    "regex": "1"
                }
            },
            {
                "variant": {
                    "type": "wording",
                    "subtype": "amount",
                    "regex": "2"
                }
            },
            {
                "variant": {
                    "type": "wording",
                    "subtype": "amount",
                    "regex": "3"
                },
                "optional": true,
                "repetitions": -1
            },
            {
                "variant": {
                    "type": "wording",
                    "subtype": "amount",
                    "regex": "4"
                }
            }
        ],

        "not":""
    };
    fixtures.orderingLabelsOptionalRepetitionEnd = {
        "type":"structure",
        "subtype":"ordering",

        "selectors":[{
            type: "children",
            selector: "div"
        }],
        "items":[
            {
                "variant": {
                    "type": "wording",
                    "subtype": "amount",
                    "regex": "1"
                }
            },
            {
                "variant": {
                    "type": "wording",
                    "subtype": "amount",
                    "regex": "2"
                }
            },
            {
                "variant": {
                    "type": "wording",
                    "subtype": "amount",
                    "regex": "3"
                }
            },
            {
                "variant": {
                    "type": "wording",
                    "subtype": "amount",
                    "regex": "improbable word and the end",
                    "not":true
                },
                "optional": true,
                "repetitions": -1
            }
        ],

        "not":""
    };
    fixtures.orderingStructure1 = $("<div id='root'><span></span><div>1</div><div>2</div><div>3</div><div>4</div></div>");
    fixtures.orderingStructure2 = $("<div id='root'><span></span><div>1</div><div>3</div><div>3</div><div>4</div></div>");
    fixtures.orderingStructure3 = $("<div id='root'><span></span><div>1</div><div>2</div><div>2</div><div>4</div></div>");
    fixtures.orderingStructure4 = $("<div id='root'><span></span><div>1</div><div>2</div><div>3</div></div>");
    fixtures.orderingStructure5 = $("<div id='root'><span></span><div>1</div></div>");
    fixtures.orderingStructure6 = $("<div id='root'><span></span><div>1</div><div>3</div><div>3</div><div>4</div><div>5</div></div>");
    fixtures.orderingStructure7 = $("<div id='root'><span></span><div>1</div><div>2</div><div>4</div></div>");
    fixtures.orderingStructure8 = $("<div id='root'><span></span><div>1</div><div>1</div><div>2</div><div>3</div><div>4</div></div>");
    fixtures.orderingStructure9 = $("<div id='root'><span></span><div>1</div><div>1</div><div>2</div><div>4</div></div>");
    fixtures.orderingStructure10 = $("<div id='root'><span></span><div>1</div><div>2</div><div>3</div><div>3</div><div>3</div><div>3</div><div>4</div></div>");
    fixtures.orderingStructure11 = $("<div id='root'><span></span><div>1</div><div>2</div><div>3</div><div>4</div><div></div></div>");
    fixtures.orderingStructure12 = $("<div id='root'><span></span><div>1</div><div>2</div><div>3</div><div>sdfsadf asdf sadf  sadf asdf</div></div>");
    fixtures.orderingStructure13 = $("<div id='root'><span></span><div>1</div><div>2</div><div>3</div><div>sdfsadf asdf sadf  sadf asdf</div><div>sdfsadf asdf sadf  sadf asdf asdf</div></div>");

    return fixtures;
}
