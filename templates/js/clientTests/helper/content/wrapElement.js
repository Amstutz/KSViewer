il.uiTests.wrapElement = function(element){
    if((typeof element == "string") || !$(element)[0]){
        return "<span>"+element+"</span>";
    }
    return "<span>"+$(element)[0].outerHTML +"</span>";
}

