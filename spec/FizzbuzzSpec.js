describe('Fizzbuzz', function() {

  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new Fizzbuzz();
  });

  describe('Knows a number can be', function() {

    it('divided by 3', function () {
      expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
    });

  }); // end describe 'Knows a number'

  describe('Knows a number CANT be', function() {

    it('divided by 3', function() {
      expect(fizzbuzz.isDivisibleByThree(5)).toBe(false);
    });



  }); // end describe 'Knows a number CANT'



}); // end describe Fizzbuzz