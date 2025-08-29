import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import products from '../data/full_products_50.json';
import TopWave from "../components/TopWave";

function Home() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    setHasSearched(true);
    const found = products.find(product =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setResult(found || null);
  };

  return (
    <div className={styles.wrapper}>
      <TopWave />
      <div className={styles.hero}>
        <h1 className={styles.title}>Know Your Chemicals</h1>
        <p className={styles.subtitle}>
          Make safer choices in your daily life by understanding the chemicals in the products you use.
        </p>
        <div className={styles.ctaButtons}>
          
          <Link to="/survey"><button className={styles.btn}>Take Survey</button></Link>
        </div>
      </div>

      {/* 🔍 Search Section */}
      <div className={styles.searchBox}>
        <h2>Search for a Product</h2>
        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="Type a product name..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch(e);
              }
            }}
          />
          <button onClick={handleSearch}>Search</button>
        </div>

        {hasSearched && (
          result ? (
            <div className={styles.resultCard}>
              <h3>{result.name}</h3>
              {result.chemicals?.map((chem, index) => (
                <div key={index}>
                  <p><strong>Chemical {index + 1}:</strong> {chem.name}</p>
                  <p><strong>Info:</strong> {chem.info}</p>
                </div>
              ))}
              {result.alternatives?.length > 0 && (
                <>
                  <p><strong>Alternatives:</strong></p>
                  <ul>
                    {result.alternatives.map((alt, i) => (
                      <li key={i}>{alt}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          ) : (
            <div style={{ marginTop: "32px", color: "#000000ff", fontWeight: 500 }}>
              Not in our inventory yet, but we are working on it :)
            </div>
          )
        )}
      </div>

      {/* 💡 Awareness Cards */}
      <div className={styles.infoSection}>
        <div className={styles.card}>
          <h2>Why this website?</h2>
          <p>
            Every day, we use dozens of products that contain hidden chemicals.
            Some are harmless, others could affect your health. Our goal is to make you aware — in a fun, simple way.
          </p>
        </div>

        <div className={styles.card}>
          <h2>Why Should You Care?</h2>
          <p>
            Learning about chemicals helps you avoid products that may be harmful.
            Whether it's skincare, food, or cleaning supplies — knowledge is power.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;