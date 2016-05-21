il.uiTests.colorCheck = function(type,colorA,colorB){
    var  isWhite = function(color){
        return (color.red === 255) && isGrey(color);
    };

    var  isBlack = function(color){
        return color.red === 0 && isGrey(color);
    };

    var  isGrey = function(color){
        return (color.red === color.green) && (color.red === color.blue) && (color.green === color.blue);
    };

    var  isTransparent = function(color){
        return color.alpha == 0;
    };

    var  isOpaque = function(color){
        return color.alpha == 1;
    };

    var  isRedDominant = function(color){
        return (color.red > color.green) && (color.red > color.blue);
    };

    var  isGreenDominant = function(color){
        return (color.green > color.red) && (color.green > color.blue);
    };

    var  isBlueDominant = function(color){
        return (color.blue > color.green) && (color.blue > color.red);
    };


    var  isEqual = function(colorA,colorB){
        return (colorA.red == colorB.red) && (colorA.green == colorB.green) && (colorA.blue == colorB.blue);
    };

    switch(type) {
        case "isWhite":
            return isWhite(colorA);
        case "isBlack":
            return isBlack(colorA);
        case "isGrey":
            return isGrey(colorA);
        case "isTransparent":
            return isTransparent(colorA);
        case "isOpaque":
            return isOpaque(colorA);
        case "isRedDominant":
            return isRedDominant(colorA);
        case "isGreenDominant":
            return isGreenDominant(colorA);
        case "isBlueDominant":
            return isBlueDominant(colorA);

        case "isEqual":
            return isEqual(colorA,colorB);
    }

};