//P: There is one parameter: dna --which is a string.
//R: Replace all the "A" with "T" and vice versa, an dall the "C" with "G" and vice versa.
//E: "AAAA" => "TTTT"
//P: Push the string to an array. Filter through each letter and replace them accordingly.
function DNAStrand(dna){
  dna = dna.split("")
  for(i=0; i < dna.length; i++) {
    if(dna[i] === "A") {
        dna[i] = "T"
    } else if (dna[i] === "T") {
       dna[i] = "A"
    } else if (dna[i] === "G") {
       dna[i] = "C"
    } else if (dna[i] === "C") {
       dna[i] = "G"
    } 
    
  }
  return dna.join("")
}
