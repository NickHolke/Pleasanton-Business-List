import React, { useState } from 'react';
import { data, types, statusOptions, } from './Pleasanton_Business_List';
import Business from '../Business/Business';
import Search from '../Search/Search';
import Dropdown from '../Dropdown/Dropdown';
import { wrapper, topSection, title, optionTitle } from './App.module.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [type, setType] = useState('All');
  const [status, setStatus] = useState('All');

  const searchChecker = (searchTerm, name) => {
    searchTerm = searchTerm.toLowerCase();
    name = name.toLowerCase();
    return name.includes(searchTerm);
  }

  const typeChecker = (selected, type) => {
    if (selected === 'All') return true;
    return selected === type;
  }

  const statusChecker = (selected, status) => {
    if (selected === 'All') return true;
    return status.includes(selected);
  }

  return (
    <>
      <h1 className={title}>Pleasanton Business List</h1>
      <div className={topSection}>
        <Search setSearchTerm={setSearchTerm}/>
        <span className={optionTitle}>Type:</span><Dropdown options={types} setType={setType} />
        <span className={optionTitle}>Status:</span><Dropdown options={statusOptions} setType={setStatus} />
        </div>
        <div className={wrapper}>
      {data.map((info) => {
        if (searchChecker(searchTerm, info.Name) && typeChecker(type, info.Type) && statusChecker(status, info.Status)) {
          return <Business info={info}/>
        } 
      })}
      </div>
    </>
  );
}

export default App;
