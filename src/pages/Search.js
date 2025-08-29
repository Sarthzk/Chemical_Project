import React, { useState } from 'react';
import products from '../data/full_products_50.json';
import styles from './Search.module.css';

function Search() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState(null);

  const handleSearch = () => {
    const found = products.find(product =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setResult(found || null);
  };

  return (
    <div className={styles.container}>
      <h2>Search for a Product</h2>
      <input
        type="text"
        placeholder="Enter product name"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {result && (
        <div className={styles.resultBox}>
          <h3>{result.name}</h3>

          {result.chemicals && result.chemicals.length > 0 && (
            <div>
              {result.chemicals.map((chem, index) => (
                <div key={index} style={{ marginBottom: '12px' }}>
                  <p><strong>Chemical {index + 1}:</strong> {chem.name}</p>
                  <p><strong>Info:</strong> {chem.info}</p>
                </div>
              ))}
            </div>
          )}

          {result.alternatives && result.alternatives.length > 0 && (
            <div>
              <p><strong>Alternatives:</strong></p>
              <ul>
                {result.alternatives.map((alt, idx) => (
                  <li key={idx}>{alt}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {result === null && query && (
        <div style={{ marginTop: "32px", color: "#818cf8", fontWeight: 500 }}>
          Not in our inventory yet, but we are working on it.
        </div>
      )}
    </div>
  );
}

export default Search;