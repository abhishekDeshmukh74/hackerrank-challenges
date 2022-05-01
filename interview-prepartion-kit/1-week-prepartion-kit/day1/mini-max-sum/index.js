function miniMaxSum(arr) {
  arr.sort();
  console.log(
    arr.slice(0, arr.length - 1).reduce((a, c) => a + c) +
      ' ' +
      arr.slice(1).reduce((a, c) => a + c)
  );
}
console.log(miniMaxSum([1, 3, 5, 7, 9]));
