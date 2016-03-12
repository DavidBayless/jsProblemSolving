//
//
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  if (num >= 2 && num <= 3) {
    return true;
  }
    var sqrt = Math.ceil(Math.sqrt(num));
    var isPrime = true;
    for (var j = 2; j <= sqrt; j++) {
      if (num % j === 0) {
        isPrime = false;
      }
    }
  return isPrime;
}
//
// function findPrime(degree) {
//   numPrimes = 0;
//   for (var i = 0; numPrimes < degree; i++) {
//     if (i <= 3 && i >= 2) {
//       numPrimes++;
//     } else if (i >= 5) {
//       if (isPrime(i)) {
//         numPrimes++;
//       }
//     }
//     returnedPrime = i;
//   }
//   return returnedPrime;
// }
//
// console.log(findPrime(10001));
//








// function findFib(degree) {
//   if (degree <= 2) {
//     return 1;
//   } else {
//     return findFib(degree-1) + findFib(degree-2);
//   }
// }
//
// console.log(findFib(1000));
// var bigInt = require('big-integer');

// function findFibTwo(degree) {
//   var curr = bigInt(1);
//   var prev = bigInt(0);
//   var hold = bigInt(0);
//   for (var i = 1; i < degree; i++) {
//     hold = bigInt(curr);
//     curr = bigInt(curr).plus(bigInt(prev));
//     prev = bigInt(hold);
//   }
//   console.log(curr);
//   var retCurr = '';
//   for (var j = curr.value.length - 1; j >= 0; j--) {
//     if (curr.value[j].toString().length <= 6 && j !== curr.value.length - 1) {
//       retCurr += curr.value[j].toString();
//       for (var k = curr.value[j].toString().length; k < 7; k++) {
//         retCurr += '0';
//       }
//     } else {
//       retCurr += curr.value[j].toString();
//     }
//   }
//   return retCurr.length;
// }
//
// console.log(findFibTwo(4782));

// var retCurr = '23121991727818138037328422712690886258751087197591015730029746633222410998683491592765241309072312630963768154035055185570118274635976188489769151703025313352001428242750177334827124070968584935422726118326375051808095731659933772929512669641606098129792875521429857720194116666779945202265027312055788484996961905098109963602288161533006619660054726612556830683815760796997693559330118041599426575026348643655844302839531911534861454605192581975977225291742210101314769060585719311655981911842688099727786876182233918519369925121851545687994584113300279697432566246851608805564156304800557084466792381276171535308275641509149448854046761635542728331648677819170474853449358330269745376991794954964735471071245291316534263263173822812985575373625295079505815178544243248052779682149731421610465526699009203770123719514702613679618316778374089862767426724255972017439173425193706497753940189924848528561985179024462493423741674814303462760802311754431150848483758377425275942026834067413347998368261675576598218382525'
// var compareCurr = '23121991727818138037328422712690886258751087190759101573002974663322241099868349159276524130907231263096376815403505518557011827463597618848976915170302531335200142824275017733482712407096858490354227261183263750510808095731659903377290295126696416060981297928755214298577201941166667799452022650270312055788484996961905098109963602288161533006619660054726612556830683815760796997693559330118041599426570502634864365584430283953191015348614546051925819759772252917422101013014769060585719311655981911842688099727786876182233918519369925121851504568799458411330027969743256624685160880505641563048005570844667923812761715353082756415090149448854046761635542728331648677819170474853449035833026974537699179495496473547107124529131653426326317382281298557537362529507950581517854424324805277968214973142161046552669900902037701237195147026103679618316778374089862767426724255972017439173420519370649775394018992484852856198501790244624934237413721406748143034627608023117544311508484837583774252759420268340674133479983682616755765982180382525'
// console.log();

function truncPrime() {
  var primeArray = [];
  for (var i = 11; i <=10000000; i++) {
    if (isPrime(i)) {
      if (isTrunc(i)) {
        primeArray.push(i);
        if (primeArray.length >= 11) {
          return primeArray.reduce(function(value, elem) {
            return value += elem;
          });
        }
      }
    }
  }
  return primeArray;
}

function isTrunc(num) {
  var numStrRight = num.toString();
  var numStrLeft = num.toString();
  while (numStrRight.length > 1) {
    numStrRight =  numStrRight.split('').splice(1, numStrRight.length - 1).join('');
    numStrRight = Number(numStrRight);
    if (!isPrime(numStrRight)) {
      return false;
    }
    numStrRight = numStrRight.toString();
  }
  while (numStrLeft.length > 1) {
    numStrLeft = numStrLeft.split('');
    numStrLeft.pop();
    numStrLeft = numStrLeft.join('');
    numStrLeft = Number(numStrLeft);
    if (!isPrime(numStrLeft)) {
      return false;
    }
    numStrLeft = numStrLeft.toString();
  }
  return true;
}

console.log(truncPrime());

// console.log(isTrunc(3797));
