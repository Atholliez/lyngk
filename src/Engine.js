"use strict";

// enums definition
Lyngk.Color = {BLACK: 0, IVORY: 1, BLUE: 2, RED: 3, GREEN: 4, WHITE: 5};

Lyngk.Engine = function () {

    var coordoInters = [];

    this.unePiece = function()
    {
        for (var coordonnee in coordoInters) {
            if (coordoInters.hasOwnProperty(coordonnee))
            {
                coordoInters[coordonnee].poser(Lyngk.Color.IVORY);
            }
        }
    }


    this.plateau = function()
    {
        return coordoInters;
    }


    this.pleinPiece = function()
    {
        for (var coordonnee in coordoInters) {
            if (coordoInters.hasOwnProperty(coordonnee))
            {
                if(coordoInters[coordonnee].getState() != Lyngk.State.ONE_PIECE)
                    return false;
            }
        }
        return true;
    }
};
