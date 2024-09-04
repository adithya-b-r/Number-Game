const genNum = document.getElementById("genNum");
const timer = document.getElementById("timer");
const score = document.getElementById("score");
const gameBody = document.getElementById("game");

var counter = 600;
var gameScore = 0;
var randNum = -1;
var restartGame = false;

function genRandomNum() {
  return parseInt(Math.random() * 10);
}

function initializeGame() {
  globalThis.randNum = genRandomNum();
  genNum.value = randNum;
  shuffleNums();
}

function resetGame(totalBubbles=153) {
  globalThis.counter = 60;
  globalThis.gameScore = 0;
  globalThis.randNum = 0;

  for (var i = 0; i <= totalBubbles; i++) {
    let newEle = document.createElement('div');
    newEle.className = 'num';
    newEle.innerText = genRandomNum();
    newEle.addEventListener("click", function () {
      checkNum(newEle);
    })

    gameBody.append(newEle);
  }

  initializeGame();
}

function checkNum(num) {
  globalThis.randNum;

  if (num.innerText == randNum) {
    gameScore += 20;
    score.value = gameScore;
    initializeGame();
  }else{
    console.log(num)
    num.classList.add("apply-shake");
  }
}

function countTime() {
  globalThis.counter;

  if (counter <= 0) {
    if (confirm("Do you want play again?"))
      resetGame();
    else
      window.close();
  }

  timer.value = counter;
  counter -= 1;
}

function shuffleNums() {
  var nums = document.querySelectorAll(".num");

  nums.forEach(num => {
    num.innerText = genRandomNum();
    num.classList.remove("apply-shake");
  });
}

resetGame();
setInterval(countTime, 1000);

console.log("WIDTH : " + gameBody.offsetWidth)
console.log("HEIGHT : " + gameBody.offsetHeight)