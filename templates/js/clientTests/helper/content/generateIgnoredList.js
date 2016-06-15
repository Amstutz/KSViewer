il.uiTests.generateIgnoredList = function(ignore){
    if(!ignore){
        return [];
    }

    if(!ignore.list){
        var list = ignore;
        ignore = {};
        ignore.list = list;
    }

    if(!$.isArray(ignore.list)){
        if(ignore.list !== null && typeof ignore.list === 'object'){
            ignore.list = [ignore.list];
        }else{
            ignore.list = [String(ignore.list)];
        }
    }

    var conjunctions = [];
    var prepositions = [];
    var articles = [];

    if(ignore.ignoreConjunctions){
        conjunctions = [
            "after","although","and", "as far as","as how","as if",
            "as long as", "as soon as","as though", "as well as","as",
            "because","before","both","but",
            "either", "even if","even though",
            "for",
            "how","however",
            "if only","in case","in order that","if",
            "neither","nor",
            "once","only","or","now",
            "provided",
            "rather", "than",
            "since","so that","so",
            "than","that","though","till",
            "unless","until",
            "when","whenever","where as", "wherever","whether","while","where",
            "yet" ];
    }
    if(ignore.ignorePrepositions) {
        prepositions = [
            "about", "above", "according to", "across", "after", "against",  "along with","along", "among", "apart from",
            "around", "as for", "as", "at", "because of", "before", "behind", "below", "beneath", "beside", "between", "beyond",
            "but", "by means of","by",
            "concerning",
            "despite", "down", "during",  "except for", "excepting", "except","for", "from", "in addition to", "in back of",
            "in case of", "in front of", "in place of", "inside", "in spite of", "instead of", "into","in",
            "like",
            "near", "next",
             "off",  "onto", "on top of", "out out of", "outside", "over", "past", "regarding", "round","on","of",
            "since", "through", "throughout", "till",  "toward", "under", "underneath", "unlike", "until",  "upon", "up to","up","to",
            "with, within, without"];
    }
    if(ignore.ignoreArticles) {
        articles = ["a", "an", "few", "some", "the", "one"]
    }



    ignore.list = ignore.list.concat(conjunctions).concat(prepositions).concat(articles);

    for (var key in ignore.list) {
        if(typeof ignore.list[key] == "string"){
            ignore.list[key] = il.uiTests.generateRegex({"term":"( |^)" + ignore.list[key]+"( |$)","modifier":"gi"});
        }else{
            ignore.list[key] = il.uiTests.generateRegex(ignore.list[key]);
        }
    }
    return ignore.list;
};