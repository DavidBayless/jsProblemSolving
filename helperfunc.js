function intersection(arrayOne, arrayTwo) {
  var retArray = [];
  for (var i = 0; i < arrayOne.length; i++) {
    for (var j = 0; j < arrayTwo.length; j++) {
      if (arrayOne[i] === arrayTwo[j]) {
        retArray.push(arrayOne[i]);
      }
    }
  }
  return retArray;
}

console.log(intersection([1,2,3], [1,3,5]));

function union(arrayOne, arrayTwo) {
  for (var i = 0; i < arrayTwo.length; i++) {
    arrayOne.push(arrayTwo[i]);
  }
  return arrayOne;
}

console.log(union([1,2,3], [1,3,5]));

function zip(arrayOne, arrayTwo) {
  var retArray = [];
  for (var i = 0; i < arrayOne.length; i++) {
    retArray.push(arrayOne[i]);
    retArray.push(arrayTwo[i]);
  }
  return retArray;
}

console.log(zip([1,2,3], [1,3,5]));
