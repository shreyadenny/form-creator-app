import React, { useState } from 'react';

function FormCreator() {
  const [formFields, setFormFields] = useState([]);

  const addTextField = () => {
    setFormFields([...formFields, { type: 'text', label: 'Text Field' }]);
  };

  const addTextareaField = () => {
    setFormFields([...formFields, { type: 'textarea', label: 'Textarea Field' }]);
  };

  return (
    <div>
      <h2>Form Creator</h2>
      <button onClick={addTextField}>Add Text Field</button>
      <button onClick={addTextareaField}>Add Textarea Field</button>
      <form>
        {formFields.map((field, index) => (
          <div key={index}>
            <label>{field.label}:</label>
            {field.type === 'text' && <input type="text" />}
            {field.type === 'textarea' && <textarea />}
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormCreator;
