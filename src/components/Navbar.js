import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';
import Logo from './Logo';

export default function Navbar() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === 'Enter' && query.trim() !== '') {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <Logo />
          <h2 className={styles.brandText}>Know Your Chemicals</h2>
        </div>
        <nav className={styles.navLinks}>
          <Link to="/">Home</Link>
          <Link to="/explore">Explore</Link>
          <Link to="/survey">Survey</Link>
          <Link to="/quiz">Quiz</Link>
          <Link to="/knowledge">Knowledge</Link>
          <Link to="/about">About</Link>
        </nav>
        <div className={styles.actions}>
          <div className={styles.searchContainer}>
            <span className="material-symbols-outlined">search</span>
            <input
              className={styles.searchInput}
              placeholder="Search for a product..."
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleSearch}
            />
          </div>
          <button className={styles.menuButton}>
            <span className="sr-only">Open main menu</span>
            <svg
              aria-hidden="true"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6h16M4 12h16m-7 6h7"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}