import React from 'react';

const Logo = () => (
  <svg
    className="h-6 w-6 text-primary"
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    style={{ height: '1.5rem', width: '1.5rem', color: '#13a4ec' }}
  >
    <path
      d="M12 2L2 7L12 12L22 7L12 2Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    ></path>
    <path
      d="M2 17L12 22L22 17"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    ></path>
    <path
      d="M2 12L12 17L22 12"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    ></path>
  </svg>
);

export default Logo;