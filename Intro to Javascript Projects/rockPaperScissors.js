const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
    return userInput;
  }
  else{
    console.log("Invalid input");
  }
}

function getComputerChoice(){
  let vari = Math.floor(Math.random()*3);
  if(vari === 0) return 'rock';
  else if(vari === 1) return 'paper';
  else return 'scissors';
}

const determineWinner = (userChoice, computerChoice) => {
  if(userChoice === computerChoice){
    return 'The game has ended in a tie';
  }
  else if(userChoice === 'rock'){
    if(computerChoice === 'scissors'){
      return 'The player has won';
    }
    else{
      return 'The computer has won';
    }
  }
  else if(userChoice === 'paper'){
    if(computerChoice === 'rock'){
      return 'The player has won';
    }
    else{
      return 'The computer has won';
    }
  } //this is the user === scissors case
  else if(computerChoice === 'paper'){
    return 'The player has won';
  }
  else{
    return 'The computer has won';
  }
}

function playGame(){
  let userChoice = getUserChoice('rock');
  let computerChoice  = getComputerChoice();
  console.log(`${userChoice} was the user and ${computerChoice}`);
  console.log(determineWinner(userChoice,computerChoice));
}

playGame();
