import React from 'react';

function BodyText({ jsonValue, handleInputChange }) {
  return (
    <textarea
      placeholder="Raw JSON"
      name="jsonValue"
      value={jsonValue}
      onInput={handleInputChange}
    />
  );
}

export default BodyText;