import React, { useState } from 'react';
import styles from './Quiz.module.css';

const quizData = [
  {
    question: "Which chemical in plastics is known to disrupt hormones?",
    options: ["BPA", "SLS", "Phosphates", "Parabens"],
    answer: "BPA"
  },
  {
    question: "Which chemical is commonly found in shampoos and can irritate skin?",
    options: ["Benzene", "SLS", "Ammonia", "Hydrogen Peroxide"],
    answer: "SLS"
  },
  {
    question: "What are parabens used for in cosmetics?",
    options: ["Coloring", "Preservatives", "Scent", "Foam"],
    answer: "Preservatives"
  },
  {
    question: "Which chemical is harmful to aquatic life?",
    options: ["BPA", "Triclosan", "Phosphates", "Ethanol"],
    answer: "Phosphates"
  },
  {
    question: "Which chemical was banned in hand soaps for causing resistance?",
    options: ["Triclosan", "Parabens", "Aluminum", "Mercury"],
    answer: "Triclosan"
  }
];

function Quiz() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState("");
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (option) => {
    setSelected(option);
    if (option === quizData[current].answer) {
      setScore(score + 1);
    }

    // Delay to show feedback
    setTimeout(() => {
      if (current + 1 < quizData.length) {
        setCurrent(current + 1);
        setSelected("");
      } else {
        setShowResult(true);
      }
    }, 2000);
  };

  const resetQuiz = () => {
    setCurrent(0);
    setScore(0);
    setSelected("");
    setShowResult(false);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Chemical Safety Quiz</h1>

      {showResult ? (
        <div className={styles.result}>
          <h2>Your Score: {score} / {quizData.length}</h2>
          <button className={styles.resetBtn} onClick={resetQuiz}>Try Again</button>
        </div>
      ) : (
        <div className={styles.quizBox}>
          <h3>{quizData[current].question}</h3>
          <div className={styles.options}>
            {quizData[current].options.map((option, index) => {
              const isCorrect = option === quizData[current].answer;
              const isSelected = option === selected;

              let buttonClass = styles.optionBtn;

              if (selected) {
                if (isCorrect) buttonClass += ` ${styles.correct}`;
                else if (isSelected) buttonClass += ` ${styles.wrong}`;
              }

              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className={buttonClass}
                  disabled={!!selected}
                >
                  {option}
                </button>
              );
            })}
          </div>

          {/* ✅ Feedback message */}
          {selected && (
            <div className={styles.feedback}>
              {selected === quizData[current].answer ? (
                <p className={styles.correctText}>✅ Correct!</p>
              ) : (
                <p className={styles.wrongText}>
                  ❌ Wrong! The correct answer is: <strong>{quizData[current].answer}</strong>
                </p>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Quiz;