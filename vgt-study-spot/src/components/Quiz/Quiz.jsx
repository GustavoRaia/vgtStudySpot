import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import questionsData from './questions.json';

const EnglishVocabularyTraining = () => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [totalCorrect, setTotalCorrect] = useState(0);

    useEffect(() => {
        setQuestions(questionsData);
    }, []);

    useEffect(() => {
        console.log(questions);
    }, [questions]);

    const showQuestion = (question) => {
        return (
            <div className="text-center">
                <h1 className="my-5 fw-semibold">English Vocabulary Training</h1>
                <div className="title" id="question">
                    <p className='text-center text-wrap fs-5 text-info'>{question.word}</p>
                </div>
                <p className="text-wrap fs-6">Clique na respectiva tradução:</p>
                <div className="my-4 d-flex justify-content-center flex-wrap" id="options">
                    {question.options.map((option, index) => (
                        <button
                            key={index}
                            className="btn btn-primary m-1"
                            onClick={() => checkAnswer(option, question.correctAnswer)}
                        >
                            {option}
                        </button>
                    ))}
                </div>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-info text-light" onClick={restartQuiz}>Reiniciar Quiz</button>
                </div>
            </div>
        );
    };

    const checkAnswer = (selectedAnswer, correctAnswer) => {
        const isCorrect = selectedAnswer === correctAnswer;
        if (isCorrect) {
            setTotalCorrect(totalCorrect + 1);
        }
        setTimeout(() => {
            if (currentQuestionIndex + 1 < questions.length) {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
            } else {
                alert(`Parabéns, você completou o quiz! O total de acertos foram ${totalCorrect}/${questions.length}`);
            }
        }, 1000);
    };

    const restartQuiz = () => {
        setCurrentQuestionIndex(0);
        setTotalCorrect(0);
    };

    return (
        <div className="page">
            {questions.length > 0 && showQuestion(questions[currentQuestionIndex])}
            <audio id="correctSound" src="./audio/correct.mp3"></audio>
            <audio id="incorrectSound" src="./audio/incorrect.mp3"></audio>
        </div>
    );
};

export default EnglishVocabularyTraining;
