console.log("Hello Chicco");
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
  }
   else if (sign.toLowerCase() === "") {
    log.innerText = "YOU ARE WEAK";
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
  else if (sign.toLowerCase() === "rock") {
    log.innerText = "THE FOOL DARE TO PLAY ROCK. ROCK IS DULL LIKE THEM";
  } 
  else if (sign.toLowerCase() === "scissor") {
    log.innerText = "THE FOOL DARE TO PLAY SCISSOR. SCISSORS ARE EASILY BROKEN";
  } 
  else {
    log.innerText = `${sign}! THE FOOL IS AFRAID TO PLAY`;
  }
});




