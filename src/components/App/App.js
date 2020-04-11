import React, { useState } from 'react';
import { data, types, statusOptions } from './Pleasanton_Business_List';
import Business from '../Business/Business';
import Search from '../Search/Search';
import Dropdown from '../Dropdown/Dropdown';
import { wrapper } from './App.module.css';

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
      <Search setSearchTerm={setSearchTerm}/>
      <Dropdown options={types} setType={setType} />
      <Dropdown options={statusOptions} setType={setStatus} />
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
