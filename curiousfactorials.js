console.log(lotsaNumbers());

function lotsaNumbers() {
  var value = 0;
  var curious = false;
  for (var i = 3; i < 1000000; i++) {
    curious = isCurious(i.toString());
    if (curious) {
      console.log(i);
      value += i;
    }
  }
  return value;
}

function isCurious(strNum) {
  var newNum = 0;
  strNum.split('').forEach(function(num) {
    newNum += calcfactorial(Number(num));
  });
  if (newNum == strNum) {
    return true;
  } else {
    return false;
  }
}

function calcfactorial(num) {
  var factorial = 1;
  for (var i = 1; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
}

// function recurseFactorial(num) {
//   if (num <= 1) {
//     return 1;
//   } else {
//     return num * recurseFactorial(num - 1);
//   }
// }
