import React, { useState } from 'react';
import FormField from './FormField';
import './QuestionForm.css'

function QuestionForm() {
  const [questionType, setQuestionType] = useState('');
  const [formTitle, setFormTitle] = useState('');
  const [formDescription, setFormDescription] = useState('');
  const [showQuestionOptions, setShowQuestionOptions] = useState(false);
  const [questionText, setQuestionText] = useState('');
  const [choices, setChoices] = useState([]); // Array to hold the choices
  const deleteChoice = (index) => {
    const updatedChoices = [...choices];
    updatedChoices.splice(index, 1);
    setChoices(updatedChoices);
  };


  const toggleQuestionOptions = () => {
    setShowQuestionOptions(!showQuestionOptions);
  };

  const addChoice = () => {
    setChoices([...choices, '']); // Add an empty choice
  };

  const updateChoice = (index, value) => {
    const updatedChoices = [...choices];
    updatedChoices[index] = value;
    setChoices(updatedChoices);
  };

  return (
    <div className='form-box'>
      <div>
        <label htmlFor="formTitle">Form Title:</label>
        <input
          type="text"
          id="formTitle"
          value={formTitle}
          onChange={(e) => setFormTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="formDescription">Form Description:</label>
        <textarea
          id="formDescription"
          value={formDescription}
          onChange={(e) => setFormDescription(e.target.value)}
        />
      </div>
      <div>
        <button onClick={toggleQuestionOptions}>Add Question</button>
      </div>
      {showQuestionOptions && (
        <div>
          <label>Question Text:</label>
          <input
            type="text"
            value={questionText}
            onChange={(e) => setQuestionText(e.target.value)}
          />
          <label>Select question type:</label>
          <select onChange={(e) => setQuestionType(e.target.value)}>
            <option value="">Select...</option>
            <option value="text">Short Answer</option>
            <option value="textarea">Textarea</option>
            <option value="multiple-choice">Multiple Choice</option>
            <option value="checkbox">Checkboxes</option>
          </select>
          {questionType === 'multiple-choice' && (
            <div>
              <label>Choices:</label>
              {choices.map((choice, index) => (
                <div key={index}>
                  <input
                    type="text"
                    value={choice}
                    onChange={(e) => updateChoice(index, e.target.value)}
                  />
                  <button onClick={() => deleteChoice(index)}>Delete</button>
                </div>
              ))}
              <button onClick={addChoice}>Add Choice</button>
              {/* Add required/optional toggle */}
              <label>
                <input type="checkbox" /> Required
              </label>
            </div>
          )}
          {questionType !== 'multiple-choice' && (
            <div>
              <FormField type={questionType} />
              {/* Add required/optional toggle */}
              <label>
                <input type="checkbox" /> Required
              </label>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default QuestionForm;
