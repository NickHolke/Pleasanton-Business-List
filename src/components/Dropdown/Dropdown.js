import React from 'react';

const Dropdown = ({ options, setType }) => (
  <select id="types" onChange={(e) => setType(e.target.value)}>
    {options.map((option) => <option value={option}>{option}</option>)}
  </select>
)

export default Dropdown;