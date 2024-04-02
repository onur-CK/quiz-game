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
let questionAnswered = false;
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
  document.getElementById('timer-btn').innerHTML = `You have ${sec}s seconds to answer.`;
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
  if (questionAnswered) {
    questionAnswered = false; //resets
    sec = 30; //resets
    time = setInterval(qTimer, 1000); // timer starts again
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
  time = setInterval(qTimer, 1000);
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
  const clickedButton = event.target;
  const correct = clickedButton.dataset.correct;

  if(!clickedButton.classList.contains('answered')) {
    clickedButton.classList.add('answered');
    
    if (correct) score++;

    clearInterval(time); //stops the timer
    questionAnswered: true;

    setStatusClass(document.body, correct);
    Array.from(answersArea.children).forEach((button) => {
      setStatusClass(button, button.dataset.correct);
      button.removeEventListener('click', checkAnswer);
    });
    if (randomQuestions.length > currentQuestion + 1) {
      nextBtn.classList.remove('hide');
    } else {
      sec = 30;
      timerShow.classList.add('hide');
      setTimeOut(endScore, 3000);

      function endscore() {
        incorrectsShow.classList.add('hide');
        correctsShow.classList.add('hide');
        answersArea.classList.add('hide');
        qCounterShow.classList.add('hide');
        timerShow.classList.add('hide');
        questionCont.classList.add('hide');
        resultText.classList.remove('hide');
        restartBtn.classList.add('hide');

        if (score >= 8) {
          document.getElementById('result-score-text').innerHTML = 'Awesome!! ${userName}. Your score is ${score} out of 10.';
        } else if (score >= 6 && score < 8) {
          document.getElementById('result-score-text').innerHTML = 'Well Done! ${userName}. Your score is ${score} out of 10.';
        } else if (score >= 4 && score < 6) {
          document.getElementById('result-score-text').innerHTML = 'Nice Try! ${userName}. Your score is ${score} out of 10.';
        } else {
          document.getElementById('result-score-text').innerHTML = 'Nice Try! ${userName}. Your score is ${score} out of 10.';
        }
        setTimeOut(gameOver, 15000);
    }
  }
  if (correct) {
    ();
  } else {
    
  }
}

function restart() {
  return window.location.assign('end-of-timer.html');
}

function gameOver() {
  return window.location.assign('result.html');
}

function incrementCorrectAnswer() {
  let oldScore = parseInt(document.getElementById('corrects').innerText);
  document.getElementById('corrects').innerText = oldScore + 1;
}

function incrementWrongAnswer() {
  let oldScore = parseInt(document.getElementById('incorrects').innerText);
  document.getElementById('incorrects').innerText = oldScore + 1;
}



/*

// Declare timerInterval globally
let timerInterval;

// Function to start the timer for each question
function startTimer() {
  let secondsLeft = 30; // Set the initial time to 30 seconds

  // Update the timer display every second
  timerShow.textContent = secondsLeft;

  // Update the timer interval every second
  timerInterval = setInterval(() => {
    secondsLeft--;
    timerShow.textContent = secondsLeft;

    // If the timer reaches 0, call the timeOut function
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      timeOut();
    }
  }, 1000);
}


// Function to check the selected answer
function checkAnswer(event) {
  const selectedButton = event.target;
  const correct = selectedButton.dataset.correct;

  if (!selectedButton.classList.contains('answered')) {
    selectedButton.classList.add('answered'); // Add a class to mark this button as answered

    if (correct) {
      selectedButton.classList.add('correct');
      updateScore(true);
    } else {
      selectedButton.classList.add('incorrect');
      // Highlight the correct answer in green
      const correctButton = Array.from(answersArea.children).find(button => button.dataset.correct === 'true');
      correctButton.classList.add('correct');
      updateScore(false);
    }

    Array.from(answersArea.children).forEach(button => {
      button.removeEventListener('click', checkAnswer); // Remove the event listener to prevent further clicks
    });

    answeredQuestions = true;
    clearInterval(timerInterval);
    nextBtn.classList.remove('hide');
  }
}





// Function to update the score
function updateScore(isCorrect) {
  if (isCorrect) {
    score++;
    document.getElementById('corrects').innerText = score;
  } else {
    // Increase the incorrect score if the answer is wrong
    const incorrectScore = parseInt(document.getElementById('incorrects').innerText);
    document.getElementById('incorrects').innerText = incorrectScore + 1;
  }
}

// Function to handle the time-out scenario
function timeOut() {
  timerShow.textContent = 'Time\'s up!';
  document.getElementById('questions-area').innerHTML = 'Try faster next time! <br> Click here to try again.';
  document.getElementById('questions-area').addEventListener('click', runGame); // Allow the user to restart the game by clicking the message
}

// Add event listener to start button
startBtn.addEventListener('click', runGame);

// Add event listener to submit button
submit.addEventListener('click', playerName);

// Add event listener to next button
nextBtn.addEventListener('click', nextCurrentQuestion);

// Add event listener to rules button
quickzRules.addEventListener('click', showRules);

// Add event listener to close button
closeBtn.addEventListener('click', reset);
*/