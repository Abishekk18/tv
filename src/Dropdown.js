import React, { useState } from 'react';

const Dropdown = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    onSelect(selectedValue);
  };

  return (
    <select value={selectedOption} onChange={handleSelectChange}>
      <option value="">Select a Channel</option>
      {options.map((option, index) => (
        <option key={index} value={option.value}>{option.label}</option>
      ))}
    </select>
  );
};

export default Dropdown;
