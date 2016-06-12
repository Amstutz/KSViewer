il.uiTests.containsText = function(elements){
    var containsText = false;

    $(elements.contents()).each(function(index,element){
        if(element.data){
            if(element.nodeType==Node.TEXT_NODE && element.data.trim() != ""){
                containsText = true;
                return false;
            }

        }
    });
    return containsText;
}


