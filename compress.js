function compress(str) {
  var counter = 0;
  var prev;
  var retArry =[];
  var strArr = str.split('');
  for (var i = 0; i < strArr.length; i++) {
    if (strArr[i] === prev) {
      counter++;
    } else {
      prev = strArr[i];
      counter++;
      retArry.push(prev + counter);
      counter = 0;
    }
  }
  if (retArry.join('').length > str.length) {
    return str;
  } else {
    return retArry.join('');
  }
}

console.log(compress('aabbbbcccddaa'));

function reverse(str) {
  return str.split(' ').reverse();
}

console.log(reverse('Hello World, you are so beautiful to me.'));

function converting(input) {
  if (typeof input === 'number') {
    return input.toString();
  } else {
    return parseInt(input);
  }
}

console.log(converting('25'));
