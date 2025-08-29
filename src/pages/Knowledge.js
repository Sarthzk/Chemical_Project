import React from 'react';
import styles from './Knowledge.module.css';

function Knowledge() {
  return (
    <div className={styles.container}>
      <h1>📚 Increase Your Chemical Knowledge</h1>

      <div className={styles.card}>
        <h3>SLS (Sodium Lauryl Sulfate)</h3>
        <p>
          Found in: Shampoos, soaps, toothpaste<br/>
          Known to irritate skin and eyes, and strip away natural oils.
        </p>
      </div>

      <div className={styles.card}>
        <h3>Parabens</h3>
        <p>
          Found in: Cosmetics, moisturizers, hair products<br/>
          Can mimic estrogen and may disrupt hormone function.
        </p>
      </div>

      <div className={styles.card}>
        <h3>Phthalates</h3>
        <p>
          Found in: Fragrances, vinyl plastics, air fresheners<br/>
          Linked to reproductive issues and hormonal imbalances.
        </p>
      </div>

      <div className={styles.card}>
        <h3>BPA (Bisphenol A)</h3>
        <p>
          Found in: Plastic bottles, food containers<br/>
          May leach into food/drinks and disrupt hormone function.
        </p>
      </div>

      <div className={styles.card}>
        <h3>Triclosan</h3>
        <p>
          Found in: Antibacterial soaps, toothpaste<br/>
          Linked to hormone disruption and antibacterial resistance.
        </p>
      </div>
    </div>
  );
}

export default Knowledge;