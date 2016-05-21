il.uiTests.simulateCssEvent = function(type){
    var id = 'ksSimulatedStyle';

    var generateEvent = function(selector){
        var style = "";
        for (var i in document.styleSheets) {
            var rules = document.styleSheets[i].cssRules;
            for (var r in rules) {
                if(rules[r].cssText && rules[r].selectorText){
                    if(rules[r].selectorText.indexOf(selector) > -1){
                        var regex = new RegExp(selector,"g")
                        var text = rules[r].cssText.replace(regex,"");
                        style += text+"\n";
                    }
                }
            }
        }
        $("head").append("<style id="+id+">"+style+"</style>");
    };

    var stopEvent = function(){
        $("#"+id).remove();
    };

    switch(type) {
        case "hover":
            return generateEvent(":hover");
        case "stop":
            return stopEvent();
    }
}