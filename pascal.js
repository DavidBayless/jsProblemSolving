
function pascalRecursive(row, col) {
  //base case
  if (col > row) {
    console.log('in here');
    return 0;
  } else if (row === 0 || col === row || col === 0) {
    console.log('base case');
    return 1;
  } else {
    console.log('calling self');
    return pascalRecursive(row - 1, col) + pascalRecursive(row - 1, col - 1);
  }
}

console.log(pascalRecursive(27, 23));
