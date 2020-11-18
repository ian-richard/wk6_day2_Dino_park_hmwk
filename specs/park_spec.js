const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

let park;

  beforeEach(function () {
    park = new Park('DinoLand', 10);
    Dinosaur1 = new Dinosaur('Eoraptor', 'carnivore', 25)
    Dinosaur2 = new Dinosaur('Triceratops', 'carnivore', 75)
    Dinosaur3 = new Dinosaur('Diplodocus', 'herbivore', 10)
  });

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, "DinoLand");
  });

  it('should have a ticket price', function() {
    const actual = park.ticket_price;
    assert.strictEqual(actual, 10);
  });

  it('should have a collection of dinosaurs', function() {
    const actual = park.collection;
    assert.deepStrictEqual(actual, [])
  });


  it('should be able to add a dinosaur to its collection', function() {
    park.addDinosaur(Dinosaur1)
    const expected = [Dinosaur1];
    assert.deepStrictEqual(park.collection, expected)
  });

  it('should be able to remove a dinosaur from its collection', function() {
    park.addDinosaur(Dinosaur1)
    park.addDinosaur(Dinosaur2)
    park.RemoveDinosaurByName(Dinosaur1);
    const expected = [Dinosaur2]
    const actual = park.collection;
    assert.deepStrictEqual(actual, expected)
  });

  it('should be able to find the dinosaur that attracts the most visitors', function() {

    park.addDinosaur(Dinosaur1)
    park.addDinosaur(Dinosaur2)
    park.addDinosaur(Dinosaur3)
    const expected = [Dinosaur2]
    const actual = park.mostVisitors();
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to find all dinosaurs of a particular species', function() {
    park.addDinosaur(Dinosaur2)
    park.addDinosaur(Dinosaur2)
    park.addDinosaur(Dinosaur3)
    const expected = [Dinosaur2, Dinosaur2]
    const actual = park.findSpecies(Dinosaur2);
    assert.deepStrictEqual(actual, expected);

  });

  it('should be able to calculate the total number of visitors per day', function() {
    park.addDinosaur(Dinosaur2)
    park.addDinosaur(Dinosaur2)
    park.addDinosaur(Dinosaur3)
    const expected = 160;
    assert.strictEqual(park.totalVisitors(), expected);
  });

  it('should be able to calculate the total number of visitors per year', function() {
    park.addDinosaur(Dinosaur3)
    park.addDinosaur(Dinosaur3)
    const expected = 7300;
    assert.strictEqual(park.visits_per_year(), expected)

  });

  it('should be able to calculate total revenue for one year', function() {
    park.addDinosaur(Dinosaur3)
    park.addDinosaur(Dinosaur3)
    const expected = 73000;
    assert.strictEqual(park.revenue(), expected)

  });

});
