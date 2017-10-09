"use strict";

Lyngk.State = {VACANT: 0, ONE_PIECE: 1, STACK: 2, FULL_STACK: 3};

Lyngk.Intersection = function (c) {
     var state = Lyngk.State.VACANT;
     var color;
     var pieces = [];

     this.getState = function (){
         return state;
     }

     this.color = function (){
          return color;
     }

     this.piece = function(){
          return piece;
     }

    this.pose = function(c)
    {
        if(pieces.length <=0)
            state = Lyngk.State.ONE_PIECE;
        else if(pieces.length > 0 && pieces.length < 4)
            state = Lyngk.State.STACK;
        else if(pieces.length >= 4)
            state = Lyngk.State.FULL_STACK;
        pieces.push(new Lyngk.Piece(c));
        color = c;
    }


};
