import React from "react";

export default function SaveIcon({ onClick }) {
  return (
    <button onClick={onClick} title="Save" className="ml-2 text-green-600 hover:text-green-800">
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    </button>
  );
} 