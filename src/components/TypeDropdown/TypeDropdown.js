import React from 'react';

const TypeDropdown = ({ setType }) => (
  <select id="types" onChange={(e) => setType(e.target.value)}>
    <option value="All">All</option>
    <option value="Autoshop">Autoshop</option>
    <option value="Counseling/Therapy">Counseling/Therapy</option>
    <option value="Healthcare">Healthcare</option>
    <option value="Local services">Local services</option>
    <option value="Real Esate">Real Estate</option>
    <option value="Restaurant">Restaurant</option>
    <option value="Retail">Retail</option>
    <option value="Veterinarian">Veterinarian</option>
  </select>
)

export default TypeDropdown;