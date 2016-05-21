il.uiTests.wrapElement = function(element){
    if((typeof element == "string") || !$(element).get(0)){
        return "<span>"+element+"</span>";
    }
    return "<span>"+$(element).get(0).outerHTML +"</span>";
}

