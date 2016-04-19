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

function selectionSort(list) {
  var start = 0;
  var minimum;
  var mindex;
  while(start < list.length) {
    for (var i = start; i < list.length; i++) {
      if (i === start) {
        minimum = list[i];
        mindex = i;
      } else if (list[i] < minimum) {
        minimum = list[i];
        mindex = i;
      }
    }
    var hold = list[start];
    list[start] = list[mindex];
    list[mindex] = hold;
    start++;
  }
  return list;
}

console.log("100 " + testPerformance(selectionSort, getRandomList(100)));
console.log("1000 " + testPerformance(selectionSort, getRandomList(1000)));
console.log("10000 " + testPerformance(selectionSort, getRandomList(10000)));
console.log("100000 " + testPerformance(selectionSort, getRandomList(100000)));
console.log("1000000 " + testPerformance(selectionSort, getRandomList(1000000)));
