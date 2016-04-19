// function fib(deg) {
//   if (deg === 1) {
//     return 0;
//   } else if (deg <= 3) {
//     return 1;
//   } else {
//     return fib(deg - 1) + fib(deg - 2);
//   }
// }

// console.log(fib(100));

function fibIt(n) {
  var prev = 0;
  var curr = 1;
  var hold = 0;
  if (n <= 1) {
    return n;
  } else {
    for (var i = 1; i < n; i++) {
      hold = prev;
      prev = curr;
      curr = prev + hold;
    }
    return curr;
  }
}
console.log(fibIt(10));
