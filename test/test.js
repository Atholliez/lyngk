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

LyngkTestCase.prototype.test12 = function (){
    var plateau = new Lyngk.Engine();
    plateau.huitColor();
    assertTrue(plateau.fullColor())
}