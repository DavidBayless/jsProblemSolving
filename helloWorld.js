//
// function calculate() {
//   var sum = 0;
//   for ( var i = 0; i < arguments.length; i++) {
//        sum += arguments[i];
//      }
//     var calculateTwo = function() {
//       for (var i = 0; i < arguments.length; i++) {
//         sum += arguments[i];
//       }
//       return sum;
//     };
//   return calculateTwo;
// }
//
// console.log(calculate(1,1)(1));

// function createFunctions(n) {
//   var callbacks = [];
//
//   for (var i=0; i<n; i++) {
//     callbacks.push(function(i) {
//       return i;
//     });
//   }
//
//   return callbacks;
// }
//
// var callbacks = createFunctions(5);

function once(fn) {
  var called = false;
  return function(val) {
    if (!called) {
      called = true;
      return fn(val);
    }
  };
}

var logOnce = once(console.log);

console.log(logOnce);
logOnce('foo');
logOnce('bar');

var randomOnce = once(Math.random);
console.log(randomOnce(3));
console.log(randomOnce(4));
