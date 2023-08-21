import React from 'react';

function FormField({ type }) {
  if (type === 'text') {
    return <input type="text" />;
  } else if (type === 'textarea') {
    return <textarea />;
  } else if (type === 'multiple-choice') {
    // Render multiple choice options
  } else if (type === 'checkbox') {
    // Render checkboxes
  }

  return null;
}

export default FormField;
