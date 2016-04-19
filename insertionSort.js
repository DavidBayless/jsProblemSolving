function getRandomList(length){
  var list = [];
  for(var i = 0; i < length; i++){
    list.push(Math.floor(Math.random() * length * 2)+1);
  }
  return list;
}

function testPerformance(callback, args) {
  var t0 = process.hrtime();
  callback(args);
  var diff = process.hrtime(t0);
  return(diff[0] * 1e9 + diff[1]);
}

function insertion(list) {
  for(var i = 1; i < list.length; i++) {
    var j = i;
    while (j > 0) {
      if (list[j - 1] > list[j]) {
        var hold = list[j];
        list[j] = list[j - 1];
        list[j - 1] = hold;
      }
      j--;
    }
  }
  return list;
}

// console.log(insertion(getRandomList(10)));
console.log("100 " + testPerformance(insertion, getRandomList(100)));
console.log("1000 " + testPerformance(insertion, getRandomList(1000)));
console.log("10000 " + testPerformance(insertion, getRandomList(10000)));
console.log("100000 " + testPerformance(insertion, getRandomList(100000)));
console.log("1000000 " + testPerformance(insertion, getRandomList(1000000)));
