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
    question: "What are parabens primarily used for in cosmetics?",
    options: ["Coloring", "Preservatives", "Scent", "Foam"],
    answer: "Preservatives"
  },
  {
    question: "Which of these, found in detergents, is particularly harmful to aquatic life?",
    options: ["BPA", "Triclosan", "Phosphates", "Ethanol"],
    answer: "Phosphates"
  },
  {
    question: "Triclosan was banned in many hand soaps because it can contribute to what problem?",
    options: ["Antibiotic Resistance", "Skin Discoloration", "Hair Loss", "Plastic Erosion"],
    answer: "Antibiotic Resistance"
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

    // Delay to show feedback before moving to the next question or results
    setTimeout(() => {
      if (current + 1 < quizData.length) {
        setCurrent(current + 1);
        setSelected("");
      } else {
        setShowResult(true);
      }
    }, 1500);
  };

  const resetQuiz = () => {
    setCurrent(0);
    setScore(0);
    setSelected("");
    setShowResult(false);
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.header}>
            <h1 className={styles.title}>🧠 Chemical Safety Quiz</h1>
            <p className={styles.subtitle}>Test your knowledge and see how much you've learned about common chemicals.</p>
        </div>

        {showResult ? (
          <div className={`${styles.quizBox} ${styles.resultBox}`}>
            <h2>Quiz Complete!</h2>
            <p className={styles.scoreText}>Your Score: {score} / {quizData.length}</p>
            <p className={styles.resultMessage}>
                {score / quizData.length >= 0.8 ? "Excellent! You're a chemical expert." : "Good effort! There's always more to learn."}
            </p>
            <button className={styles.resetBtn} onClick={resetQuiz}>
              Try Again
            </button>
          </div>
        ) : (
          <div className={styles.quizBox}>
            <div className={styles.progressHeader}>
                <p className={styles.progressText}>Question {current + 1} of {quizData.length}</p>
            </div>
            <h3 className={styles.questionText}>{quizData[current].question}</h3>
            <div className={styles.options}>
              {quizData[current].options.map((option, index) => {
                let buttonClass = styles.optionBtn;
                if (selected) {
                  if (option === quizData[current].answer) {
                    buttonClass += ` ${styles.correct}`;
                  } else if (option === selected) {
                    buttonClass += ` ${styles.wrong}`;
                  }
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
          </div>
        )}
      </div>
    </main>
  );
}

export default Quiz;