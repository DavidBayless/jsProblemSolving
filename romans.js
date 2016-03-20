var fs = require('fs');

fs.readFile('./romans.txt', function(err, data) {
  var romanNumeralsRaw = data.toString().split('\n');
  // console.log(romanNumeralsRaw);
  var totalSpacesRaw = 0;
  var totalSpacesAdjusted = 0;
  romanNumeralsRaw.forEach(function(num) {
    totalSpacesRaw += num.length;
    totalSpacesAdjusted += numToRoman(numeralDecoder(num)).length;
  });
  console.log(totalSpacesRaw - totalSpacesAdjusted);
});

function numeralDecoder(numeral) {
  var numeralMap = {
    'M': 1000,
    'D': 500,
    'C': 100,
    'L': 50,
    'X': 10,
    'V': 5,
    'I': 1
  };
  var value = 0;
  var numeralChars = numeral.split('');
  for (var i = 0; i < numeralChars.length; i++) {
    if (numeralMap[numeralChars[i]] >= numeralMap[numeralChars[i + 1]]) {
      value += numeralMap[numeralChars[i]];
    } else if (numeralMap[numeralChars[i]] < numeralMap[numeralChars[i + 1]]) {
      value -= numeralMap[numeralChars[i]];
    } else {
      value += numeralMap[numeralChars[i]];
    }
  }
  console.log(value);
  return value;
}

// numeralDecoder('MMMMDCLXXII');

function numToRoman(num) {
  var numCounter = 0;
  var romans = [];
  while (num >= 1000) {
    num -= 1000;
    romans.push('M');
  }
  if (num >= 900) {
    romans.push('C');
    romans.push('M');
    num -= 900;
  }
  if (num < 900 && num >= 500) {
    romans.push('D');
    num -= 500;
    var numC = Math.floor(num/100);
    for (var i = 0; i < numC; i++) {
      romans.push('C');
      num -= 100;
    }
  }
  if (num >= 400) {
    romans.push('C');
    romans.push('D');
    num -= 400;
  }
  if (num < 400 && num > 100) {
    var numCTwo = Math.floor(num/100);
    for (var i = 0; i < numCTwo; i++) {
      romans.push('C');
      num -= 100;
    }
  }
  if (num >= 90) {
    romans.push('X');
    romans.push('C');
    num -= 90;
  }
  if (num >= 50 && num < 90) {
    romans.push('L');
    num -= 50;
    var numX = Math.floor(num/10);
    for (var i = 0; i < numX; i++) {
      romans.push('X');
      num -= 10;
    }
  }
  if (num >= 40) {
    romans.push('X');
    romans.push('L');
    num -= 40;
  }
  if (num < 40 && num >= 10) {
    var numXTwo = Math.floor(num/10);
    for (var i = 0; i < numXTwo; i++) {
      romans.push('X');
      num -= 10;
    }
  }
  if (num === 9) {
    romans.push('I');
    romans.push('X');
    num -= 9;
  }
  if (num >= 5 && num < 9) {
    romans.push('V');
    num -= 5;
    for (var i = 0; i < num; i++) {
      romans.push('I');
      num -= 1;
    }
  }
  if (num === 4) {
    romans.push('I');
    romans.push('V');
    num -= 4;
  }
  if (num < 4 && num > 0) {
    for (var i = 0; i < num; i++) {
      romans.push('I');
      numCounter++;
    }
    num -= numCounter;
  }
  console.log(romans.join(''));
  return romans.join('');
}

// numeralDecoder(numToRoman(10));
