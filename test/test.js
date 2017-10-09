'use strict';

var LyngkTestCase = TestCase("LyngkTestCase");

LyngkTestCase.prototype.testA= function(){
    var c = new Lyngk.Coordinates("A",1);
    assertFalse(c.valid());

};

LyngkTestCase.prototype.testB= function(){

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


LyngkTestCase.prototype.testC = function () {
    var coordonnee = new Lyngk.Coordinates('A', 3);
    assertEquals(coordonnee.toString(), 'A3');
};

LyngkTestCase.prototype.testD = function () {
    var coordonnee = new Lyngk.Coordinates('A', 1);
    assertTrue(coordonnee.toString() === 'invalid');
};

LyngkTestCase.prototype.testE = function () {
    var coordonnee = new Lyngk.Coordinates('A', 3);
    var clone = coordonnee.clone();
    assertTrue(coordonnee.toString() === clone.toString());
};

LyngkTestCase.prototype.testF = function () {
    var coordonnee = new Lyngk.Coordinates('D',2);
    var hash = coordonnee.hash();
    assertEquals(hash, 42);
};

LyngkTestCase.prototype.testG = function () {
    var intersection = new Lyngk.Intersection();
    assertEquals(intersection.getState() , Lyngk.State.VACANT);
};

LyngkTestCase.prototype.testH = function () {
    var intersection = new Lyngk.Intersection();
    intersection.pose('bleu');
    assertTrue(intersection.getState() === Lyngk.State.ONE_PIECE && intersection.color() === "bleu");
};

