// 5 kyu on CodeWars

//Solution:


function rot13(message){
  //your code here
  const lowerLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  const upperLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

  let newMessage = [];
  let messageArray = message.split("")
  for(let letter of messageArray){

   if (upperLetters.includes(letter)){

     if(upperLetters.findIndex((element) => element == letter) + 13 <= 25){
      newMessage.push(upperLetters[upperLetters.findIndex((element) => element == letter) + 13])
        } else {
         newMessage.push(upperLetters[upperLetters.findIndex((element) => element == letter) - 13])
        }

    } else if (lowerLetters.includes(letter)){
      if(lowerLetters.findIndex((element) => element == letter) + 13 <= 25){
       newMessage.push(lowerLetters[lowerLetters.findIndex((element) => element == letter) + 13])
       console.log(lowerLetters.findIndex((element) => element == letter))
         }  else  {
          newMessage.push(lowerLetters[lowerLetters.findIndex((element) => element == letter) - 13])
          console.log(lowerLetters.findIndex((element) => element == letter))
         }
       } else {
       newMessage.push(letter)
       }

   }

  return newMessage.join('');
}
