"use strict";

Lyngk.State = {VACANT: 0, ONE_PIECE: 1, STACK: 2, FULL_STACK: 3};

Lyngk.Intersection = function (c,l) {
    var state = Lyngk.State.VACANT;
    var color;
    var pile = [];
    var coordo = new Lyngk.Coordinates(c,l)

     this.getState = function (){
         return state;
     };

    this.color = function()
    {
        return color;
    };


    this.getPieceColorFromPile = function(){
        return pile[pile.length -1].getColor();
    };


    this.poser = function(c)
    {
        if(pile.length <=0)
            state = Lyngk.State.ONE_PIECE;
        else if(pile.length > 0 && pile.length < 4)
            state = Lyngk.State.STACK;
        else if(pile.length >= 4)
            state = Lyngk.State.FULL_STACK;
        pile.push(new Lyngk.Piece(c));
        color = c;
    };

    this.getHeight = function()
    {
        return pile.length;
    };

    this.getCoordo = function(){
        return coordo;
    }


    this.getX=function(){
        return coordo.getX();
    };
    this.getY=function(){
        return coordo.getY();
    };


    this.getHashedCoordo=function(){
        return coordo.hash();
    };
};
