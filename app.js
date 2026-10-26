"use strict";

const questions = [
  {
    question: "¿Qué serie es un referente del género magical girl?",
    answers: [
      "Sailor Moon",
      "Pokémon",
      "Dragon Ball",
      "One Piece"
    ],
    correct: 0
  },
  {
    question: "¿Qué elemento es típico de la estética magical girl?",
    answers: [
      "Corazones y estrellas",
      "Robots industriales",
      "Cascos de obra",
      "Señales de tráfico"
    ],
    correct: 0
  },
  {
    question: "¿Qué valor aparece frecuentemente en las historias de magical girls?",
    answers: [
      "La amistad",
      "La burocracia",
      "La competición empresarial",
      "La conducción"
    ],
    correct: 0
  },
  {
    question: "¿Cuál de estas obras pertenece al género magical girl?",
    answers: [
      "Puella Magi Madoka Magica",
      "Jurassic Park",
      "The Matrix",
      "Star Wars"
    ],
    correct: 0
  },
  {
    question: "¿Qué objeto puede funcionar como objeto mágico?",
    answers: [
      "Una varita",
      "Una calculadora",
      "Una grapadora",
      "Una carpeta"
    ],
    correct: 0
  },
  {
    question: "¿Qué elemento suele acompañar a una transformación mágica?",
    answers: [
      "Un traje especial",
      "Un uniforme de oficina",
      "Un casco de construcción",
      "Un traje de buceo"
    ],
    correct: 0
  }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

const gameScreen = document.getElementById("game-screen");
const resultScreen = document.getElementById("result-screen");

const questionNumber = document.getElementById("question-number");
const totalQuestions = document.getElementById("total-questions");

const scoreElement = document.getElementById("score");

const questionTitle = document.getElementById("question-title");
const answersContainer = document.getElementById("answers");

const feedback = document.getElementById("feedback");
const nextButton = document.getElementById("next-button");

const progressBar = document.getElementById("progress-bar");

const finalScore = document.getElementById("final-score");
const maxScore = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");

const restartButton = document.getElementById("restart-button");

totalQuestions.textContent = questions.length;
maxScore.textContent = questions.length;

function showQuestion() {
  answered = false;

  const current = questions[currentQuestion];

  questionNumber.textContent = currentQuestion + 1;
  questionTitle.textContent = current.question;
  scoreElement.textContent = score;

  feedback.textContent = "";
  feedback.className = "feedback";

  nextButton.hidden = true;

  answersContainer.innerHTML = "";

  current.answers.forEach(function (answer, index) {
    const option = document.createElement("div");
    option.className = "answer-option";

    const input = document.createElement("input");
    input.type = "radio";
    input.name = "answer";
    input.id = "answer-" + index;
    input.value = index;

    const label = document.createElement("label");
    label.htmlFor = input.id;
    label.textContent = answer;

    input.addEventListener("change", function () {
      checkAnswer(index);
    });

    option.appendChild(input);
    option.appendChild(label);

    answersContainer.appendChild(option);
  });

  updateProgress();

  const firstInput = answersContainer.querySelector("input");

  if (firstInput) {
    firstInput.focus();
  }
}

function checkAnswer(selectedIndex) {
  if (answered) {
    return;
  }

  answered = true;

  const current = questions[currentQuestion];
  const options = answersContainer.querySelectorAll(".answer-option");
  const inputs = answersContainer.querySelectorAll("input");

  inputs.forEach(function (input) {
    input.disabled = true;
  });

  options.forEach(function (option, index) {
    option.classList.add("disabled");

    if (index === current.correct) {
      option.classList.add("correct");
    }

    if (
      index === selectedIndex &&
      selectedIndex !== current.correct
    ) {
      option.classList.add("incorrect");
    }
  });

  if (selectedIndex === current.correct) {
    score = score + 1;
    scoreElement.textContent = score;

    feedback.textContent = "¡Respuesta correcta! ✦";
    feedback.className = "feedback correct";
  } else {
    feedback.textContent =
      "¡Casi! La respuesta correcta era: " +
      current.answers[current.correct] +
      ".";
    feedback.className = "feedback incorrect";
  }

  nextButton.hidden = false;
  nextButton.focus();
}

function updateProgress() {
  const progress =
    ((currentQuestion + 1) / questions.length) * 100;

  progressBar.style.width = progress + "%";

  progressBar.parentElement.setAttribute(
    "aria-valuenow",
    currentQuestion + 1
  );
}

function nextQuestion() {
  if (!answered) {
    return;
  }

  currentQuestion = currentQuestion + 1;

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  gameScreen.hidden = true;
  resultScreen.hidden = false;

  finalScore.textContent = score;

  if (score === questions.length) {
    resultMessage.textContent =
      "¡Eres una auténtica magical girl! ✦";
  } else if (score >= 3) {
    resultMessage.textContent =
      "¡Tu poder mágico es bastante fuerte! ♡";
  } else {
    resultMessage.textContent =
      "Tu transformación acaba de empezar. ¡Inténtalo otra vez! ✧";
  }

  restartButton.focus();
}

function restartGame() {
  currentQuestion = 0;
  score = 0;
  answered = false;

  gameScreen.hidden = false;
  resultScreen.hidden = true;

  showQuestion();
}

// Event listeners
nextButton.addEventListener("click", nextQuestion);
restartButton.addEventListener("click", restartGame);

// Iniciar el quiz
showQuestion();
/*"use strict";

document.addEventListener("DOMContentLoaded", function () {

const questions = [
{
question: "¿Qué serie es un referente del género magical girl?",
answers: [
"Sailor Moon",
"Pokémon",
"Dragon Ball",
"One Piece"
],
correct: 0
},

```
{
  question: "¿Qué elemento es típico de la estética magical girl?",
  answers: [
    "Corazones y estrellas",
    "Robots industriales",
    "Cascos de obra",
    "Señales de tráfico"
  ],
  correct: 0
},

{
  question: "¿Qué valor aparece frecuentemente en las historias de magical girls?",
  answers: [
    "La amistad",
    "La burocracia",
    "La competición empresarial",
    "La conducción"
  ],
  correct: 0
},

{
  question: "¿Cuál de estas obras pertenece al género magical girl?",
  answers: [
    "Puella Magi Madoka Magica",
    "Jurassic Park",
    "The Matrix",
    "Star Wars"
  ],
  correct: 0
},

{
  question: "¿Qué objeto puede funcionar como objeto mágico?",
  answers: [
    "Una varita",
    "Una calculadora",
    "Una grapadora",
    "Una carpeta"
  ],
  correct: 0
},

{
  question: "¿Qué elemento suele acompañar a una transformación mágica?",
  answers: [
    "Un traje especial",
    "Un uniforme de oficina",
    "Un casco de construcción",
    "Un traje de buceo"
  ],
  correct: 0
}
```

];

let currentQuestion = 0;
let score = 0;
let answered = false;

const gameScreen = document.getElementById("game-screen");
const resultScreen = document.getElementById("result-screen");

const questionNumber =
document.getElementById("question-number");

const totalQuestions =
document.getElementById("total-questions");

const scoreElement =
document.getElementById("score");

const questionTitle =
document.getElementById("question-title");

const answersContainer =
document.getElementById("answers");

const feedback =
document.getElementById("feedback");

const nextButton =
document.getElementById("next-button");

const progressBar =
document.getElementById("progress-bar");

const finalScore =
document.getElementById("final-score");

const maxScore =
document.getElementById("max-score");

const resultMessage =
document.getElementById("result-message");

const restartButton =
document.getElementById("restart-button");

totalQuestions.textContent = questions.length;
maxScore.textContent = questions.length;

function showQuestion() {

```
answered = false;

const current = questions[currentQuestion];

questionNumber.textContent = currentQuestion + 1;
questionTitle.textContent = current.question;
scoreElement.textContent = score;

feedback.textContent = "";
feedback.className = "feedback";

nextButton.hidden = true;

answersContainer.innerHTML = "";


for (let index = 0; index < current.answers.length; index++) {

  const answer = current.answers[index];


  const option = document.createElement("div");
  option.className = "answer-option";


  const input = document.createElement("input");

  input.type = "radio";
  input.name = "answer";
  input.id = "answer-" + index;
  input.value = index;


  const label = document.createElement("label");

  label.setAttribute("for", input.id);
  label.textContent = answer;


  input.addEventListener("change", function () {
    checkAnswer(index);
  });


  option.appendChild(input);
  option.appendChild(label);

  answersContainer.appendChild(option);
}


updateProgress();


const firstInput =
  answersContainer.querySelector("input");

if (firstInput) {
  firstInput.focus();
}
```

}

function checkAnswer(selectedIndex) {

```
if (answered) {
  return;
}

answered = true;

const current = questions[currentQuestion];

const options =
  answersContainer.querySelectorAll(".answer-option");

const inputs =
  answersContainer.querySelectorAll("input");


inputs.forEach(function (input) {
  input.disabled = true;
});


options.forEach(function (option, index) {

  option.classList.add("disabled");


  if (index === current.correct) {
    option.classList.add("correct");
  }


  if (
    index === selectedIndex &&
    selectedIndex !== current.correct
  ) {
    option.classList.add("incorrect");
  }

});


if (selectedIndex === current.correct) {

  score = score + 1;

  scoreElement.textContent = score;

  feedback.textContent =
    "¡Respuesta correcta! Tu poder mágico aumenta. ✦";

  feedback.className =
    "feedback correct";

} else {

  feedback.textContent =
    "¡Casi! La respuesta correcta era: " +
    current.answers[current.correct] +
    ".";

  feedback.className =
    "feedback incorrect";
}


nextButton.hidden = false;

nextButton.focus();
```

}

function updateProgress() {

```
const progress =
  ((currentQuestion + 1) / questions.length) * 100;

progressBar.style.width =
  progress + "%";

progressBar.parentElement.setAttribute(
  "aria-valuenow",
  currentQuestion + 1
);
```

}

function nextQuestion() {

```
if (!answered) {
  return;
}

currentQuestion =
  currentQuestion + 1;


if (currentQuestion < questions.length) {

  showQuestion();

} else {

  showResults();

}
```

}

function showResults() {

```
gameScreen.hidden = true;

resultScreen.hidden = false;

finalScore.textContent = score;


if (score === questions.length) {

  resultMessage.textContent =
    "¡Eres una auténtica magical girl! ✦";

} else if (score >= 3) {

  resultMessage.textContent =
    "¡Tu poder mágico es bastante fuerte! ♡";

} else {

  resultMessage.textContent =
    "Tu transformación acaba de empezar. ¡Inténtalo otra vez! ✧";
}


restartButton.focus();
```

}

function restartGame() {

```
currentQuestion = 0;

score = 0;

answered = false;

gameScreen.hidden = false;

resultScreen.hidden = true;

showQuestion();
```

}

nextButton.addEventListener(
"click",
nextQuestion
);

restartButton.addEventListener(
"click",
restartGame
);

showQuestion();

});
 */