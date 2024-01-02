var timerInterval;
var startTime;
var elapsedTime = 0;
var timerElement = document.getElementById("timer");

function startTimer() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(updateTimer, 100);
}

function pauseTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  updateTimer();
}

function updateTimer() {
  var currentTime = Date.now();
  elapsedTime = currentTime - startTime;
  timerElement.textContent = (elapsedTime / 1000).toFixed(1) + " 秒";
}