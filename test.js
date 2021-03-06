var test = require('tape');
var fizzbuzz = require('./index.js');

// Example test to show tape is working:
// test('Testing Tape is working', function(t) {
//   t.equal(1, 1, 'One should equal one');
//   t.end();
// });

test("Check that the function returns a value", function(t){
  var actual = fizzbuzz(1);
  var expected = 1;
  t.equal(actual, expected, "Input of 1 should return 1");
  t.end();
});

test("Check that input of 2 returns 2", function(t){
  var actual = fizzbuzz(2);
  var expected = 2;
  t.equal(actual,expected,"Input of 2 should return 2");
  t.end();
});

test("Check that input of 3 returns Fizz", function(t){
  var actual = fizzbuzz(3);
  var expected = "Fizz";
  t.equal(actual, expected,"Input of 3 should return 'Fizz'");
  t.end();
});

test("Check that multiple of 3 returns Fizz", function(t){
  var actual = fizzbuzz(9);
  var expected = "Fizz";
  t.equal(actual, expected, "Input of 9 should return Fizz");
  t.end();
});

test("Check that multiple of 5 but not 3 returns Buzz", function(t){
  var actual = fizzbuzz(25);
  var expected = "Buzz";
  t.equal(actual, expected, "Input of 25 should return 'Buzz'");
  t.end();
});

test("Check that multiple of 3 and 5 returns FizzBuzz", function(t){
  var actual = fizzbuzz(15);
  var expected = "FizzBuzz";
  t.equal(actual,expected,"Input of 15 should return FizzBuzz");
  t.end();
});