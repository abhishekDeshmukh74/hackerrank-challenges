function plusMinus(arr) {
  let plusCount = 0,
    zeroCount = 0,
    minusCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) zeroCount++;
    else if (arr[i] > 0) plusCount++;
    else if (arr[i] < 0) minusCount++;
  }
  console.log(plusCount / arr.length);
  console.log(minusCount / arr.length);
  console.log(zeroCount / arr.length);
}
