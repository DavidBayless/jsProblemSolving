function primeFactorization(num) {
  primeArray = [];
  numSqrt = Math.ceil(Math.sqrt(num));
  isDivisible = false;
  retNum = num;
  factorArray = [];

  // for (var i = 2; i < num; i++) {
  //   array.push(i);
  // }

  for (var i = 2; i < numSqrt; i++) {
    isDivisible = false;
    for (var j = 2; j < i - 1; j++) {
      if (i % j === 0) {
        isDivisible = true;
      }
    }
    if (isDivisible === false) {
      primeArray.push(i);
    }
  }

  for (var i = 0; i < primeArray.length; i++) {
    divisible = true;
    while(divisible) {
      if(retNum % primeArray[i] === 0) {
        retNum = (retNum / primeArray[i]);
        factorArray.push(primeArray[i]);
      } else {
        divisible = false;
      }
    }
  }
  factorArray.push(retNum);
  console.log(factorArray);
}


primeFactorization(600);
