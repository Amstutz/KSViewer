il.uiTests.compareValues = function(operator,val1, val2, numeric){
    var compareValues = {
        '>': function (val1, val2) { return val1 > val2 },
        '<': function (val1, val2) { return val1 < val2 },
        '<=': function (val1, val2) { return val1 <= val2 },
        '>=': function (val1, val2) { return val1 >= val2 },
        '=': function (val1, val2) { return val1 == val2 },
        '==': function (val1, val2) { return val1 == val2 },
        '!=': function (val1, val2) { return val1 != val2 }
    };

    if(numeric){
        val1 = parseInt(val1);
        val2 = parseInt(val2);
    }

    il.uiTests.log.message(["Compare Values: "+operator,val1, val2, numeric,compareValues[operator](val1, val2)],"compareValues",this.log.levels.debug);
    return compareValues[operator](val1, val2);
};