import React, { useState, useEffect, useRef } from 'react'; // Added useEffect and useRef
import products from '../data/full_products_50.json';
import styles from './Explore.module.css';

// 1. Data Processing Function: Groups products by category and extracts unique chemicals
const getCategoryData = (products) => {
  const categoryMap = {};
  // Define rich descriptions for categories for the new aesthetic
  const categoryDescriptions = {
    "Personal Care": "Chemicals commonly found in hygiene products like soaps, shampoos, and lotions. Key concerns include skin irritation, endocrine disruption, and chronic dryness.",
    "Household Cleaning": "Ingredients used in cleaning supplies (detergents, toilet cleaners, surface sprays). They are often corrosive, respiratory irritants, or environmentally hazardous.", // Renamed for clarity
    "Packaged Food": "Additives, preservatives (like BHA/TBHQ), and excessive ingredients in packaged snacks and meals. Concerns include metabolic issues and high sodium intake.", // Renamed and refined scope
    "Beverages": "Colorings, artificial sweeteners, acids (like Phosphoric Acid), and stimulants (like Caffeine) in soft drinks and energy drinks. Major concerns are dental erosion and excessive stimulation.", // NEW Category
    "Baby Care": "Substances used in products for infants (shampoos, diapers). Ingredients are strictly scrutinized for skin sensitivity, allergic reactions, and ingestion risk.",
    "Pet Care": "Ingredients in pet foods and treatments. Often scrutinized for controversial preservatives (like BHA) and the inclusion of low-quality fillers."
  };

  products.forEach(product => {
    let category = product.category;
    
    // Logic to assign products to the new categories
    if (category === "Food & Beverages") {
        if (product.name === "Coca-Cola" || product.name === "Pepsi" || product.name === "Red Bull Energy Drink" || product.name === "Tropicana 100% Orange Juice") {
            category = "Beverages";
        } else {
            category = "Packaged Food";
        }
    } else if (category === "Household") {
        category = "Household Cleaning";
    }

    if (!categoryMap[category]) {
      categoryMap[category] = {
        description: categoryDescriptions[category] || 'Information about chemicals common in this category.',
        chemicals: new Map(),
      };
    }

    // Collect all unique chemicals and their associated info for the category
    product.chemicals.forEach(chem => {
      const chemKey = chem.name;
      if (!categoryMap[category].chemicals.has(chemKey)) {
        categoryMap[category].chemicals.set(chemKey, chem.info);
      }
    });
  });

  // Convert Map to Array for easier rendering
  const categoryList = Object.keys(categoryMap).map(categoryName => ({
    name: categoryName,
    ...categoryMap[categoryName],
    chemicals: Array.from(categoryMap[categoryName].chemicals, ([name, info]) => ({ name, info })),
  }));
  
  return categoryList;
};


function Explore() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categoryData, setCategoryData] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // 1. Create a ref to target the popup element
  const popupRef = useRef(null); 

  // Run data processing once on mount
  useEffect(() => {
    try {
      const data = getCategoryData(products);
      setCategoryData(data);
    } catch (e) {
      console.error("Failed to process chemical data:", e);
      setCategoryData([]);
    } finally {
      setLoading(false);
    }
  }, []); 

  // 2. Scroll to the popup whenever selectedCategory state changes (i.e., a card is clicked)
  useEffect(() => {
    if (selectedCategory && popupRef.current) {
      popupRef.current.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' // Aligns the top of the element with the top of the viewport
      });
    }
  }, [selectedCategory]);

  if (loading) {
    // Simple loading state to prevent blank screen
    return (
      <div className={styles.container} style={{textAlign: 'center', paddingTop: '100px'}}>
        <h1 className={styles.title} style={{color: '#4c51bf'}}>Loading Data...</h1>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Explore Chemicals by Product Category</h1>
      <p className={styles.subtitle}>
        Select a category below to see common harmful chemicals found in those items.
      </p>

      <div className={styles.grid}>
        {categoryData.length > 0 ? (
          categoryData.map((category) => (
            <div
              key={category.name}
              className={styles.card}
              onClick={() => setSelectedCategory(category)}
            >
              <h3>{category.name}</h3>
              {/* Display first sentence of the description on the card */}
              <p>{category.description.split('.')[0] + '.'}</p>
            </div>
          ))
        ) : (
          <p className={styles.errorText}>No product categories found or failed to load data.</p>
        )}
      </div>

      {selectedCategory && (
        <div ref={popupRef} className={styles.popup}> {/* 3. Attach the ref to the popup */}
          <h2>{selectedCategory.name} Overview</h2>
          <p className={styles.popupDescription}>
            {selectedCategory.description}
          </p>

          <div className={styles.chemicalList}>
            <h3>Key Chemicals to Watch For:</h3>
            {selectedCategory.chemicals.map((chem, index) => (
              <div key={index} className={styles.chemicalItem}>
                <h4>{chem.name}</h4>
                <p>{chem.info}</p>
              </div>
            ))}
          </div>

          <button
            className={styles.closeButton}
            onClick={() => setSelectedCategory(null)}
          >
            Close Overview
          </button>
        </div>
      )}
    </div>
  );
}

export default Explore;