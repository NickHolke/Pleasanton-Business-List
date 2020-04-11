import React from 'react';
import { wrapper } from './Dropdown.module.css';

const Dropdown = ({ options, setType }) => (
  <select className={wrapper} id="types" onChange={(e) => setType(e.target.value)}>
    {options.map((option) => <option value={option}>{option}</option>)}
  </select>
)

export default Dropdown;