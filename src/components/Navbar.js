import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className="nav-links">
      <Link to="/">Home</Link>
      <Link to="/explore">Explore</Link>
      <Link to="/search">Search</Link>
      <Link to="/survey">Survey</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}