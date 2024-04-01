document.addEvenetListener('DOMContentLoaded', function () {
  document.getElementById('questions-area').innerText = 'Welcome to Quickz';
});

//variables
const letsGo = document.getElementById('start-btn');
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
const letsGo = document.getElementById('start-btn');
const letsGo = document.getElementById('start-btn');
const letsGo = document.getElementById('start-btn');
const letsGo = document.getElementById('start-btn');
const letsGo = document.getElementById('start-btn');
const letsGo = document.getElementById('start-btn');
let randomQuestions; //random question holder
let currentQuestion; 
let answeredQuestions = false;
let score = 0;
var sec = 20000; 
var clicks = 0;
var time = setInterval(myTimer, 1200);




