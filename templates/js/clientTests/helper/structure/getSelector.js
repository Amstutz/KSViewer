il.uiTests.getSelector = function(element){
    var element = $(element);

    var selector = element.parents(":not(html,body)").map(function() {
            var indexOfParent = $(this).index()+1;
            var indexOfParentString = ":nth-child(" + indexOfParent + ")";;
            return this.tagName + indexOfParentString;
        }).get().reverse().join(" ");

    if(element.get()[0]){
        selector += " "+ element.get()[0].nodeName;

    }
    selector += ":nth-child(" + (element.index()+1) + ")";

    return selector;
}
