'use strict';

var LyngkTestCase = TestCase("LyngkTestCase");

LyngkTestCase.prototype.test1= function(){
    var c = new Lyngk.Coordinates("A",1);
    assertFalse(c.valid());

};

LyngkTestCase.prototype.test2= function(){

    var cpt=0;
    var lettre = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

    for(var c=0 ;c<lettre.length ;c++){
        for (var i = 1; i < 10; i++) {
            var coordonnee = new Lyngk.Coordinates(lettre[c], i);
            if (coordonnee.valid()) {
                cpt++;
            }
        }
    }
    assertEquals(cpt, 43);

};


LyngkTestCase.prototype.test3 = function () {
    var coordonnee = new Lyngk.Coordinates('A', 3);
    assertEquals(coordonnee.toString(), 'A3');
};

LyngkTestCase.prototype.test4 = function () {
    var coordonnee = new Lyngk.Coordinates('A', 1);
    assertTrue(coordonnee.toString() === 'invalid');
};

LyngkTestCase.prototype.test5 = function () {
    var coordonnee = new Lyngk.Coordinates('A', 3);
    var clone = coordonnee.clone();
    assertTrue(coordonnee.toString() === clone.toString());
};

LyngkTestCase.prototype.test6 = function () {
    var coordonnee = new Lyngk.Coordinates('D',2);
    var hash = coordonnee.hash();
    assertEquals(hash, 42);
};

LyngkTestCase.prototype.test7 = function () {
    var intersection = new Lyngk.Intersection();
    assertEquals(intersection.getState() , Lyngk.State.VACANT);
};

LyngkTestCase.prototype.test8 = function () {
    var intersection = new Lyngk.Intersection();
    intersection.poser('bleu');
    assertTrue(intersection.getState() === Lyngk.State.ONE_PIECE && intersection.color() === "bleu");
};

LyngkTestCase.prototype.test9 = function () {
    var intersection = new Lyngk.Intersection();
    intersection.poser('bleu');
    intersection.poser('rouge');
    assertTrue(intersection.getState() === Lyngk.State.STACK && intersection.color() === "rouge");
};

LyngkTestCase.prototype.test10 = function () {
    var intersection = new Lyngk.Intersection();
    intersection.poser('noir');
    intersection.poser('ivoir');
    intersection.poser('bleu');
    intersection.poser('rouge');
    intersection.poser('vert');
    assertTrue(intersection.getState() === Lyngk.State.FULL_STACK);
};

LyngkTestCase.prototype.test11 = function () {
    var plateau = new Lyngk.Engine();
    plateau.unePiece();
    assertTrue(plateau.pleinPiece());
};

LyngkTestCase.prototype.test12 = function () {
     var game = new Lyngk.Engine();
     game.pleinPieceFull();


     var cpt_ivoire = 0;
     var cpt_bleu = 0;
     var cpt_rouge = 0;
     var cpt_noir = 0;
     var cpt_vert = 0;
     var cpt_blanc = 0;


     for(var i=0; i<game.getSizePlat(); i++) {
         if(game.getColorFromPieces(i) === Lyngk.Color.IVORY){
         cpt_ivoire++;
         }
         if(game.getColorFromPieces(i) === Lyngk.Color.BLUE){
         cpt_bleu++;
         }
         if(game.getColorFromPieces(i) === Lyngk.Color.RED){
         cpt_rouge++;
         }
         if(game.getColorFromPieces(i) === Lyngk.Color.BLACK){
         cpt_noir++;
         }
         if(game.getColorFromPieces(i) === Lyngk.Color.GREEN){
         cpt_vert++;
         }
         if(game.getColorFromPieces(i) === Lyngk.Color.WHITE){
         cpt_blanc++;
         }
     }

     assertTrue(cpt_ivoire===8 && cpt_bleu===8 && cpt_rouge===8 && cpt_noir===8 && cpt_vert===8 && cpt_blanc===3);
};

LyngkTestCase.prototype.test13 = function () {
    var plateau = new Lyngk.Engine();
    plateau.pleinPieceFull();
    var cpt = 0;

    for (var x = 0; x < plateau.getSizePlat() ; x++) {
        if (plateau.getTaillePileInter(x) === 1) {
            cpt++;
        }
    }
    assertTrue(cpt === 43);

};


LyngkTestCase.prototype.test14 = function () {
    var intersection = new Lyngk.Intersection();

    intersection.poser(Lyngk.Color.BLUE);
    intersection.poser(Lyngk.Color.RED);

    assertEquals(intersection.color() , Lyngk.Color.RED)
};

LyngkTestCase.prototype.test15 = function () {
    var dep = new Lyngk.Engine();
    var plat = dep.plateau();
    var colorA3 = plat['A3'].color();
    dep.deplacer('A3','B3');

    assertTrue(plat['B3'].color() === colorA3 && plat['A3'].getHeight() === Lyngk.State.VACANT);
};

