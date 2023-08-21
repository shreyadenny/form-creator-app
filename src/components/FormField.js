import React from 'react';

function FormField({ type }) {
  if (type === 'text') {
    return <input type="text" />;
  } else if (type === 'textarea') {
    return <textarea />;
  } else if (type === 'multiple-choice') {
  } else if (type === 'checkbox') {
  }

  return null;
}

export default FormField;
