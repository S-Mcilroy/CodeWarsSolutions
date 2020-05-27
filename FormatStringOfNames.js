// 6 kyu on CodeWars

//Solution:

function list(names){
  //your code here

  listNames = []
  names.forEach((element) => {listNames.push(element.name)});
  return listNames.join(", ").replace(/,(?=[^,]*$)/, ' &')

}
