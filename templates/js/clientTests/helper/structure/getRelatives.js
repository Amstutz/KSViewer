il.uiTests.getRelatives = function(element,type,selector){

    var getSelf = function(element){
        if(!selector){
            return $(element);
        }
        return $(il.uiTests.wrapElement(element)).children(selector);
    };

    var getSiblings = function(element,selector){
        return $(element).siblings(selector);
    };

    var getPrevious = function(element,selector){
        return $(element).prev(selector);
    };

    var getPreviousAll = function(element,selector){
        return $(element).prevAll(selector);
    };

    var getNext = function(element,selector){
        return $(element).next(selector);
    };

    var getNextAll = function(element,selector){
        return $(element).nextAll(selector);
    };

    var getParent = function(element,selector){
        return $(element).parent(selector);
    };

    var getParents = function(element,selector){
        return $(element).parents(selector);
    };

    var getChildren = function(element,selector){
        return $(element).children(selector);
    };

    var getBySelector = function(element,selector){
        return $(element).find(selector);
    };

    var getRoot = function(element){
        var parents = getParents(element);
        return $(parents[parents.length-1]);
    };

    switch(type){
        case "self":
            return getSelf(element,selector);
        case "siblings":
            return getSiblings(element,selector);
        case "prev":
            return getPrevious(element,selector);
        case "prevAll":
            return getPreviousAll(element,selector);
        case "next":
            return getNext(element,selector);
        case "nextAll":
            return getNextAll(element,selector);
        case "parent":
            return getParent(element,selector);
        case "parents":
            return getParents(element,selector);
        case "children":
            return getChildren(element,selector);
        case "find":
        case "selector":
            return getBySelector(element,selector);
        case "root":
            return getRoot(element);
    }
    return $(il.uiTests.wrapElement(element)).text().trim();
}


