il.uiTests.countWords = function(text, regex, ignore){
    il.uiTests.log.message(["countWords params",text, regex, ignore],"countWords",this.log.levels.debug);
    if(text === undefined){
        return 0;
    }
    if(typeof text !== "string"){
        text = String(text);
    }

    ignore = il.uiTests.generateIgnoredList(ignore);
    for (var key in ignore) {
        text = text.replace(ignore[key], " ");
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

    regex = il.uiTests.generateRegex(regex);

    if(!text.match(regex)){
        return 0;
    }

    return text.match(regex).length
}