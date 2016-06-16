il.uiTests.simulateCssEvent = function(type){
    var id = 'ksSimulatedStyle';
    var class_name = "ks-simulated";

    var cache = [];
    var generateEvent = function(selector,user_agent_style){
        var style1;
        var style2;

        if(!cache[selector]){
            var style1 = user_agent_style;
            var style2 = user_agent_style;

            for (var i in document.styleSheets) {
                var rules = document.styleSheets[i].cssRules;
                for (var r in rules) {
                    if(rules[r].cssText && rules[r].selectorText){
                        if(rules[r].selectorText.indexOf(selector) > -1){
                            var regex = new RegExp(selector,"g");
                            var text1 = rules[r].cssText.replace(regex,"");
                            var text2 = ".ks-simulated "+rules[r].cssText.replace(regex,"");
                            style1 += text1+"\n";
                            style2 += text2+"\n";

                        }
                    }
                }
            }
            cache[selector] = [];
            cache[selector][1] = style1;
            cache[selector][2] = style2;
        }
        style1 = cache[selector][1];
        style2 = cache[selector][2];

        $("head").append("<style id="+id+"1>"+style1+"</style>");
        $("head").append("<style id="+id+"2>"+style2+"</style>");

        //$("body").append("<div class='"+class_name+"'>"+$("body").html()+"</div>");
        return "";//class_name;
    };

    var invalidateCache = function(){
        cache=[];
    };

    var stopEvent = function(){
        $("#"+id+"1").remove();
        $("#"+id+"2").remove();

        $("."+class_name).remove();

    };

    switch(type) {
        case "hover":
            var user_agent_style = "";
            return generateEvent(":hover",user_agent_style);
        case "focus":
            var user_agent_style = "input, select {outline: auto 5px -webkit-focus-ring-color;}";
            return generateEvent(":focus",user_agent_style);
        case "stop":
            return stopEvent();
        default:
            throw new Error("Unknown event type: ",type);

    }
}