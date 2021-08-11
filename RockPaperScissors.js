//Creating a funtion to get user input
const getUserChoice = userInput => {
userInput = userInput.toLowerCase();
//Conditional statement to check where the input is correct
if (userInput ==='rock'|| userInput==='paper'||   userInput==='scissors'||userInput ==='bomb'){ 
return userInput
 }else{
   //The line below will display when user makes wrong choice
   console.log('Error!')
 }
}
//Taking user input into the function
getUserChoice('PAPER');

//Function to take computer choice
const getComputerChoice = () =>{ 
 let randomNumber = Math.floor(Math.random()*3);
 //This switch check the random number for compute to assign to the choice against the case
switch (randomNumber){
  case 0:
 return 'rock';
  break;
  case 1:
  return 'paper';
  break;
  case 2:
 return 'scissors';
  break;
  default:
  return 'Out of choice!'
  } 
 } 
//Function to determineWinner
const determineWinner = (userChoice,computerChoice) => {
  //This state check if there is a tie.
  if(userChoice === computerChoice){
    return 'Game was a tie';
  }
  if(userChoice ==='bomb'){
    return 'You won!'
  }
//This statement check if user's choice and computer to computer choice to determine a winner
  if(userChoice ==='rock'){
      if(computerChoice ==='paper'){
        return 'The computer won!'
      }else{
        return 'You won!';
      }
  }

  //This condition will make determine winer if user choose paper
   if(userChoice ==='paper'){
      if(computerChoice ==='rock'|| computerChoice ==='scissors'){
        return 'The computer won!'
      }else{
        return 'You won!';
      }
  }
  //Function to determine winner is user select scissors
  if (userChoice ==='scissors'){
    if (computerChoice ==='rock'|| computerChoice=== 'paper'){
      return 'The computer won!';
    }else{
      return 'You won!';
    }
  }
}

//Function to display winner of the game 
const playGame = () =>{
  let userChoice = getUserChoice('paper');
  console.log('This is user choice --> '+userChoice);

  let computerChoice = getComputerChoice();
  console.log('This is computer choice --> '+computerChoice);

//Line is to display the winner
  console.log(determineWinner(userChoice, computerChoice));
}
playGame();
