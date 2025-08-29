import React, { useState } from 'react';
import chemicalItems from '../data/chemicals'; // <- make sure this file exists
import styles from './Explore.module.css';    // <- make sure this path is correct

function Explore() {
  const [selected, setSelected] = useState(null);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Explore Common Household Products</h1>
      <p className={styles.subtitle}>
        Click on any item to learn what harmful chemical it may contain.
      </p>

      <div className={styles.grid}>
        {chemicalItems.map((item) => (
          <div
            key={item.id}
            className={styles.card}
            onClick={() => setSelected(item)}
          >
            <h3>{item.name}</h3>
            <p>{item.room}</p>
          </div>
        ))}
      </div>

      {selected && (
        <div className={styles.popup}>
          <h2>{selected.name}</h2>
          <p><strong>Chemical:</strong> {selected.chemical}</p>
          <p>{selected.info}</p>
          <button
            className={styles.closeButton}
            onClick={() => setSelected(null)}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}

export default Explore;