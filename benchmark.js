var fs = require('fs');

for (var num = 500; num < 10000; num += 500) {
  var time = process.hrtime();
  loop(num);
  doubleLoop(num);
  tripleLoop(num);
}

function loop(size){
  var sum = 0;
  for(var i = 0; i < size; i++){
    sum++;
  }
  var diff = process.hrtime(time);
  fs.appendFile('benchmarkLoop.txt', diff[0] * 1e9 + diff[1] + '\n', 'utf8', function(err) {
    if (err) throw err;
    console.log('benchmark took %d nanoseconds', diff[0] * 1e9 + diff[1]);
  });
}

function doubleLoop(size){
  var sum = 0;
  for(var i = 0; i < size; i++){
    for(var j = 0; j < size; j++){
        sum++;
    }
  }
  var diff = process.hrtime(time);
  fs.appendFile('benchmarkDoubleLoop.txt', diff[0] * 1e9 + diff[1] + '\n', 'utf8', function(err) {
    if (err) throw err;
    console.log('benchmark took %d nanoseconds', diff[0] * 1e9 + diff[1]);
  });
}

function tripleLoop(size) {
  var sum = 0;
  for(var i = 0; i < size; i++) {
    for(var j = 0; j < size; j++) {
      for(var k = 0; k < size; k++) {
        sum++;
      }
    }
  }
  var diff = process.hrtime(time);
  fs.appendFile('benchmarkTripleLoop.txt', diff[0] * 1e9 + diff[1] + '\n', 'utf8', function(err) {
    if (err) throw err;
    console.log('benchmark took %d nanoseconds', diff[0] * 1e9 + diff[1]);
  });
}
// doubleLoop(num);
// tripleLoop(num);
