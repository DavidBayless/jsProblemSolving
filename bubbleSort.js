function testPerformance(callback, args) {
  var t0 = process.hrtime();
  callback(args);
  var diff = process.hrtime(t0);
  return(diff[0] * 1e9 + diff[1]);
}

function getRandomList(length){
  var list = [];
  for(var i = 1; i < length; i++){
    list.push(Math.floor(Math.random() * length * 2)+1);
  }
  return list;
}

function bubble(list) {
  var changed = true;
  var length = list.length;
  while(changed) {
    changed = false;
    for (var i = 0; i < length; i++) {
      if (list[i-1] > list[i]) {
        var hold = list[i - 1];
        list[i - 1] = list[i];
        list[i] = hold;
        changed = true;
      }
    }
    length--;
  }
  return list;
}

console.log("100 " + testPerformance(bubble, getRandomList(100)));
console.log("1000 " + testPerformance(bubble, getRandomList(1000)));
console.log("10000 " + testPerformance(bubble, getRandomList(10000)));
console.log("100000 " + testPerformance(bubble, getRandomList(100000)));
console.log("1000000 " + testPerformance(bubble, getRandomList(1000000)));
