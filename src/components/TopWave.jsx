import React from "react";

const TopWave = () => (
  <div style={{ width: "100%", overflow: "hidden", position: "absolute", top: 0, left: 0, zIndex: 0 }}>
    <svg viewBox="0 0 1440 180" width="100%" height="120" preserveAspectRatio="none" style={{ display: "block" }}>
      <defs>
        <linearGradient id="waveGradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#a5b4fc" />
          <stop offset="100%" stopColor="#818cf8" />
        </linearGradient>
      </defs>
      <path
        d="M0,80 C360,180 1080,0 1440,100 L1440,0 L0,0 Z"
        fill="url(#waveGradient)"
      >
        <animate
          attributeName="d"
          dur="8s"
          repeatCount="indefinite"
          values="
            M0,80 C360,180 1080,0 1440,100 L1440,0 L0,0 Z;
            M0,100 C400,0 1040,180 1440,80 L1440,0 L0,0 Z;
            M0,80 C360,180 1080,0 1440,100 L1440,0 L0,0 Z
          "
        />
      </path>
    </svg>
  </div>
);

export default TopWave;