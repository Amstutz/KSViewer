il.uiTests.collisionCheck = function(type,rect1,rect2){
    il.uiTests.log.message(["Collision Check Params: ",type,rect1,rect2],"collisionCheck",this.log.levels.debug);
    var  equalLeft = function(rect1, rect2){
        return rect1.left == rect2.left;
    };

    var  equalRight = function(rect1, rect2){
        return rect1.left + rect1.width == rect2.left + rect2.width;
    };

    var  equalTop = function(rect1, rect2){
        return rect1.top == rect2.top;
    };

    var  equalBottom = function(rect1, rect2){
        return rect1.top + rect1.height == rect2.top+rect2.height;
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
        return rect1.left < rect2.left;
    };

    var  isLeftOut = function(rect1, rect2){
        return rect1.left + rect1.width < rect2.left;
    };

    var  isRight = function(rect1, rect2){
        return rect1.left > rect2.left;
    };

    var  isRightSideOut = function(rect1, rect2){
        return rect1.left+rect1.width > rect2.left+rect2.width;
    };

    var  isRightOut = function(rect1, rect2){
        return rect1.left > rect2.left+rect2.width;
    };

    var  isAbove = function(rect1, rect2){
        return rect1.top < rect2.top;
    };

    var  isAboveOut = function(rect1, rect2){
        return rect1.top + rect1.height < rect2.top;
    };

    var  isBellow = function(rect1, rect2){
        return rect1.top > rect2.top;
    };
    var  isBottomSideOut = function(rect1, rect2){
        return rect1.top+rect1.height > rect2.top+rect2.height;
    };
    var  isBellowOut = function(rect1, rect2){
        return rect1.top > rect2.top + rect2.height;
    };

    var  collideHorizontal = function(rect1, rect2){
        return ! (isLeftOut(rect1,rect2) || isRightOut(rect1,rect2));
    };

    var  collideVertical = function(rect1, rect2){
        return ! (isAboveOut(rect1,rect2) || isBellowOut(rect1,rect2));
    };

    var  collide = function(rect1, rect2){
        return collideVertical(rect1,rect2) && collideHorizontal(rect1,rect2);
    };


    var  isContainedVertical = function(rect1, rect2){
        return !isAbove(rect1, rect2) && !isBottomSideOut(rect1, rect2);
    };
    var  isContainedHorizontal = function(rect1, rect2){
        return !isLeft(rect1, rect2) && !isRightSideOut(rect1, rect2);
    };
    var  isContained = function(rect1, rect2){
        return isContainedVertical(rect1, rect2)  && isContainedHorizontal(rect1, rect2);
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
        case "isRightSideOut":
            return isRight(rect1, rect2);
        case "isRightOut":
            return isRightOut(rect1, rect2);
        case "isAbove":
            return isAbove(rect1, rect2);
        case "isAboveOut":
            return isAboveOut(rect1, rect2);
        case "isBellow":
            return isBellow(rect1, rect2);
        case "isBottomSideOut":
            return isBottomSideOut(rect1, rect2);
        case "isBellowOut":
            return isBellowOut(rect1, rect2);

        case "collideHorizontal":
            return collideHorizontal(rect1, rect2);
        case "collideVertical":
            return collideVertical(rect1, rect2);
        case "collide":
            return collide(rect1, rect2);

        case "isContainedVertical":
            return isContainedVertical(rect1, rect2);
        case "isContainedHorizontal":
            return isContainedHorizontal(rect1, rect2);
        case "isContained":
            return isContained(rect1, rect2);

        default:
            throw new Error("Invalid collision Check Type");
    }

};