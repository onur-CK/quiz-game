const letsGoSound = new Audio("assets/sounds/letsgo.mp3");
document.addEventListener("DOMContentLoaded", function () {
  const letsGoBtn = document.getElementById("start-btn");
  if (letsGoBtn) {
    // If the element exists
    letsGoBtn.addEventListener("click", function () {
      letsGoSound.play();
      runGame();
    });
  } else {
    console.error("Element with ID 'start-btn' not found.");
  }
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  // Load the previously selected theme from local storage
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    body.classList.add(savedTheme); // If a theme was previously selected, apply it
    toggleIcons(savedTheme); // Adjust icons based on the current theme
  }

  // Theme toggle functionality
  themeToggle.addEventListener("click", function () {
    if (body.classList.contains("dark-mode")) {
      body.classList.remove("dark-mode");
      body.classList.add("light-mode");
      localStorage.setItem("theme", "light-mode"); // Save the light mode in local storage
      toggleIcons("light-mode"); // Adjust icons for light mode
    } else {
      body.classList.remove("light-mode");
      body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark-mode"); // Save the dark mode in local storage
      toggleIcons("dark-mode"); // Adjust icons for dark mode
    }
  });
  
  // Toggles visibility of sun and moon icons based on the current theme
  function toggleIcons(theme) {
    const sunIcon = themeToggle.querySelector(".fa-sun");
    const moonIcon = themeToggle.querySelector(".fa-moon");

    if (theme === "dark-mode") {
      sunIcon.style.display = "block";  // In dark mode, display the sun icon
      moonIcon.style.display = "none";  // In dark mode, hide the moon icon
    } else {
      sunIcon.style.display = "none";  // In light mode, hide the sun icon
      moonIcon.style.display = "block"; // In light mode, display the moon icon
    }
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
const rulesSound = new Audio("assets/sounds/rules.mp3");
const submitSound = new Audio("assets/sounds/submit.mp3");
const correctSound = new Audio("assets/sounds/correct.mp3");
const wrongSound = new Audio("assets/sounds/wrong.mp3");
const timeoutSound = new Audio("assets/sounds/timeout.mp3");
const finishSound = new Audio("assets/sounds/finish.mp3");
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
submit.addEventListener("click", function () {
  submitSound.play(); // Play submit sound
  playerName();       
});
nextBtn.addEventListener("click", nextCurrentQuestion);
quickzRules.addEventListener("click", showRules);

//function for displaying the rules of the quickz.
function showRules() {
  rulesSound.play();
  
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
  // List of elements to hide and show
  const welcomeMessageDiv = document.getElementById("welcome-message");
  const elementsToHide = [
    resultText, quickzRulesDiv, welcomeMessageDiv
  ];

  const elementsToShow = [
    quickzRules, form, submit, userName, introductionMain
  ];

  // Hide the elements
  elementsToHide.forEach(element => element.classList.add("hide"));

  // Show the elements
  elementsToShow.forEach(element => element.classList.remove("hide"));
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
  // Reset question state if answered
  if (questionAnswered) {
    questionAnswered = false;
    sec = 30; // Reset the timer
  }

  // Move to the next question and update UI
  updateQuestionState();
}

function updateQuestionState() {
  currentQuestion++;
  clicks++;
  document.getElementById("question-counter").innerHTML = clicks;
  getToNextQuestion();
}

function runGame() {
  // Define all the elements
  const elementsToHide = [
    quickzRules, resultText, quickzRulesDiv, form, submit, userName, introductionMain
  ];

  const elementsToShow = [
    timerShow, startBtn, correctsShow, incorrectsShow, qCounterShow, questionCont
  ];

  // Hide the elements
  elementsToHide.forEach(element => element.classList.add("hide"));

  // Show the elements
  elementsToShow.forEach(element => element.classList.remove("hide"));

  // Initialize the game state
  randomQuestions = questions.sort(() => 0.5 - Math.random()).slice(0, 10); // Randomly selects 10 questions
  currentQuestion = 0;
  clicks += 1; // Increment question counter
  document.getElementById("question-counter").innerHTML = clicks; // Update question counter display

  // Start the first question
  getToNextQuestion();

  // Hide start button and welcome message
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
  // Set question text
  questionArea.innerText = question.question;

  // Create and append answer buttons
  question.answers.forEach(createAnswerButton);
}

function createAnswerButton(answer) {
  const button = document.createElement("button");
  button.innerText = answer.text;
  button.classList.add("btn");

  // Assign correct answer data attribute
  if (answer.correct) {
    button.dataset.correct = "true";
  }

  // Attach the click event listener
  button.addEventListener("click", checkAnswer);

  // Append the button to the answers container
  answersArea.appendChild(button);
}

function defaultState() {
  nextBtn.classList.add("hide");
  answersArea.innerHTML = "";
}

function checkAnswer(event) {
  const clickedButton = event.target;
  const isCorrect = clickedButton.dataset.correct === "true";

  // Mark the button as answered
  clickedButton.classList.add("answered");

  // Update the score based on the answer
  if (isCorrect) {
    correctSound.play();
    score++;
    incrementCorrectAnswer();
  } else {
    wrongSound.play();
    incrementWrongAnswer();
  }

  // Stop the timer and indicate question is answered
  clearInterval(time);
  questionAnswered = true;

  // Update the button and body classes to reflect answer status
  updateAnswerStatus(clickedButton, isCorrect);

  // Disable further clicks on answer buttons
  disableAnswerButtons();

  // Check if there are more questions, otherwise show result
  if (hasMoreQuestions()) {
    nextBtn.classList.remove("hide");
  } else {
    prepareForGameEnd();
  }
}

function updateAnswerStatus(button, isCorrect) {
  setStatusClass(button, isCorrect);
  Array.from(answersArea.children).forEach((btn) => {
    setStatusClass(btn, btn.dataset.correct === "true");
    btn.removeEventListener("click", checkAnswer);
  });
}

function disableAnswerButtons() {
  Array.from(answersArea.children).forEach((btn) => {
    btn.disabled = true; // Disable all buttons to prevent further interaction
  });
}

function hasMoreQuestions() {
  return randomQuestions.length > currentQuestion + 1;
}

function prepareForGameEnd() {
  sec = 30;
  timerShow.classList.add("hide");
  setTimeout(endScore, 3000);
}

function generateResultMessage(score, userName) {
  finishSound.play();
  
  // Get highestscore from loval storage
  let highestScore = localStorage.getItem("highestScore") || 0;
  
  // Update if the new score is higher
  if (score > highestScore) {
    highestScore = score;
    localStorage.setItem("highestScore", highestScore);
  }

  // Create result message
  let resultMessage;
  if (score >= 8) {
    resultMessage = `Awesome!! ${userName}. Your score is ${score} out of 10.`;
  } else if (score >= 6) {
    resultMessage = `Well Done! ${userName}. Your score is ${score} out of 10.`;
  } else if (score >= 4) {
    resultMessage = `Congratulations! ${userName}. Your score is ${score} out of 10.`;
  } else {
    resultMessage = `Nice Try! ${userName}. Your score is ${score} out of 10.`;
  }

  resultMessage += `<br><strong style="display:block; margin-top:10px; font-size:16px;">Highest Score: ${highestScore}/10</strong>`;

  return resultMessage; 
}


// Hide all elements and show the result
function endScore() {
  const elementsToHide = [
    incorrectsShow, correctsShow, answersArea,
    qCounterShow, timerShow, questionCont, restartBtn
  ];
  
  elementsToHide.forEach(element => element.classList.add("hide"));
  
  const resultTextElement = document.getElementById("result-score-text");
  const userName = document.getElementById('userName').value;
  
  resultTextElement.innerHTML = generateResultMessage(score, userName);
  
  resultText.classList.remove("hide");

  // Redirect after a delay
  setTimeout(gameOver, 8000);
}

function setStatusClass(element, correct) {
  element.classList.toggle("correct", !!correct);
  element.classList.toggle("wrong", !correct);
}

function clearStatusClass(element) {
  element.classList.remove("correct", "wrong");
}

function incrementCorrectAnswer() {
  updateScore("corrects");
}

function incrementWrongAnswer() {
  updateScore("incorrects");
}

function updateScore(scoreType) {
  const scoreElement = document.getElementById(scoreType);
  scoreElement.innerText = parseInt(scoreElement.innerText) + 1 || 1;
}

function timeOutEndOfTheGame() {
  // Mesajı güncelle
  timeoutSound.play();
  const questionArea = document.getElementById("questions-area");
  questionArea.innerHTML = `<strong><em>Unfortunately, time is up!</em></strong> <br>`;

  // Gizlenecek diğer öğeleri belirle
  const elementsToHide = [
    "timer-btn",
    "answer-options",
    "correct-scores-btn",
    "incorrect-scores-btn",
    "question-counter-btn",
    "quickz-rules",
    "introduction",
    "form",
    "result-score-text"
  ];

  // Belirtilen elementleri gizle
  elementsToHide.forEach((id) => {
    const element = document.getElementById(id) || document.getElementsByClassName(id)[0];
    if (element) element.classList.add("hide");
  });

  // `questions-area` gizlenmiyor, mesaj görüntüleniyor
  questionArea.classList.remove("hide");

  // Belirli bir süre sonra yeniden başlat
  setTimeout(restart, 7000);
}

function restart() {
  return window.location.assign("end-of-timer.html");
}

function gameOver() {
  return window.location.assign("result.html");
}
