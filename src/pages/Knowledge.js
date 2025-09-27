import React from 'react';
import styles from './Knowledge.module.css';

function Knowledge() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>📚 Informative Articles: Chemicals in Daily Life</h1>

      <div className={styles.article}>
        <h2 className={styles.articleTitle}>The Hidden Threat of Phthalates in Plastics and Fragrances</h2>
        <div className={styles.articleContent}>
          <p>
            **Phthalates** (pronounced THA-lates) are a group of chemicals used to make plastics more flexible (e.g., PVC and vinyl products) and, most often, as carriers for synthetic **fragrances** in cosmetics, air fresheners, and detergents. They are often not listed explicitly on labels, making them difficult to avoid.
          </p>
          <div className={styles.subCard}>
            <h3>Where to Find Them:</h3>
            <ul>
              <li>**Personal Care:** Cosmetics, nail polish, shampoo, and especially products listing "Fragrance" or "Parfum."</li>
              <li>**Household:** Vinyl flooring, shower curtains, air fresheners, and some food containers.</li>
            </ul>
            <h3>The Health Concern:</h3>
            <p>
              Phthalates are categorized as **Endocrine-Disrupting Chemicals (EDCs)**. This means they interfere with the body's endocrine (hormone) system. Exposure is linked to reproductive issues, reduced sperm count, and developmental problems in children.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.article}>
        <h2 className={styles.articleTitle}>Parabens: The Controversial Cosmetic Preservatives</h2>
        <div className={styles.articleContent}>
          <p>
            **Parabens** (such as Methylparaben, Propylparaben, and Butylparaben) have been widely used since the 1920s to prevent the growth of bacteria and mold, extending the shelf life of personal care items. They are highly effective, but their role as a potential hormone disruptor has led to significant debate and regulatory review.
          </p>
          <div className={styles.subCard}>
            <h3>What They Do:</h3>
            <p>
              They provide microbial defense in products like shampoos, conditioners, skin lotions, and many types of makeup.
            </p>
            <h3>The Health Concern:</h3>
            <p>
              Parabens are EDCs that can mimic **estrogen** activity in the body. While most studies show weak activity, cumulative daily exposure is a concern. Consumers often seek products explicitly labeled **"Paraben-Free"** as a precautionary measure against potential long-term hormonal imbalance.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.article}>
        <h2 className={styles.articleTitle}>Formaldehyde Releasers: Preserving Products, Irritating Skin</h2>
        <div className={styles.articleContent}>
          <p>
            Formaldehyde is a known human carcinogen, but it's rarely listed directly. Instead, many products contain **Formaldehyde Releasing Preservatives (FRPs)**. These chemicals slowly break down over time to release small amounts of formaldehyde, which acts as a powerful antimicrobial agent.
          </p>
          <div className={styles.subCard}>
            <h3>Common FRPs to Watch For:</h3>
            <ul>
              <li>DMDM Hydantoin</li>
              <li>Quaternium-15</li>
              <li>Imidazolidinyl Urea</li>
            </ul>
            <h3>The Health Concern:</h3>
            <p>
              FRPs are a leading cause of **contact dermatitis** (skin irritation and allergies) in cosmetic users. Chronic exposure, even at low levels, increases the risk of skin sensitization. Avoiding them is recommended for anyone with sensitive or reactive skin.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Knowledge;