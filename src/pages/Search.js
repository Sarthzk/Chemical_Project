import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import products from '../data/full_products_50.json';
import styles from './Search.module.css';

function Search() {
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [searchAttempted, setSearchAttempted] = useState(false);

  useEffect(() => {
    const q = searchParams.get('q');
    if (q) {
      setQuery(q);
      const foundProducts = products.filter(product =>
        product.name.toLowerCase().includes(q.toLowerCase())
      );
      setResults(foundProducts);
      setSearchAttempted(true);
    } else {
      setResults([]);
      setSearchAttempted(false);
    }
  }, [searchParams]);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Search Results</h1>
          {searchAttempted && query && (
            <p className={styles.subtitle}>Showing results for "{query}"</p>
          )}
        </div>

        {searchAttempted && results.length > 0 && (
          <div className={styles.resultsGrid}>
            {results.map((result, index) => (
              <div key={index} className={styles.resultCard}>
                <h3 className={styles.cardTitle}>{result.name}</h3>
                <div className={styles.cardBody}>
                  <div className={styles.productDetails}>
                    {result.chemicals && result.chemicals.length > 0 && (
                      <div className={styles.cardSection}>
                        <h4 className={styles.sectionTitle}>Chemicals</h4>
                        {result.chemicals.map((chem, chemIndex) => (
                          <div key={chemIndex} className={styles.chemicalInfo}>
                            <p><strong>{chem.name}</strong></p>
                            <p>{chem.info}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {result.alternatives && result.alternatives.length > 0 && (
                      <div className={styles.cardSection}>
                        <h4 className={styles.sectionTitle}>Alternatives</h4>
                        <ul className={styles.alternativesList}>
                          {result.alternatives.map((alt, altIdx) => (
                            <li key={altIdx}>{alt}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  <img src={result.image} alt={result.name} className={styles.productImage} />
                </div>
              </div>
            ))}
          </div>
        )}

        {searchAttempted && results.length === 0 && (
          <div className={styles.noResults}>
            <p>No products found for "{query}".</p>
          </div>
        )}
      </div>
    </main>
  );
}

export default Search;