import React from 'react';

const defaultTemplates = [
  {
    id: '1',
    name: 'Formal Letter',
    content: 'Dear {{firstName}} {{lastName}},\n\nI am writing to apply for the position at {{companyName}}...',
  },
  {
    id: '2',
    name: 'Modern Letter',
    content: 'To Whom It May Concern,\n\nI am excited to apply for the position of {{jobTitle}} at {{companyName}}...',
  },
  {
    id: '3',
    name: 'Creative Letter',
    content: 'Hey {{firstName}},\n\nI hope this letter finds you well. I am eager to join {{companyName}} as a {{jobTitle}}...',
  },
];

const Templates = ({ onSelectTemplate, selectedTemplateId }) => {
  return (
    <div className="templates">
      <h2>Choose a Template</h2>
      <select value={selectedTemplateId} onChange={(e) => onSelectTemplate(e.target.value)}>
        {defaultTemplates.map(template => (
          <option key={template.id} value={template.id}>{template.name}</option>
        ))}
      </select>
    </div>
  );
};

export { defaultTemplates };
export default Templates;
