import React from "react";

const Button = ({ className, onClick }) => (
  <button className={`menu-icon ${className}`} onClick={onClick}>
    <svg
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="white"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h16m-7 6h7"
      />
    </svg>
  </button>
);

export default Button;
