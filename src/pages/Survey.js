import React, { useState } from 'react';
import styles from './Survey.module.css';
//import ReturnHomeButton from "../components/ReturnHomeButton";
// import TopWave from "../components/TopWave"; // Removed TopWave

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
  {
    question: "Do you buy fragrance-free or chemical-free products?",
    options: ["Always", "Sometimes", "Rarely", "Never"],
    scores: [3, 2, 1, 0]
  },
  {
    question: "Do you check for safety certifications on products?",
    options: ["Always", "Sometimes", "Rarely", "Never heard of it"],
    scores: [3, 2, 1, 0]
  },
  {
    question: "How often do you research chemicals in products you use?",
    options: ["Always", "Sometimes", "Rarely", "Never"],
    scores: [3, 2, 1, 0]
  },
  {
    question: "Do you use DIY/home remedies instead of chemical cleaners?",
    options: ["Always", "Sometimes", "Rarely", "Never"],
    scores: [3, 2, 1, 0]
  },
  {
    question: "Do you follow any pages/accounts related to chemical safety?",
    options: ["Yes, many", "A few", "Not really", "No"],
    scores: [3, 2, 1, 0]
  }
];

function Survey() {
  const [answers, setAnswers] = useState(Array(surveyQuestions.length).fill(null));
  const [submitted, setSubmitted] = useState(false);

  const handleOptionSelect = (qIndex, optionIndex) => {
    const updatedAnswers = [...answers];
    updatedAnswers[qIndex] = optionIndex;
    setAnswers(updatedAnswers);
  };

  const calculateScore = () => {
    return answers.reduce((score, selected, i) => {
      if (selected !== null) {
        return score + surveyQuestions[i].scores[selected];
      }
      return score;
    }, 0);
  };

  const handleSubmit = () => {
    if (answers.includes(null)) {
      alert("Please answer all questions.");
      return;
    }
    setSubmitted(true);
  };

  const totalScore = calculateScore();
  const maxScore = surveyQuestions.length * 3;
   const percentage = Math.round((totalScore / maxScore) * 100);

  return (
    <div className={styles.wrapper}>
      {/* TopWave removed */}
      <div className={styles.container}>
      <h1 className={styles.title}>🧪 Chemical Awareness Survey</h1>

      {!submitted ? (
        <>
          {surveyQuestions.map((q, qIndex) => (
            <div key={qIndex} className={styles.questionCard}>
              <h3>{q.question}</h3>
              <div className={styles.options}>
                {q.options.map((opt, optIndex) => (
                  <button
                    key={optIndex}
                    className={`${styles.optionBtn} ${answers[qIndex] === optIndex ? styles.selected : ""}`}
                    onClick={() => handleOptionSelect(qIndex, optIndex)}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          ))}

          <button onClick={handleSubmit} className={styles.submitBtn}>See My Awareness Score</button>
        </>
      ) : (
        <div className={styles.resultCard}>
            <h2>Your Awareness Score: {percentage}%</h2>
<p>
  {percentage >= 80
    ? "🔥 You're a Chemical Safety Pro!"
    : percentage >= 50
    ? "🧠 You're aware, but there's more to learn!"
    : "😬 Time to start checking those labels, Sarthak!"}
</p>
    <button
  onClick={() => window.location.href = "/knowledge"}
  className={styles.learnMoreBtn}
>
  Increase Your Chemical Knowledge
</button>        
<button
  onClick={() => window.location.href = "/quiz"}
  className={styles.quizBtn}
>
  Test Your Knowledge (Quiz)
</button>   
        </div>
      )}
      {/* <ReturnHomeButton /> */}
    </div>
    </div>
  );
}

export default Survey;