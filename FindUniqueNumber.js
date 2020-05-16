// 6 kyu on CodeWars

//Solution:

function findUniq(arr) {

  let numbers = [...new Set(arr)];
  for (i = 0; i < numbers.length; i++){
    let occurance = arr.filter((number) => (number === numbers[i])).length;
    if (occurance == 1){
    return numbers[i];
    }
    }
}
