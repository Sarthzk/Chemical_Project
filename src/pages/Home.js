import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Home.module.css';
// import products from '../data/full_products_50.json'; // REMOVED: Replaced by async mock

function Home() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [loading, setLoading] = useState(false);
  

  const handleSearch = async (e) => {
    e.preventDefault();
    setHasSearched(true);
    setLoading(true);
    setResult(null); 

    if (!query.trim()) {
        setLoading(false);
        return;
    }

    // --- MOCK API CALL: REPLACE THIS WITH YOUR REAL API LOGIC ---
    const mockProducts = (await import('../data/full_products_50.json')).default;
    const found = mockProducts.find(product =>
        product.name.toLowerCase().includes(query.toLowerCase())
    );

    await new Promise(resolve => setTimeout(resolve, 800)); // Simulate network delay

    setResult(found || null);
    setLoading(false);
  };

  return (
    <div className={styles.wrapper}>
      {/* 1. HERO SECTION */}
      <div className={styles.hero}>
        <h1 className={styles.title}>Know Your Chemicals</h1>
        <p className={styles.subtitle}>
          Make safer choices in your daily life by understanding the chemicals in the products you use.
        </p>
        <div className={styles.ctaButtons}>
          <Link to="/explore"><button className={styles.btnSecondary}>Explore Products</button></Link>
          <Link to="/survey"><button className={styles.btn}>Take Awareness Survey</button></Link>
        </div>
      </div>

      {/* 2. NEW START: GET INVOLVED CTA GRID */}
      <h2 className={styles.sectionTitle}>Get Involved and Learn More</h2>
      <div className={styles.ctaGrid}>
          <Link to="/explore" className={styles.ctaCardLink}>
            <div className={styles.ctaCard}>
              <h3>Explore Products 🔍</h3>
              <p>See a curated list of common products and their concerning ingredients.</p>
              <button className={styles.ctaBtn}>Start Exploring</button>
            </div>
          </Link>
          
          <Link to="/knowledge" className={styles.ctaCardLink}>
            <div className={styles.ctaCard}>
              <h3>Knowledge Base 📚</h3>
              <p>Dive deep into the most common harmful chemicals and their effects.</p>
              <button className={styles.ctaBtn}>Read Articles</button>
            </div>
          </Link>

          <Link to="/quiz" className={styles.ctaCardLink}>
            <div className={styles.ctaCard}>
              <h3>Test Your IQ 🧠</h3>
              <p>Challenge yourself with our fun quiz to see how much you've learned!</p>
              <button className={styles.ctaBtn}>Take the Quiz</button>
            </div>
          </Link>
      </div>
      
      {/* 3. PRODUCT SEARCH SECTION */}
      <div className={styles.searchBox}>
        <h2>Search for a product</h2>
        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="Type a product name (e.g., Toothpaste)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch(e);
              }
            }}
            disabled={loading}
          />
          <button onClick={handleSearch} disabled={loading}>
            {loading ? 'Searching...' : 'Search'}
          </button>
        </div>

        {hasSearched && !loading && (
          result ? (
            <div className={styles.resultCard}>
              <h3 className={styles.resultName}>{result.name}</h3>
              <p className={styles.resultCategory}>Category: {result.category}</p> 

              <div className={styles.resultContent}>
                {result.chemicals?.map((chem, index) => (
                  <div key={index} className={styles.chemicalDetail}>
                    <p><strong>Chemical {index + 1}:</strong> {chem.name}</p>
                    <p className={styles.chemicalInfo}>Info: <em>{chem.info}</em></p>
                  </div>
                ))}

                {result.alternatives?.length > 0 && (
                  <div className={styles.alternativesSection}>
                    <h4>Alternatives:</h4>
                    <ul className={styles.alternativesList}>
                      {result.alternatives.map((alt, i) => (
                        <li key={i}>{alt}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className={styles.notFoundMessage}>
              Product not found via API. Try another term or view the full list.
            </div>
          )
        )}

        {hasSearched && loading && (
             <div className={styles.notFoundMessage}>
               Loading product results...
             </div>
        )}
      </div>

      {/* 4. ESSENTIAL CHEMICAL AWARENESS CARDS */}
      <h2 className={styles.sectionTitle}>Essential Chemical Awareness</h2>
      <div className={styles.infoGrid}> 
        <div className={styles.card}>
          <h2>Phthalates & Fragrance</h2>
          <p>
            Commonly hidden in synthetic fragrances, phthalates are endocrine disruptors linked to reproductive issues. Always look for "fragrance-free" or "natural scents."
          </p>
        </div>

        <div className={styles.card}>
          <h2>SLS & SLES in Foams</h2>
          <p>
            Sodium Lauryl Sulfate (SLS) and Laureth Sulfate (SLES) are harsh detergents that create lather but can strip natural skin oils, causing irritation and allergies.
          </p>
        </div>
        
        <div className={styles.card}>
          <h2>Parabens as Preservatives</h2>
          <p>
            These common preservatives prevent microbial growth but can mimic estrogen in the body, potentially disrupting hormonal balance. Check labels for '-paraben'.
          </p>
        </div>
        
        <div className={styles.card}>
          <h2>Triclosan & Antibacterials</h2>
          <p>
            Used in antibacterial soaps and sanitizers, Triclosan is linked to antibiotic resistance and hormonal disruption. Plain soap and water are often safer and more effective.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;