import React from "react";
import { useNavigate } from "react-router-dom";

const ReturnHomeButton = () => {
  const navigate = useNavigate();
  return (
    <button
      style={{
        position: "fixed",
        top: "30px",
        right: "32px",
        padding: "12px 20px",
        background: "#1e1e57ff",
        color: "#fff",
        border: "none",
        borderRadius: "8px",
        fontSize: "1rem",
        cursor: "pointer",
        boxShadow: "0 2px 8px rgba(23, 13, 161, 0.08)",
        zIndex: 101
      }}
      onClick={() => navigate("/")}
    >
       Home Page
    </button>
  );
};

export default ReturnHomeButton;