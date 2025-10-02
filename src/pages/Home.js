import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.heroContainer}>
        {/* Top decorative gradient */}
        <div className={styles.gradientTop} aria-hidden="true">
          <div className={styles.gradientShape}></div>
        </div>

        <div className={styles.contentWrapper}>
          <div className={styles.textCenter}>
            <h1 className={styles.title}>
              Empowering You with Chemical Knowledge
            </h1>
            <p className={styles.subtitle}>
              Dive into the world of chemicals with our interactive platform. Learn about their properties, uses, and impacts on your daily life.
            </p>
            <div className={styles.buttonGroup}>
              <Link to="/explore" className={styles.primaryButton}>
                Explore Chemicals
              </Link>
              <Link to="/about" className={styles.secondaryButton}>
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom decorative gradient */}
        <div className={styles.gradientBottom} aria-hidden="true">
          <div className={styles.gradientShape}></div>
        </div>
      </div>
    </main>
  );
}

export default Home;