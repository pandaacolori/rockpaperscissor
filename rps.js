console.log("Hello Chicco");
let humanScore = 0
let computerScore = 0
let randomNumber=Math.floor(Math.random() * 3) + 1;
console.log(randomNumber)
if (randomNumber === 1) {
    "Scissor!"
    console.log("the computer played scissor");
  }
 else if (randomNumber === 2) {
    "Rock!"
    console.log("the computer played rock");
  }
else {
    "Paper!"
    console.log("the computer played paper");
};

const signButton = document.querySelector("#signButton");
const log = document.querySelector("#log");

signButton.addEventListener("click", () => {
  let sign = prompt("WHAT DO YOU DARE PLAY?");
  if (sign === null) {
    log.innerText = "RUN, COWARD";
    computerScore = (computerScore + 100);
  }
   else if (sign.toLowerCase() === "") {
    log.innerText = "YOU ARE WEAK";
    computerScore = (computerScore + 100);
  }
   else if (sign.toLowerCase() === "paper" && randomNumber === 1) {
    log.innerText = "THE FOOL DARE TO PLAY PAPER. PAPER IS WEAK AND I CRUSHED IT WITH SCISSORS";
  }
   else if (sign.toLowerCase() === "paper" && randomNumber === 2) {
      log.innerText = "whatever";
  } 
  else if (sign.toLowerCase() === "paper" && randomNumber === 3) {
    log.innerText = "I MATCHED YOUR WEAKNESS TO TOY WITH YOU PUNY ONE";
} 
  else if (sign.toLowerCase() === "rock" && randomNumber === 1) {
    log.innerText = "whatever";
  } 
  else if (sign.toLowerCase() === "rock" && randomNumber === 2) {
    log.innerText = "I MATCHED YOUR ROCK TO MOCK YOU";
  } 
  else if (sign.toLowerCase() === "rock" && randomNumber === 3) {
    log.innerText = "THE FOOL DARE TO PLAY ROCK. ROCK IS DULL LIKE THEM AHAHAH";
  } 
  else if (sign.toLowerCase() === "scissor" && randomNumber === 1) {
    log.innerText = "MY SCISSOR IS BETTER";
  } 
  else if (sign.toLowerCase() === "scissor" && randomNumber === 2) {
    log.innerText = "YOUR SCISSOR HAS BEEN CRUSHED LIKE YOUR DREAMS";
  } 
  else if (sign.toLowerCase() === "scissor" && randomNumber === 3) {
    log.innerText = "whatever";
  } 
  else {
    log.innerText = `${sign}! THE FOOL IS AFRAID TO PLAY`;
  }
});




