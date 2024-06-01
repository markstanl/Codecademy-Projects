// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const pAequorFactory = (num, DNA)=>{
  return {
    _specimenNum: num,
    _dna: DNA,
    mutate(){
      const dnaBases = ['A', 'T', 'C', 'G']
      const dnaGuess = Math.floor(Math.random()*15)
      const filtDnaBases = dnaBases.filter(item => item !== this._dna[dnaGuess]);
      this._dna[dnaGuess] = filtDnaBases[Math.floor(Math.random()*3)]
    },
    compareDNA(other){
      let likeCount = 0;
      for(let i = 0 ; i < 15; i++){
        if(this._dna[i] === other._dna[i]){
          likeCount++
        }
      }
      return `Specimen #1 and Specimen #2 have ${Math.floor(likeCount/15*100)}% DNA in common`
    },
    willLikelySurvive(){
      let count = 0;
      for(let i = 0 ; i < 15 ; i++){
        if (this._dna[i] === 'C' || this._dna[i] === 'G'){
          count++
        }
      }
      return count/15 >= .6
    },
    complementStrand(){
      let newDNA = []
      for(let i = 0 ; i < this._dna ; i++){
        switch this._dna[i]{
          case 'A':
            newDNA.push('T');
            break;
          case 'T':
            newDNA.push('A');
            break;
          case 'C':
            newDNA.push('G');
            break;
          case 'G':
            newDNA.push('C');
            break;
          default:
            break;
        }
      }
      return newDNA;
    }
  }
}

let validPAequors = []
let count = 0

//Creates 30 valid pAequros
while(validPAequors.length !== 30){
  const pAequor = pAequorFactory(count, mockUpStrand())
  if(pAequor.willLikelySurvive()){
    validPAequors.push(pAequor)
  }
  count++
}
