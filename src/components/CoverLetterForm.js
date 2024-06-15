import React, { useState } from 'react';
import Templates, { defaultTemplates } from './Templates';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import '../styles/CoverLetterForm.css';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

const CoverLetterForm = ({ onGenerateCoverLetter, darkMode, toggleDarkMode, generatedCoverLetter, firstName, lastName }) => {
  const [firstNameState, setFirstNameState] = useState('John');
  const [lastNameState, setLastNameState] = useState('Doe');
  const [companyName, setCompanyName] = useState('ABC Company');
  const [jobTitle, setJobTitle] = useState('Software Engineer');
  const [selectedTemplateId, setSelectedTemplateId] = useState(defaultTemplates[0].id);

  const handleGenerateCoverLetter = (e) => {
    e.preventDefault();
    onGenerateCoverLetter({
      firstName: firstNameState,
      lastName: lastNameState,
      companyName,
      jobTitle,
      selectedTemplateId
    });
  };

  const handleDownloadPDF = () => {
    const pageContent = document.querySelector('.page-display .ql-editor');
    const toolbar = document.querySelector('.ql-toolbar');
    if (toolbar) toolbar.style.display = 'none';

    html2canvas(pageContent).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('cover-letter.pdf');
      if (toolbar) toolbar.style.display = 'block';
    });
  };

  return (
    <div className={`cover-letter-form ${darkMode ? 'dark' : 'light'}`}>
      <div className="theme-switcher" onClick={toggleDarkMode}>
        <FontAwesomeIcon icon={darkMode ? faSun : faMoon} className="theme-icon" />
      </div>
      <form onSubmit={handleGenerateCoverLetter}>
        <label>
          First Name:
          <input type="text" value={firstNameState} onChange={(e) => setFirstNameState(e.target.value)} />
        </label>
        <label>
          Last Name:
          <input type="text" value={lastNameState} onChange={(e) => setLastNameState(e.target.value)} />
        </label>
        <label>
          Company Name:
          <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
        </label>
        <label>
          Job Title:
          <input type="text" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} />
        </label>
        <Templates
          onSelectTemplate={setSelectedTemplateId}
          selectedTemplateId={selectedTemplateId}
        />
        <div className="buttons">
          <button type="submit">Generate Cover Letter</button>
          <button type="button" onClick={handleDownloadPDF}>Download PDF</button>
        </div>
      </form>
    </div>
  );
};

export default CoverLetterForm;
