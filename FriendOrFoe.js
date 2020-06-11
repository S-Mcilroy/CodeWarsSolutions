// 7 kyu on CodeWars

//Solution:

function friend(friends){
  //your code here
  let truefriends = [];
  for (name of friends){
  if (name.length == 4){
    truefriends.push(name);
    }
  }
  return truefriends;
}
