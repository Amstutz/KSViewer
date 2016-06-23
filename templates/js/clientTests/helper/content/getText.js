il.uiTests.getText = function(element){

    var clone = $(il.uiTests.wrapElement($(il.uiTests.wrapElement(element)).clone().find(".sr-only").remove().end()));

    return clone.text().trim();
}


