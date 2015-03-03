function Fizzbuzz() {};

Fizzbuzz.prototype.isDivisibleByThree = function(number) {
  return number % 3 === 0
};

Fizzbuzz.prototype.isDivisibleByFive = function(number) {
  return number % 5 === 0
};

Fizzbuzz.prototype.pass = function(number) {
  var result = ""
  if (this.isDivisibleByThree(number)) {
   result += "Fizz"
  }
  if (this.isDivisibleByFive(number)) {
   result += "Buzz"
  }
  return result
};
