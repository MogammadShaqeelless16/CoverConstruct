import React, { useState } from 'react';
import CoverLetterForm from './components/CoverLetterForm';
import PageDisplay from './components/PageDisplay';
import { useTheme } from './ThemeContext';
import './App.css';
import { defaultTemplates } from './components/Templates'; // Adjust the path as per your project structure

const App = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const [generatedCoverLetter, setGeneratedCoverLetter] = useState('');
  const [firstName, setFirstName] = useState('John');
  const [lastName, setLastName] = useState('Doe');

  const handleGenerateCoverLetter = ({ firstName, lastName, companyName, jobTitle, selectedTemplateId }) => {
    const selectedTemplate = defaultTemplates.find(t => t.id === selectedTemplateId);
    if (selectedTemplate) {
      let templateContent = selectedTemplate.content;
      templateContent = templateContent.replace('{{firstName}}', firstName);
      templateContent = templateContent.replace('{{lastName}}', lastName);
      templateContent = templateContent.replace('{{companyName}}', companyName);
      templateContent = templateContent.replace('{{jobTitle}}', jobTitle);

      setGeneratedCoverLetter(templateContent);
      setFirstName(firstName);
      setLastName(lastName);
    }
  };

  const handleCoverLetterChange = (value) => {
    setGeneratedCoverLetter(value);
  };

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <div className="sidebar">
        <CoverLetterForm
          onGenerateCoverLetter={handleGenerateCoverLetter}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          generatedCoverLetter={generatedCoverLetter}
        />
      </div>
      <div className="content">
        <PageDisplay
          coverLetter={generatedCoverLetter}
          onCoverLetterChange={handleCoverLetterChange}
          firstName={firstName}
          lastName={lastName}
        />
      </div>
    </div>
  );
};

export default App;
