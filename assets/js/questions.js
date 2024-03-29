const questions = [
  {
    question: "Who wrote the novel the 1984? ",
    answers: [
      { text: "George Orwell", correct: true},
      { text: "J.K. Rowling", correct: false},
      { text: "F. Scott Fitzgerald", correct: false},
      { text: "Ernest Hemingway", correct: false},
    ]
  },
  {
    question: "What is the capital city of Australia?",
    answers: [
      { text: "Sydney", correct: false},
      { text: "Melbourne", correct: false},
      { text: "Canberra", correct: true},
      { text: "Brisbane", correct: false},
    ]
  },
  {
    question: "What is the chemical symbol for Gold?",
    answers: [
      { text: "Gd", correct: false},
      { text: "Go", correct: false},
      { text: "Ag", correct: false},
      { text: "Au", correct: true},
    ]
  },
  {
    question: "In what year was the first iPhone released?",
    answers: [
      { text: "2005", correct: false},
      { text: "2007", correct: true},
      { text: "2008", correct: false},
      { text: "2010", correct: false},
    ]
  },
  {
    question: "What is the tallest mountain in the world?",
    answers: [
      { text: "K2", correct: false},
      { text: "Mount Everest", correct: true},
      { text: "Mount Klimanjaro", correct: false},
      { text: "Denali", correct: false},
    ]
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Venus", correct: false},
      { text: "Mars", correct: true},
      { text: "Jupiter", correct: false},
      { text: "Saturn", correct: false},
    ]
  },
  {
    question: "Who discovered electricity?",
    answers: [
      { text: "Isaac Newton", correct: false},
      { text: "Nikola Tesla", correct: false},
      { text: "Michael Faraday", correct: false},
      { text: "Benjamin Franklin", correct: true},
    ]
  },
  {
    question: "What is the world's largest ocean?",
    answers: [
      { text: "Atlantic Ocean", correct: false},
      { text: "Indian Ocean", correct: false},
      { text: "Pacific Ocean", correct: true},
      { text: "Southern Ocean", correct: false},
    ]
  },
  {
    question: "Who came up with the theory of relativity?",
    answers: [
      { text: "Edgar Allan Poe", correct: false},
      { text: "Albert Einstein", correct: true},
      { text: "Galileo Galilei", correct: false},
      { text: "Louis Pasteur", correct: false},
    ]
  },
  {
    question: "What is the national bird of the United States?",
    answers: [
      { text: "Eagle", correct: true},
      { text: "Bald Eagle", correct: false},
      { text: "Condor", correct: false},
      { text: "Pigeon", correct: false},
    ]
  },
  {
    question: "What language is spoken in Brazil?",
    answers: [
      { text: "Spanish", correct: false},
      { text: "Portuguese", correct: true},
      { text: "English", correct: false},
      { text: "French", correct: false},
    ]
  },
  {
    question: "Who directed the movie the Jurassic Park?",
    answers: [
      { text: "Steven Spielberg", correct: true},
      { text: "George Lucas", correct: false},
      { text: "Michael Bay", correct: false},
      { text: "Stanley Kubrick", correct: false},
    ]
  },
  {
    question: "What is sushi traditionally wrapped in?",
    answers: [
      { text: "Rice Paper", correct: false},
      { text: "Seaweed", correct: true},
      { text: "Bamboo", correct: false},
      { text: "Lettuce", correct: false},
    ]
  },
  {
    question: "What is the main ingredient in hummus?",
    answers: [
      { text: "Potatoes", correct: false},
      { text: "Lentils", correct: false},
      { text: "Chickpeas", correct: true},
      { text: "White Beans", correct: false},
    ]
  },
  {
    question: "Who is the author of the Harry Potter series?",
    answers: [
      { text: "J.D. Salinger", correct: false},
      { text: "Roald Dahl", correct: false},
      { text: "Suzanne Collins", correct: false},
      { text: "J.K. Rowling", correct: true},
    ]
  },
  {
    question: "How many players are there in a soccer team?",
    answers: [
      { text: "6", correct: false},
      { text: "11", correct: true},
      { text: "9", correct: false},
      { text: "4", correct: false},
    ]
  },
  {
    question: "What does a barometer measure?",
    answers: [
      { text: "Sound", correct: false},
      { text: "Light", correct: false},
      { text: "Atmospheric Pressure", correct: true},
      { text: "Humidity", correct: false},
    ]
  },
  {
    question: "What is the highest-grossing film of all time?",
    answers: [
      { text: "Titanic", correct: false},
      { text: "Avatar", correct: false},
      { text: "Avengers: Endgame", correct: true},
      { text: "Star Wars: The Force Awakens", correct: false},
    ]
  },
  {
    question: "In what decade was the Internet created?",
    answers: [
      { text: "1960s", correct: true},
      { text: "1970s", correct: false},
      { text: "1980s", correct: false},
      { text: "1990s", correct: false},
    ]
  },
  {
    question: "What is the hottest planet in the solar system?",
    answers: [
      { text: "Mercury", correct: false},
      { text: "Mars", correct: false},
      { text: "Venus", correct: true},
      { text: "Jupiter", correct: false},
    ]
  },
  {
    question: "Who composed the music for The Nutcracker?",
    answers: [
      { text: "Mozart", correct: false},
      { text: "Beethoven", correct: false},
      { text: "Tchaikovsky", correct: true},
      { text: "Bach", correct: false},
    ]
  },
  {
    question: "What does NASA stand for?",
    answers: [
      { text: "North American Satellite Association", correct: false},
      { text: "National Aeronautics and Space Administration", correct: true},
      { text: "National Association of Space Astronauts", correct: false},
      { text: "National American Space Association", correct: false},
    ]
  },
  {
    question: "What is the capital city of Canada?",
    answers: [
      { text: "Vancouver", correct: false},
      { text: "Toronto", correct: false},
      { text: "Quebec City", correct: false},
      { text: "Ottawa", correct: true},
    ]
  },
  {
    question: "How many bones are there in the adult human body?",
    answers: [
      { text: "256", correct: false},
      { text: "206", correct: true},
      { text: "216", correct: false},
      { text: "232", correct: false},
    ]
  },
  {
    question: "What is the smallest country in the world?",
    answers: [
      { text: "Monaco", correct: false},
      { text: "Vatican City", correct: true},
      { text: "Malta", correct: false},
      { text: "San Marino", correct: false},
    ]
  },
]