"use strict";

// enums definition
Lyngk.Color = {BLACK: 0, IVORY: 1, BLUE: 2, RED: 3, GREEN: 4, WHITE: 5};

Lyngk.Engine = function () {

    var coordoInters = [];

    this.unePiece = function () {
        for (var coordonnee in coordoInters) {
            if (coordoInters.hasOwnProperty(coordonnee)) {
                coordoInters[coordonnee].poser(Lyngk.Color.IVORY);
            }
        }
    };


    this.plateau = function () {
        return coordoInters;
    };


    this.pleinPiece = function () {
        for (var coordonnee in coordoInters) {
            if (coordoInters.hasOwnProperty(coordonnee)) {
                if (coordoInters[coordonnee].getState() !== Lyngk.State.ONE_PIECE)
                    return false;
            }
        }
        return true;
    };


    this.pleinPieceFull = function () {
        var lettre = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
        var tabValid = ['C1',
            'E2', 'D2', 'C2', 'B2',
            'G3', 'F3', 'E3', 'D3', 'C3', 'B3', 'A3',
            'G4', 'F4', 'E4', 'D4', 'C4', 'B4',
            'H5', 'G5', 'F5', 'E5', 'D5', 'C5', 'B5',
            'H6', 'G6', 'F6', 'E6', 'D6', 'C6',
            'I7', 'H7', 'G7', 'F7', 'E7', 'D7', 'C7',
            'H8', 'G8', 'F8', 'E8',
            'G9'];

        var cptColor = [0, 0, 0, 0, 0, 0];
        for (var x = 0; x < lettre.length; x++) {
            for (var y = 0; y < 10; y++) {
                if (tabValid.indexOf(lettre[x] + y) !== -1) {
                    var inter = new Lyngk.Intersection(x, y);
                    var rng;
                    do {
                        rng = Math.floor(Math.random() * 6);
                    }
                    while ((cptColor[rng] === 8 && rng !== Lyngk.Color.WHITE) || (cptColor[rng] === 3 && rng === Lyngk.Color.WHITE));
                    inter.poser(rng);
                    coordoInters.push(inter);
                    cptColor[rng]++;

                }
            }
        }

    };

    this.getColorFromPieces = function (i) {
        return coordoInters[i].getPieceColorFromPile();
    };

    this.getSizePlat = function () {
        return coordoInters.length;
    };

    this.getTaillePileInter = function (i) {
        return coordoInters[i].getHeight();
    };

    this.posiCase = function (x) {
        for (var y in coordoInters) {
            if (coordoInters[y].getCoordo().toString() === x) {
                return coordoInters[y];
            }
        }
    };

    this.deplacer = function (depuis, vers) {
        var d = this.posiCase(depuis);
        var v = this.posiCase(vers);
        var vDep = this.valideDep(v,d);

        return vDep;
    };




    this.ligneValide = function (p1,p2){
        if (p1.getX() === p2.getX()) {
            for (var x = p1.getY() - 9; x < 9; x++) {
                if (p1.getHashedCoordo() === p2.getHashedCoordo() + x && x!==0) {
                    return true;
                }
            }
        }
        if (p1.getY() === p2.getY()) {
            for (var x = p1.getY() - 9; x < 9; x++) {
                if (p1.getHashedCoordo() === p2.getHashedCoordo() + 10*x && x!==0) {
                    return true;
                }
            }
        }
        for (var x = p1.getY() - 9; x < 9; x++) {
            if (p1.getHashedCoordo() === p2.getHashedCoordo() + 11*x && x!==0) {
                return true;
            }
        }
        return false;
    };

    this.valideDep=function(p1,p2) {
        var c = this.ligneValide(p1, p2);
        return c;
    };

};
