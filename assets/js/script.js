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
const answersArea = document.getElementById('answer-options')[0];
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
var sec = 20000; 
var clicks = 0;
var time = setInterval(qTimer, 1200);

//event listeners for submit, next, rules and start buttons.
startBtn.addEventListener('click', runGame);
submit.addEventListener('click', playerName);
nextBtn.addEventListener('click', nextQuestion);
quickzRules.addEventListener('click', showRules);

//function for displaying the rules of the quickz.
function showRules () {
  quickzRules.classList.add('hide');
  introductionMain.classList.add('hide');
  form.classList.add('hide');
  quickzRulesDiv.classList.remove('hide');
  submit.classList.remove('hide');
  userName.classList.remove('hide');
  closeBtn.addEventListener('click', reset);
}




function qTimer() {}
function runGame() {}
function playerName() {}
function nextQuestion () {}