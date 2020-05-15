// 6 kyu on CodeWars

//Solution:

function tribonacci(signature,n){
  let newSignature = [];
  if (n != 0 && n > 1){
    newSignature = signature;
      for (i = 3; i < n; i++) {
        let newEntry = signature.slice(-3);
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        newSignature.push(newEntry.reduce(reducer));
        }
        return newSignature;
      } else if (n > 0){
        return [n]
      }
  return newSignature;
}
