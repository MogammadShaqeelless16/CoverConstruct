import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../styles/PageDisplay.css';

const PageDisplay = ({ coverLetter, onCoverLetterChange, firstName, lastName }) => {
  return (
    <div className="page-display">
      <h1>Cover Letter</h1>
      <div className="cover-letter-content">
        <ReactQuill value={coverLetter} onChange={onCoverLetterChange} />
      </div>
      <div className="signature">
        <p>Kind Regards,</p>
        <p>{firstName} {lastName}</p>
      </div>
    </div>
  );
};

export default PageDisplay;
