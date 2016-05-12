il.uiTests.countWords = function(text, regex){
    il.uiTests.log.message(["countWords params",text, regex],"countWords",this.log.levels.debug);

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
        if(!text.split(/\s+/g)){
            return 0;
        }
        return text.split(/\s+/g).length;
    }
    if(!(regex instanceof RegExp)){
        var regex = new RegExp(regex.term,regex.modifier);
    }


    if(!text.match(regex)){
        return 0;
    }
    return text.match(regex).length
}