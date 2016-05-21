il.uiTests.countRelatives = function(element,selectors){
    il.uiTests.log.message(["countRelatives params",element,selectors],"countRelatives",this.log.levels.debug);
    var relatives = il.uiTests.getRelativesByChain(element,selectors);
    il.uiTests.log.message(["countRelatives countables",relatives,relatives.length],"countRelatives",this.log.levels.debug);
    if(!relatives){
        return 0;
    }
    return relatives.length
}