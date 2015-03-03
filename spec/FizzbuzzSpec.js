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



}); // end describe Fizzbuzz