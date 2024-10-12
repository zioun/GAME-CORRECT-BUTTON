let randomNumber;
let score = 0;
let timeLeft = 60; 
let timerInterval;


function generateRandomNumber() {
  randomNumber = Math.floor(Math.random() * 2) + 1;
  document.getElementById("random-number").textContent = randomNumber;
  document.getElementById("game-over").classList.add("hidden"); 
}


function handleKeyPress(event) {
  const key = event.key; 
  if (key === "1") {
    handleClick(1);
  } else if (key === "2") {
    handleClick(2);
  }
}


function handleClick(buttonNumber) {
  if (buttonNumber === randomNumber) {
    score++; 
    document.getElementById("score").textContent = `Score: ${score}`; 
    generateRandomNumber(); 
  } else {
    endGame(); 
  }
}


function endGame() {
  clearInterval(timerInterval); 
  document.getElementById("game-over").classList.remove("hidden"); 
  document.getElementById("random-number").textContent = "?";
}


function startTimer() {
  timerInterval = setInterval(() => {
    timeLeft--; 
    document.getElementById("timer").textContent = `Time: ${timeLeft}`;
    if (timeLeft <= 0) {
      endGame(); 
    }
  }, 1000); 
}


function startGame() {
  score = 0; 
  timeLeft = 60; 
  document.getElementById("score").textContent = `Score: ${score}`;
  document.getElementById("timer").textContent = `Time: ${timeLeft}`;
  generateRandomNumber();
  startTimer(); 
}

startGame();

window.addEventListener("keypress", handleKeyPress);
