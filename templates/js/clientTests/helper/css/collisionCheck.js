il.uiTests.collisionCheck = function(type,rect1,rect2){

    var  equalLeft = function(rect1, rect2){
        return rect1.x == rect2.x;
    };

    var  equalRight = function(rect1, rect2){
        return rect1.x + rect1.width == rect2.x + rect2.width;
    };

    var  equalTop = function(rect1, rect2){
        return rect1.y == rect2.y;
    };

    var  equalBottom = function(rect1, rect2){
        return rect1.y + rect1.height == rect2.y+rect2.height;
    };

    var  equalHorizontal = function(rect1, rect2){
        return equalLeft(rect1,rect2) && equalRight(rect1,rect2);
    };

    var  equalVertical = function(rect1, rect2){
        return equalTop(rect1,rect2) && equalBottom(rect1,rect2);
    };

    var  equal = function(rect1, rect2){
        return equalHorizontal(rect1,rect2) && equalHorizontal(rect1,rect2);
    };


    var  isLeft = function(rect1, rect2){
        return rect1.x < rect2.x;
    };

    var  isLeftOut = function(rect1, rect2){
        return rect1.x + rect1.width < rect2.x;
    };

    var  isRight = function(rect1, rect2){
        return rect1.x > rect2.x+rect2.width;
    };

    var  isAbove = function(rect1, rect2){
        return rect1.y < rect2.y;
    };

    var  isAboveOut = function(rect1, rect2){
        return rect1.y + rect1.height < rect2.y;
    };

    var  isBellow = function(rect1, rect2){
        return rect1.y > rect2.y + rect2.height;
    };

    var  collide = function(rect1, rect2){
        return ! (isAboveOut(rect1,rect2) || isBellow(rect1,rect2) || isLeftOut(rect1,rect2) || isRight(rect1,rect2));
    };

    switch(type) {
        case "equalLeft":
            return equalLeft(rect1, rect2);
        case "equalRight":
            return equalRight(rect1, rect2);
        case "equalTop":
            return equalTop(rect1, rect2);
        case "equalBottom":
            return equalBottom(rect1, rect2);
        case "equalHorizontal":
            return equalHorizontal(rect1, rect2);
        case "equalVertical":
            return equalVertical(rect1, rect2);
        case "equal":
            return equal(rect1, rect2);

        case "isLeft":
            return isLeft(rect1, rect2);
        case "isLeftOut":
            return isLeftOut(rect1, rect2);
        case "isRight":
            return isRight(rect1, rect2);
        case "isAbove":
            return isAbove(rect1, rect2);
        case "isAboveOut":
            return isAboveOut(rect1, rect2);
        case "isBellow":
            return isBellow(rect1, rect2);
        case "collide":
            return collide(rect1, rect2);
    }

};