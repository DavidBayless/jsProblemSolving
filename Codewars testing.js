// function getBestWord(points,words){
//   //Return the shortest word realizing the best score
//   var highestScore = 0;
//   var bestWord = '';
//   var bestWordLength = 0;
//   var pointMap = {
//     'A': points[0],
//     'B': points[1],
//     'C': points[2],
//     'D': points[3],
//     'E': points[4],
//     'F': points[5],
//     'G': points[6],
//     'H': points[7],
//     'I': points[8],
//     'J': points[9],
//     'K': points[10],
//     'L': points[11],
//     'M': points[12],
//     'N': points[13],
//     'O': points[14],
//     'P': points[15],
//     'Q': points[16],
//     'R': points[17],
//     'S': points[18],
//     'T': points[19],
//     'U': points[20],
//     'V': points[21],
//     'W': points[22],
//     'X': points[23],
//     'Y': points[24],
//     'Z': points[25],
//   }
//
//   words.forEach(function(word){
//     var wordVal = 0;
//     word.toUpperCase().split('').forEach(function(char){
//       wordVal += pointMap[char];
//     });
//
//     if ((wordVal > highestScore) || (wordVal === highestScore && word.length < bestWordLength)) {
//       bestWord = word;
//       bestWordLength = word.length;
//       highestScore = wordVal;
//     }
//   });
//   console.log(bestWord);
//   return words.indexOf(bestWord)
// }
// var points = [1,3,3,2,1,4,2,4,1,8,10,1,2,1,1,3,8,1,1,1,1,4,10,10,10,10];
// var simpleWords = ["HI","IS","THE","BEST","AAAAAAAAAAAA","UZi", 'bellow'];
//
// console.log(getBestWord(points, simpleWords));
//
//
//
// // 1) shift each letter by a given number but the transformed letter must be a letter (circular shift),
// // 2) replace each digit by its complement to 9,
// // 3) keep such as non alphabetic and non digit characters,
// // 4) downcase each letter in odd position, upcase each letter in even position (the first character is in position 0),
// // 5) reverse the whole result.
//
// function playPass(str, shift) {
//   var alphArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
//   'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
//
//   str = str.toUpperCase();
//   str = str.split('');
//   str.forEach(function(char, index){
//     if (alphArray.indexOf(char) !== -1) {
//       if (alphArray.indexOf(char) + shift > alphArray.length - 1) {
//         var placeHold = alphArray.indexOf(char) + shift;
//         placeHold -= (alphArray.length);
//         if (index % 2 !== 0) {
//           str[index] = alphArray[placeHold].toLowerCase();
//         } else {
//           str[index] = alphArray[placeHold];
//         }
//       } else {
//         if (index % 2 !== 0) {
//           str[index] = alphArray[alphArray.indexOf(char) + shift].toLowerCase();
//         } else {
//           str[index] = alphArray[alphArray.indexOf(char) + shift];
//         }
//       }
//     } else if (char.match(/[0-9]/)) {
//       str[index] = 9 - char;
//     }
//
//   })
//   return str.reverse().join('');
// }
//
// console.log(playPass("I LOVE YOU!!!", 1));

function findThreeDigPalindromicProduct() {
  var largestPalindrome = 0;
  var productOne = 0;
  var productTwo = 0;
  for (var i = 99999; i > 9999; i--) {
    for (var j = i; j > 9999; j--) {
      var num = i * j;
      strNum = num.toString();
      var isPalindrome = checkPalindrome(strNum);
      if (isPalindrome && largestPalindrome < num) {
        largestPalindrome = num;
        productOne = i;
        productTwo = j;
      }
    }
  }
  console.log(productOne+ ' * ' +productTwo);
  console.log(largestPalindrome);
  return largestPalindrome;
}

findThreeDigPalindromicProduct();

function checkPalindrome(str) {
  var revStr = str.split('').reverse().join('');
  if (revStr === str) {
    return true;
  } else {
    return false;
  }
}

// findThreeDigPalindromicProduct();

function eulerDivisibility() {
  var looping = true;
  var counter = 20;
  while(looping) {
    looping = false;
    for (var i = 1; i <= 20; i++) {
      if (counter % i !== 0) {
        looping = true;
      }
    }
    if (looping) {
      counter += 20;
    }
  }
  console.log(counter);
  return counter;
}

// eulerDivisibility();

function squareDiff() {

}
