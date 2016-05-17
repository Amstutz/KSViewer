il.uiTests.getColorFromString = function(colorString){

    if(!colorString){
        return{
            red:parseInt(0),
            green:parseInt(0),
            blue:parseInt(0),
            alpha:parseFloat(0)
        }
    }

    var color = colorString.match(/(\d\.\d+)|(\d+)/g);

    if(!color[3]){
        color[3] = 1;
    }
    return{
        red:parseInt(color[0]),
        green:parseInt(color[1]),
        blue:parseInt(color[2]),
        alpha:parseFloat(color[3])
    }
};