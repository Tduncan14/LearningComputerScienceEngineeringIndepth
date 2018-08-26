let userInput = 'Rock';
let winnerCount = 0;
let tieCount = 0 ;
let loserCount = 0;
userInput = userInput.toLowerCase();
//console.log(userInput);
//console.log('it works');

function getComputerChoice(){
   let choiceNumber = Math.floor(Math.random()* 3);
   
   //console.log(choiceNumber);
  let answer =""
  
   console.log(answer);
  switch(choiceNumber){
    case 0 :
      answer = "rock";
      break;
    case 1 :
      answer = "paper";
      break;
    case 2:
      answer =" scissor";
      break;
    default:
      answer =" this shouldnt happen";
      break;
  }
  console.log(answer);
   return answer 
}
//console.log(getComputerChoice());

function determineWinner( userInput, computerChoice){
   userInput;
 console.log(userInput);
 // console.log('it works');
  if( userInput === computerChoice){
    
     return "tieCount " + tieCount++
  }
  else if (userInput === 'rock'&& computerChoice === 'scissor'){
     return "you win " + winnerCount++;
  }
  else if (userInput === 'paper' && computerChoice === 'rock'){
    return  "you win again " + winnerCount++ ;
  }
  else if ( userInput === 'scissor'&& computerChoice == 'paper'){
    return  " keep on playing  " + winnerCount++;
  }
  else {
       return " try again "  + loserCount++;
  }
  console.log('it should be working');
}
//console.log( "why is it not working");
 console.log(determineWinner(userInput, getComputerChoice()));

console.log(winnerCount);
console.log(loserCount);
console.log(tieCount);