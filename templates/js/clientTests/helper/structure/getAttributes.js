il.uiTests.getAttributes = function(element){
    var attributesOfElement = [];
    $.each($(element).get(0).attributes,function(key) {
        attributesOfElement[key] = {"id":this.name,"value":this.value};
    });
    return attributesOfElement;
};
