"use strict";

Lyngk.Coordinates = function (c, l) {
    var c=c;
    var l=l;

    this.valid = function(){
        var coordonnee = c + l;
        var tabValid = [ 'C1',
            'E2','D2','C2','B2',
            'G3','F3','E3','D3','C3','B3','A3',
            'G4','F4','E4','D4','C4','B4',
            'H5','G5','F5','E5','D5','C5','B5',
            'H6','G6','F6','E6','D6','C6',
            'I7','H7','G7','F7','E7','D7','C7',
            'H8','G8','F8','E8',
            'G9'];


        if (tabValid.indexOf(coordonnee) === -1) {
            return false;
        }
        else {
            return true;
        }
    };
    this.toString = function() {
        return c + l;
    }
    };



