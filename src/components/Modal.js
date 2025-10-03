import React from 'react';
import styles from './Modal.module.css';

const Modal = ({ chemical, products, onClose }) => {
  if (!chemical) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <h2 className={styles.title}>{chemical.name}</h2>
        <p className={styles.info}>{chemical.detailedInfo}</p>
        <h3 className={styles.productsTitle}>Found in products like:</h3>
        <ul className={styles.productList}>
          {products.length > 0 ? (
            products.map((product, index) => (
              <li key={index} className={styles.productItem}>
                {product}
              </li>
            ))
          ) : (
            <li className={styles.productItem}>No specific products listed.</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Modal;