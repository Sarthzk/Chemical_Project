import React from 'react';
import styles from './Knowledge.module.css';

function Knowledge() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>📚 Knowledge Base</h1>
          <p className={styles.subtitle}>
            Dive deep into the most common harmful chemicals found in everyday products and learn about their effects.
          </p>
        </div>

        <div className={styles.articleList}>
          {/* Article 1: Phthalates */}
          <div className={styles.article}>
            <h2 className={styles.articleTitle}>The Hidden Threat of Phthalates</h2>
            <p className={styles.articleContent}>
              Phthalates are a family of man-made chemical compounds used to make plastics like PVC more flexible and durable. They also act as solvents and stabilizers in cosmetic products, particularly in fragrances, to help the scent last longer. Because they don't chemically bind to the materials they are added to, they can be released from products over time.
            </p>
            <div className={styles.subCard}>
              <h3>Where to Find Them:</h3>
              <ul>
                <li><strong>Cosmetics:</strong> Nail polishes, hair sprays, aftershave lotions, perfumes, and any product listing "Fragrance" or "Parfum."</li>
                <li><strong>Household Items:</strong> Vinyl flooring, shower curtains, food packaging, and medical tubing.</li>
              </ul>
              <h3>The Health Concern:</h3>
              <p>
                Phthalates are known endocrine disruptors, meaning they interfere with the body's hormonal system. Studies have linked exposure to harm in fertility, reproductive organs, and birth outcomes.
              </p>
              <a href="https://www.fda.gov/cosmetics/cosmetic-ingredients/phthalates-cosmetics" target="_blank" rel="noopener noreferrer" className={styles.sourceLink}>
                Source: U.S. Food & Drug Administration (FDA)
              </a>
            </div>
          </div>

          {/* Article 2: Parabens */}
          <div className={styles.article}>
            <h2 className={styles.articleTitle}>Parabens: Controversial Preservatives</h2>
            <p className={styles.articleContent}>
              Parabens are a group of chemicals widely used as artificial preservatives in cosmetic, food, and body care products since the 1920s. They are added to prevent the growth of harmful bacteria and mold, increasing the shelf life of products, especially those with high water content like shampoos and lotions.
            </p>
            <div className={styles.subCard}>
              <h3>What They Do:</h3>
              <p>
                They provide antimicrobial defense in products like shampoos, conditioners, skin lotions, and many types of makeup. The most common types are methylparaben, propylparaben, and butylparaben.
              </p>
              <h3>The Health Concern:</h3>
              <p>
                Scientific studies suggest that parabens can disrupt hormones in the body by mimicking estrogen. This weak estrogenic activity may be linked to an increased risk of breast cancer and reproductive issues.
              </p>
              <a href="https://www.ewg.org/what-are-parabens" target="_blank" rel="noopener noreferrer" className={styles.sourceLink}>
                Source: Environmental Working Group (EWG)
              </a>
            </div>
          </div>

          {/* Article 3: Formaldehyde Releasers */}
          <div className={styles.article}>
            <h2 className={styles.articleTitle}>Formaldehyde-Releasing Preservatives</h2>
            <p className={styles.articleContent}>
              Formaldehyde is a known carcinogen, but it's rarely added directly to cosmetics. Instead, many products contain Formaldehyde-Releasing Preservatives (FRPs). These chemicals slowly decompose over time to release small amounts of formaldehyde, which acts as a powerful antimicrobial agent.
            </p>
            <div className={styles.subCard}>
              <h3>Common FRPs to Watch For:</h3>
              <ul>
                <li>DMDM Hydantoin</li>
                <li>Quaternium-15 (banned in the EU)</li>
                <li>Imidazolidinyl Urea & Diazolidinyl Urea</li>
                <li>Sodium Hydroxymethylglycinate</li>
              </ul>
              <h3>The Health Concern:</h3>
              <p>
                Even at low levels, formaldehyde can be absorbed through the skin and cause allergic reactions, skin irritation (contact dermatitis), and rashes. Because it is released as a gas, it can also be inhaled.
              </p>
              <a href="https://www.safecosmetics.org/chemicals/formaldehyde/" target="_blank" rel="noopener noreferrer" className={styles.sourceLink}>
                Source: Campaign for Safe Cosmetics
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Knowledge;