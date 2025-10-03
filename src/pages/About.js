import React from 'react';
import styles from './About.module.css';

function About() {
  return (
    <div className={styles.wrapper}>
      {/* <div className={styles.bgPattern}></div>  <-- DELETE THIS LINE */}
      <main className={styles.main}>
        <div className={styles.container}>
          <section className={styles.header}>
            <h2 className={styles.title}>About This Project</h2>
            <p className={styles.subtitle}>
              At Know Your Chemicals, our mission is to empower individuals with the knowledge to make informed decisions about the chemicals they encounter daily.
            </p>
          </section>

          <div className={styles.card}>
            <h3 className={styles.sectionTitle}>Project Context</h3>
            <p className={styles.sectionText}>
              This platform was developed as a **Comprehensive Examination Project (CEP)** by a team of second-year computer engineering students. Our goal was to create an interactive and educational tool to demystify the world of chemicals and promote public awareness.
            </p>
          </div>

          <div className={styles.card}>
            <h3 className={styles.sectionTitle}>Our Vision</h3>
            <p className={styles.sectionText}>
              We envision a future where chemical literacy is widespread, enabling everyone to navigate their environment with confidence. By fostering a deeper understanding of chemical interactions, we aim to promote safer practices and contribute to a healthier planet for all.
            </p>
          </div>

          <div className={styles.card}>
            <h3 className={styles.sectionTitle}>The Team</h3>
            <div className={styles.teamGrid}>
              <div className={styles.teamMember}>
                <h4 className={styles.teamName}>Sarthak Mohite</h4>
                <p className={styles.teamRole}>Web Developer</p>
              </div>
              <div className={styles.teamMember}>
                <h4 className={styles.teamName}>Rushikesh Jadhav</h4>
                <p className={styles.teamRole}>Designer</p>
              </div>
              <div className={styles.teamMember}>
                <h4 className={styles.teamName}>Rushi Khalate</h4>
                <p className={styles.teamRole}>Researcher</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default About;