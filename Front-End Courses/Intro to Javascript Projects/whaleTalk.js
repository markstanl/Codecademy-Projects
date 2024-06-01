let input = 'turpentine and turtles';

const vowels = ['a','e','i','o','u'];

let resultArray = [];
let charAt;
for(let i = 0; i < input.length; i++){
  charAt = input.charAt(i);
  for(let j = 0; j < vowels.length ; j++){
    if(charAt === vowels[j]){
      resultArray.push(charAt);
      if(charAt === 'e'){
        resultArray.push(charAt);
      }
      else if(charAt === 'u'){
        resultArray.push(charAt);
      }
      break;
    }
  }
}

let resultString = '';
for(let k = 0; k<resultArray.length; k++){
  resultString += resultArray[k].toUpperCase();
}

console.log(resultString);
