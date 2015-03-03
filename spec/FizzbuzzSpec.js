describe('Fizzbuzz', function() {

  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new Fizzbuzz();
  });

  describe('Knows a number can be', function() {

    it('divided by 3', function () {
      expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
    });

    it('divided by 5', function() {
      expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);
    });

  }); // end describe 'Knows a number'

  describe('Knows a number CANT be', function() {

    it('divided by 3', function() {
      expect(fizzbuzz.isDivisibleByThree(5)).toBe(false);
    });

    it('divided by 5', function() {
      expect(fizzbuzz.isDivisibleByFive(1)).toBe(false);
    });

  }); // end describe 'Knows a number CANT'

  describe('Returns the string ', function() {

    it("'Fizz' if the number is divisible by 3", function() {
      expect(fizzbuzz.pass(3)).toEqual('Fizz');
    });

    it("'Buzz' if the number is divisible by 5", function(){
      expect(fizzbuzz.pass(5)).toEqual('Buzz');
    });

    it("'FizzBuzz' if the number is divisible by 3 & 5", function() {
      expect(fizzbuzz.pass(15)).toEqual('FizzBuzz');
    });


  }); // end describe 'Returns the string..'



}); // end describe Fizzbuzz