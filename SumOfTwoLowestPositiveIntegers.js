// 7 kyu on CodeWars

//Solution:

function sumTwoSmallestNumbers(numbers) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return numbers.sort(function(a, b) {return a - b;}).splice(0, 2).reduce(reducer);
}
