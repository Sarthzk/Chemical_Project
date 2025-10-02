import React, { useState } from 'react';
import styles from './Survey.module.css';

const surveyQuestions = [
  {
    question: "How often do you read ingredient labels on products?",
    options: ["Always", "Sometimes", "Rarely", "Never"],
    scores: [3, 2, 1, 0]
  },
  {
    question: "Do you use air fresheners or scented candles regularly?",
    options: ["Yes, daily", "Sometimes", "Rarely", "Never"],
    scores: [0, 1, 2, 3]
  },
  {
    question: "Do you use eco-friendly cleaning products?",
    options: ["Always", "Sometimes", "Rarely", "Never"],
    scores: [3, 2, 1, 0]
  },
  {
    question: "Have you heard of SLS, parabens, or phthalates?",
    options: ["Yes, all of them", "Some of them", "One of them", "Nope"],
    scores: [3, 2, 1, 0]
  },
  {
    question: "Do you use plastic containers for hot food or drinks?",
    options: ["Yes, always", "Sometimes", "Rarely", "Never"],
    scores: [0, 1, 2, 3]
  },
];

function Survey() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(surveyQuestions.length).fill(null));
  const [showResult, setShowResult] = useState(false);

  const handleOptionSelect = (optionIndex) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = optionIndex;
    setAnswers(newAnswers);
  };

  const handleNextQuestion = (e) => {
    e.preventDefault();
    if (answers[currentQuestionIndex] === null) {
      alert("Please select an answer before proceeding.");
      return;
    }

    if (currentQuestionIndex < surveyQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  const calculateScore = () => {
    return answers.reduce((score, selected, i) => {
      if (selected !== null) {
        return score + surveyQuestions[i].scores[selected];
      }
      return score;
    }, 0);
  };

  const totalScore = calculateScore();
  const maxScore = surveyQuestions.length * 3;
  const percentage = Math.round((totalScore / maxScore) * 100);

  const progress = ((currentQuestionIndex + 1) / surveyQuestions.length) * 100;

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Chemical Awareness Survey</h2>
          <p className={styles.subtitle}>
            Assess your understanding of chemicals in everyday life and their impact on health and the environment.
          </p>
        </div>

        <div className={styles.surveyFormContainer}>
          {showResult ? (
            <div className={styles.resultCard}>
              <h2>Your Awareness Score: {percentage}%</h2>
              <p>
                {percentage >= 80
                  ? "🔥 You're a Chemical Safety Pro!"
                  : percentage >= 50
                  ? "🧠 You're aware, but there's more to learn!"
                  : "😬 Time to start checking those labels!"}
              </p>
              <div className={styles.resultActions}>
                <a href="/knowledge" className={styles.actionButton}>
                  Increase Your Knowledge
                </a>
                <a href="/quiz" className={styles.actionButton}>
                  Test Yourself (Quiz)
                </a>
              </div>
            </div>
          ) : (
            <>
              {/* Progress Bar */}
              <div>
                <div className={styles.progressHeader}>
                  <p className={styles.progressText}>Progress</p>
                  <p className={styles.progressCount}>{currentQuestionIndex + 1}/{surveyQuestions.length} Questions</p>
                </div>
                <div className={styles.progressBarBackground}>
                  <div className={styles.progressBarForeground} style={{ width: `${progress}%` }}></div>
                </div>
              </div>

              {/* Form */}
              <form className={styles.form} onSubmit={handleNextQuestion}>
                <div className={styles.questionBlock}>
                  <label className={styles.questionLabel}>
                    {`${currentQuestionIndex + 1}. ${surveyQuestions[currentQuestionIndex].question}`}
                  </label>
                  <div className={styles.optionsGrid}>
                    {surveyQuestions[currentQuestionIndex].options.map((option, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => handleOptionSelect(index)}
                        className={`${styles.optionButton} ${answers[currentQuestionIndex] === index ? styles.selected : ''}`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                <div className={styles.nextButtonContainer}>
                  <button type="submit" className={styles.nextButton}>
                    <span>{currentQuestionIndex < surveyQuestions.length - 1 ? 'Next Question' : 'Finish Survey'}</span>
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </main>
  );
}

export default Survey;