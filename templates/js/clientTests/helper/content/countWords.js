il.uiTests.countWords = function(text, regex){
    if(text === undefined){
        return 0;
    }
    if(typeof text !== "string"){
        text = String(text);
    }

    text = text.trim();
    if(text == ""){
        return 0;
    }
    if(!regex){
        return text.split(/\s+/g).length;
    }
    if(!(regex instanceof RegExp)){
        throw new Error("No RegExp");
    }

    return text.match(regex).length
}