il.uiTests.colorCheck = function(type,color){
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

    switch(type) {
        case "isWhite":
            return isWhite(color);
        case "isBlack":
            return isBlack(color);
        case "isGrey":
            return isGrey(color);
        case "isTransparent":
            return isTransparent(color);
        case "isOpaque":
            return isOpaque(color);
        case "isRedDominant":
            return isRedDominant(color);
        case "isGreenDominant":
            return isGreenDominant(color);
        case "isBlueDominant":
            return isBlueDominant(color);
    }

};