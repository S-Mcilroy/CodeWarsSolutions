// 5 kyu on CodeWars

//Solution:

var moveZeros = function (arr) {
   for(let index = arr.length - 1; index >= 0 ; index--){
    if(arr[index] === 0){
      arr.splice(index, 1);
      arr.push(0);
    }
   }
   return arr;
}
