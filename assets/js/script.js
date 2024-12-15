document.addEventListener("DOMContentLoaded", function () {
  const letsGoBtn = document.getElementById("start-btn");
  if (letsGoBtn) {
    // Eğer eleman varsa
    letsGoBtn.addEventListener("click", function () {
      runGame();
    });
  } else {
    console.error("Element with ID 'start-btn' not found.");
  }
});

//variables
const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");
const timerShow = document.getElementById("timer-btn");
const correctsShow = document.getElementById("correct-scores-btn");
const incorrectsShow = document.getElementById("incorrect-scores-btn");
const qCounterShow = document.getElementById("question-counter-btn");
const quickzRules = document.getElementById("quickz-rules");
const quickzRulesDiv = document.getElementById("quickz-rules-info");
const introductionMain = document.getElementById("introduction");
const questionCont = document.getElementById("questions-container");
const questionArea = document.getElementById("questions-area");
const answersArea = document.getElementsByClassName("answer-options")[0];
const closeBtn = document.getElementById("close-btn");
let submit = document.getElementById("submit");
let userName = document.getElementById("userName");
const form = document.getElementById("form");
let resultText = document.getElementById("result-score-text");
let scoreText = document.getElementById("score-text");
let randomQuestions; //random question holder
let currentQuestion;
let questionAnswered = false;
let score = 0;
var sec = 30; //time for starting the quiz
var clicks = 0;
let time;

//event listeners for submit, next and rules
submit.addEventListener("click", playerName);
nextBtn.addEventListener("click", nextCurrentQuestion);
quickzRules.addEventListener("click", showRules);

//function for displaying the rules of the quickz.
function showRules() {
  // Hide the questions container
  const questionCont = document.getElementById("questions-container");
  if (questionCont) {
    questionCont.classList.add("hide"); // Hide questions container
  }
  
  // Hide other elements for the rules view
  quickzRules.classList.add("hide");
  introductionMain.classList.add("hide");
  form.classList.add("hide");
  quickzRulesDiv.classList.remove("hide");
  submit.classList.remove("hide");
  userName.classList.remove("hide");
  closeBtn.addEventListener("click", reset);
}

function qTimer() {
  timerShow.innerHTML = `${sec}s seconds`;
  
  if (sec < 0) {
    clearInterval(time);
    timeOutEndOfTheGame();
    return;
  }
  sec--;
}

function reset() {
  quickzRules.classList.remove("hide");
  resultText.classList.add("hide");
  quickzRulesDiv.classList.add("hide");
  form.classList.remove("hide");
  submit.classList.remove("hide");
  userName.classList.remove("hide");
  introductionMain.classList.remove("hide");

  // Hides welcome message
  const welcomeMessageDiv = document.getElementById("welcome-message");
  welcomeMessageDiv.classList.add("hide");
}

function playerName() {
  const enteredUserName = userName.value.trim();

  // If username is empty
  if (!enteredUserName) {
    scoreText.classList.remove("hide");
    scoreText.innerHTML = `WOOPS! Please enter a username.`;
    return;
  }

  // Length control
  if (enteredUserName.length < 2 || enteredUserName.length > 15) {
    scoreText.classList.remove("hide");
    scoreText.innerHTML = `Username must be between 2-15 characters.`;
    return;
  }

  // Special character control
  const specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
  if (specialCharRegex.test(enteredUserName)) {
    scoreText.classList.remove("hide");
    scoreText.innerHTML = `Username cannot contain special characters.`;
    return;
  }

  // Continue if the username is valid
  const welcomeMessageDiv = document.getElementById("welcome-message");
  const userNameDisplay = document.getElementById("user-name-display");

  // Insert username
  userNameDisplay.textContent = enteredUserName;

  // Display welcome message
  welcomeMessageDiv.classList.remove("hide");

  submit.classList.add("hide");
  scoreText.classList.add("hide");

  // Displays "Let's Go" button
  startBtn.classList.remove("hide");
}

function nextCurrentQuestion() {
  if (questionAnswered) {
    questionAnswered = false; //resets
    sec = 30; //resets
  }
  currentQuestion++;
  getToNextQuestion();
  clicks += 1; // increments number of completed questions
  document.getElementById("question-counter").innerHTML = clicks;
}

function runGame() {
  timerShow.classList.remove("hide");
  startBtn.classList.remove("hide");
  timerShow.classList.remove("hide");
  quickzRules.classList.add("hide");
  resultText.classList.add("hide");
  quickzRulesDiv.classList.add("hide");
  form.classList.add("hide");
  submit.classList.add("hide");
  userName.classList.add("hide");
  introductionMain.classList.add("hide");
  correctsShow.classList.remove("hide");
  incorrectsShow.classList.remove("hide");
  qCounterShow.classList.remove("hide");
  randomQuestions = questions.sort(() => 0.5 - Math.random()).slice(0, 10); //stores and selects 10 random questions
  currentQuestion = 0;
  clicks += 1; //increments q counter
  document.getElementById("question-counter").innerHTML = clicks;
  questionCont.classList.remove("hide");
  getToNextQuestion();
  document.getElementById("start-btn").classList.add("hide");
  document.getElementById("welcome-message").classList.add("hide");
}

function getToNextQuestion() {
  defaultState();
  displayQuestion(randomQuestions[currentQuestion]);

  clearInterval(time);
  sec = 30;
  qTimer();
  time = setInterval(qTimer, 1000);
}

//gets the questions and answers to display
function displayQuestion(question) {
  questionArea.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", checkAnswer);
    answersArea.appendChild(button);
  });
}

function defaultState() {
  nextBtn.classList.add("hide");
  while (answersArea.firstChild) {
    answersArea.removeChild(answersArea.firstChild);
  }
}

function checkAnswer(event) {
  const clickedButton = event.target;
  const correct = clickedButton.dataset.correct;

  // Add a class to mark this button as answered
  if (!clickedButton.classList.contains("answered")) {
    clickedButton.classList.add("answered");
  }

  // Check if the answer is correct
  if (correct) {
    // Increment the score and track correct answers
    score++;
    incrementCorrectAnswer();
  } else {
    // Track incorrect answers
    incrementWrongAnswer();
  }

  // Stop the timer and indicate that the question is answered
  clearInterval(time);
  questionAnswered = true;

  // Set status class for the clicked button and remove event listener
  setStatusClass(document.body, correct);
  Array.from(answersArea.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
    button.removeEventListener("click", checkAnswer);
  });

  // Check if there are more questions remaining
  if (randomQuestions.length > currentQuestion + 1) {
    nextBtn.classList.remove("hide");
  } else {
    // If no more questions, display the result after a delay
    sec = 30;
    timerShow.classList.add("hide");
    setTimeout(endScore, 3000);
  }
}

function endScore() {
  // Hide elements and display result based on score
  incorrectsShow.classList.add("hide");
  correctsShow.classList.add("hide");
  answersArea.classList.add("hide");
  qCounterShow.classList.add("hide");
  timerShow.classList.add("hide");
  questionCont.classList.add("hide");
  resultText.classList.remove("hide");
  restartBtn.classList.add("hide");

  if (score >= 8) {
    document.getElementById(
      "result-score-text"
    ).innerHTML = `Awesome!! ${userName}. Your score is ${score} out of 10.`;
  } else if (score >= 6 && score < 8) {
    document.getElementById(
      "result-score-text"
    ).innerHTML = `Well Done! ${userName}. Your score is ${score} out of 10.`;
  } else if (score >= 4 && score < 6) {
    document.getElementById(
      "result-score-text"
    ).innerHTML = `Congratulations! ${userName}. Your score is ${score} out of 10.`;
  } else {
    document.getElementById(
      "result-score-text"
    ).innerHTML = `Nice Try! ${userName}. Your score is ${score} out of 10.`;
  }

  // Redirect to the game over page after a delay
  setTimeout(gameOver, 8000);
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

function incrementCorrectAnswer() {
  let oldScore = parseInt(document.getElementById("corrects").innerText);
  document.getElementById("corrects").innerText = oldScore + 1;
}

function incrementWrongAnswer() {
  let oldScore = parseInt(document.getElementById("incorrects").innerText);
  document.getElementById("incorrects").innerText = oldScore + 1;
}

function timeOutEndOfTheGame() {
  document.getElementById(
    "questions-area"
  ).innerHTML = `<strong><em>Unfortunately, time is up!</em></strong> <br>`;
  timerShow.classList.add("hide");
  answersArea.classList.add("hide");
  correctsShow.classList.add("hide");
  incorrectsShow.classList.add("hide");
  qCounterShow.classList.add("hide");
  quickzRules.classList.add("hide");
  introductionMain.classList.add("hide");
  form.classList.add("hide");
  resultText.classList.add("hide");
  setTimeout(restart, 7000);
}

function restart() {
  return window.location.assign("end-of-timer.html");
}

function gameOver() {
  return window.location.assign("result.html");
}
