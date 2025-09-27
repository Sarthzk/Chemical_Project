import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css"; 

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.brand}>
        <Link to="/">
          <span style={{ fontSize: '1.5rem', fontWeight: '700', color: '#ffffff' }}>
            Chem Aware 🧪
          </span>
        </Link>
      </div>
      <nav className={styles.navLinks}>
        <Link to="/">Home</Link>
        <Link to="/explore">Explore</Link>
        {/* <Link to="/search">Search</Link> */}
        <Link to="/survey">Survey</Link>
        <Link to="/quiz">Quiz</Link>
        <Link to="/knowledge">Knowledge</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
}