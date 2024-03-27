import React, { useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import questions from "./questions.json"
import Nav from '../Nav/Nav';

const EnglishVocabularyTraining = () => {
  let currentQuestionIndex = 0;
  let totalCorrect = 0;

  useEffect(() => {
    const restartButton = document.getElementById("restartButton");

    restartButton.addEventListener("click", handleRestart);

    import("./questions.json")
      .then((data) => {
        questions = data.default;
        showQuestion(questions[currentQuestionIndex]);
      })
      .catch((error) => console.error("Error loading questions:", error));

    return () => {
      restartButton.removeEventListener("click", handleRestart);
    };
  }, []);

  function showQuestion(question) {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");

    questionElement.innerHTML =
      "<p class='text-center text-wrap fs-5 text-info'>" +
      question.word +
      "</p>";
    optionsElement.innerHTML = "";

    question.options.forEach((option) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.addEventListener("click", () =>
        checkAnswer(button, option, question.correctAnswer, optionsElement)
      );
      button.classList.add("btn", "btn-primary", "m-1");
      optionsElement.appendChild(button);
    });
  }

  function checkAnswer(button, selectedAnswer, correctAnswer, optionsElement) {
    if (selectedAnswer === correctAnswer) {
      button.classList.remove("btn-primary");
      button.classList.add("btn-success");
      totalCorrect++;
    //   document.getElementById("correctSound").play();
    } else {
      button.classList.remove("btn-primary");
      button.classList.add("btn-danger");
      optionsElement.querySelectorAll("button").forEach((btn) => {
        if (btn.textContent === correctAnswer) {
          btn.classList.remove("btn-primary");
          btn.classList.add("btn-success");
        }
      });
    //   document.getElementById("incorrectSound").play();
    }

    setTimeout(() => {
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
      } else {
        alert(
          `Parabéns, você completou o quiz! O total de acertos foram ${totalCorrect}/${questions.length}`
        );
      }
    }, 1000);
  }

  function handleRestart() {
    currentQuestionIndex = 0;
    totalCorrect = 0;
    showQuestion(questions[currentQuestionIndex]);
  }

  return (
    <>
      <Nav />
      <div class="text-center page">
        <h1 class="my-5 fw-semibold">English Vocabulary Training</h1>

        <div class="title" id="question"></div>

        <p class="text-wrap fs-6">Clique na respectiva tradução:</p>

        <div
          class="my-4 d-flex justify-content-center flex-wrap"
          id="options"
        ></div>

        <div class="d-flex justify-content-center">
          <button class="btn btn-info text-light" id="restartButton">
            Reiniciar Quiz
          </button>
        </div>
      </div>

      <audio id="correctSound" src="./audio/correct.mp3"></audio>
      <audio id="incorrectSound" src="./audio/incorrect.mp3"></audio>
    </>
  );
};

export default EnglishVocabularyTraining;
