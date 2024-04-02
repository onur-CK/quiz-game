document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('questions-area').innerText = 'Welcome to Quickz';
});


//variables
const startBtn = document.getElementById('start-btn');
const nextBtn =  document.getElementById('next-btn');
const restartBtn =  document.getElementById('restart-btn');
const timerShow =  document.getElementById('timer-btn');
const correctsShow =  document.getElementById('correct-scores-btn');
const incorrectsShow =  document.getElementById('incorrect-scores-btn');
const qCounterShow =  document.getElementById('question-counter-btn');
const quickzRules = document.getElementById('quickz-rules');
const quickzRulesDiv = document.getElementById('quickz-rules-info');
const introductionMain = document.getElementById('introduction');
const questionCont = document.getElementById('questions-container');
const questionArea = document.getElementById('questions-area');
const answersArea = document.getElementsByClassName('answer-options')[0];
const closeBtn = document.getElementById('close-btn');
let submit = document.getElementById('submit');
let userNameLabel = document.getElementById('usernameLabel');
let userName = document.getElementById('userName');
const form = document.getElementById('form');
let resultText = document.getElementById('result-score-text');
let scoreText = document.getElementById('score-text');
let randomQuestions; //random question holder
let currentQuestion; 
let answeredQuestions = false;
let score = 0;
var sec = 20000; //time for starting the quiz
var clicks = 0;


//event listeners for submit, next, rules and start buttons.
startBtn.addEventListener('click', runGame);
/*submit.addEventListener('click', function () {
  playerName();
});*/
submit.addEventListener('click', playerName);
nextBtn.addEventListener('click', nextCurrentQuestion);
quickzRules.addEventListener('click', showRules);
closeBtn.addEventListener('click', reset);


//function for displaying the rules of the quickz.
function showRules () {
  quickzRules.classList.add('hide');
  introductionMain.classList.add('hide');
  form.classList.add('hide');
  quickzRulesDiv.classList.remove('hide');
  submit.classList.remove('hide');
  userName.classList.remove('hide');
  
} 


function qTimer() {
  document.getElementById('timerShow').innerHTML = sec;
  sec--;
  if (sec < -1) {
    clearInterval(time);
    timeOut();
  }
}


function reset () {
  quickzRules.classList.remove('hide');
  resultText.classList.add('hide');
  quickzRulesDiv.classList.add('hide');
  form.classList.remove('hide');
  submit.classList.remove('hide');
  userNameLabel.classList.remove('hide');
  introductionMain.classList.remove('hide');
}

function playerName() {
  const enteredUserName = document.getElementById('userName').value;
  if (enteredUserName) {
    userName = enteredUserName;
    startBtn.classList.remove('hide');
    submit.classList.add('hide');
    scoreText.classList.add('hide');
    closeBtn.addEventListener('click', reset);
    runGame();
    } else {
    scoreText.classList.remove('hide');
    document.getElementById('score-text').innerHTML = `WOOPS! you didn't enter username. Please enter any username and press submit.`;
  }
}


function nextCurrentQuestion() {
  if (answeredQuestions) {
    answeredQuestions = false; //resets
    sec = 30; //resets
    time = setInterval(qTimer, 1200); // timer starts again
  }
  currentQuestion++;
  getToNextQuestion();
  clicks += 1; // increments number of completed questions
  document.getElementById('question-counter').innerHTML = clicks; 
}


function runGame () {
  startBtn.classList.add('hide');
  sec = 30;
  quickzRules.classList.add('hide');
  resultText.classList.add('hide');
  quickzRulesDiv.classList.add('hide');
  form.classList.add('hide');
  submit.classList.add('hide');
  userNameLabel.classList.add('hide');
  introductionMain.classList.add('hide');
  timerShow.classList.remove('hide');
  correctsShow.classList.remove('hide');
  incorrectsShow.classList.remove('hide');
  qCounterShow.classList.remove('hide');
  randomQuestions = questions.sort(() => 0.5 - Math.random()).slice(0,10); //stores and selects 10 random questions
  currentQuestion = 0;
  
  clicks += 1; //increments q counter 
  document.getElementById('question-counter').innerHTML = clicks;
  questionCont.classList.remove('hide');
  getToNextQuestion();
}

function getToNextQuestion() {
  defaultState();
  displayQuestion(randomQuestions[currentQuestion]);
 
}

//gets the questions and answers to display
function displayQuestion(question) {
  questionArea.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', checkAnswer);
    answersArea.appendChild(button);
  });
}

function defaultState() {
  nextBtn.classList.add('hide');
  while (answersArea.firstChild) {
    answersArea.removeChild(answersArea.firstChild);
  }
}

function checkAnswer(event) {
  const selectedButton = event.target;
  const correct = selectedButton.dataset.correct;

  if (correct) {
    selectedButton.classList.add('correct');
    updateScore(true);
  } else {
    selectedButton.classList.add('incorrect');
    updateScore(false);
  }

  Array.form(answersArea.children).forEach(button => {
    if (button.dataset.correct) {
      button.classList.add('correct');
    }
    button.removeEventListener('click', checkAnswer);
  });

  answeredQuestion = true;
  clearInterval(time);
  nextBtn.classList.remove('hide');
}




