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

function merge(arr1, arr2) {
  var mergedArr = [];
  var arr1_index = 0;
  var arr2_index = 0;
  while(arr1_index < arr1.length && arr2_index < arr2.length) {
    if (arr1[arr1_index] < arr2[arr2_index]) {
      mergedArr.push(arr1[arr1_index]);
      arr1_index++;
    } else if (arr1[arr1_index] > arr2[arr2_index]) {
      mergedArr.push(arr2[arr2_index]);
      arr2_index++;
    } else if (arr1[arr1_index] === arr2[arr2_index]) {
      mergedArr.push(arr1[arr1_index]);
      mergedArr.push(arr2[arr2_index]);
      arr1_index++;
      arr2_index++;
    }
  }
  if (arr1_index < arr1.length) {
    mergedArr = mergedArr.concat(arr1.slice(arr1_index));
  }
  if (arr2_index < arr2.length) {
    mergedArr = mergedArr.concat(arr2.slice(arr2_index));
  }
  return mergedArr;
}

function mergeSort(list) {
  if (list.length < 2) {
    return list;
  }
  var middle = Math.floor(list.length/2);
  var left = list.slice(0, middle);
  var right = list.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}

console.log("100 " + testPerformance(mergeSort, getRandomList(100)));
console.log("1000 " + testPerformance(mergeSort, getRandomList(1000)));
console.log("10000 " + testPerformance(mergeSort, getRandomList(10000)));
console.log("100000 " + testPerformance(mergeSort, getRandomList(100000)));
console.log("1000000 " + testPerformance(mergeSort, getRandomList(1000000)));
console.log("10000000 " + testPerformance(mergeSort, getRandomList(10000000)));
console.log("100000000 " + testPerformance(mergeSort, getRandomList(100000000)));
