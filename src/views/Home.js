import React, { useState } from 'react';
import FormField from '../components/FormField';

function QuestionForm() {
  const [questionType, setQuestionType] = useState('text');

  return (
    <div>
      <label>Select question type:</label>
      <select onChange={(e) => setQuestionType(e.target.value)}>
        <option value="text">Short Answer</option>
        <option value="textarea">Textarea</option>
        <option value="multiple-choice">Multiple Choice</option>
        <option value="checkbox">Checkboxes</option>
      </select>
      <FormField type={questionType} />
      {/* Add required/optional toggle */}
      <label>
        <input type="checkbox" /> Required
      </label>
    </div>
  );
}

export default QuestionForm;
