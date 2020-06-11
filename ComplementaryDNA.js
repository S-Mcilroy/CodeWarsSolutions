// 7 kyu on CodeWars

//Solution:

function DNAStrand(dna){
  //your code here
  dna = dna.toUpperCase();
  let complement = '';
  for(let i = 0; i < dna.length; i++){
    if(dna[i] === 'T'){
      complement += 'A';
    }
    if(dna[i] === 'A'){
      complement += 'T';
    }
    if(dna[i] === 'C'){
      complement += 'G';
    }
    if(dna[i] === 'G'){
      complement += 'C';
    }
  }
  return complement;
}
