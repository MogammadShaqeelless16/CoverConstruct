import React from 'react';
import '../styles/CoverLetterStructure.css';

const CoverLetterStructure = ({ coverLetter, styleType, theme }) => {
  return (
    <div className={`cover-letter ${styleType} ${theme}`}>
      <h2>Cover Letter</h2>
      <p>{coverLetter}</p>
    </div>
  );
};

export default CoverLetterStructure;
