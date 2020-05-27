// 6 kyu on CodeWars

//Solution:

function expandedForm(num) {
  let numStringArray = Array.from(String(num));
  let len = numStringArray.length;
  let result = '';

  numStringArray.map( (n,index) => {
    if( n>0 ) {
      if( result ) { result += ' + '; };
      result += new String(n).padEnd(len-index,'0');
    }
  });

  return result;
}
