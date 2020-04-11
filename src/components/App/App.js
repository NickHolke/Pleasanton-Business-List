import React, { useState } from 'react';
import {data} from './Pleasanton_Business_List';
import Business from '../Business/Business';
import Search from '../Search/Search';
import TypeDropdown from '../TypeDropdown/TypeDropdown';
import {wrapper} from './App.module.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [type, setType] = useState('All');

  const searchChecker = (searchTerm, name) => {
    searchTerm = searchTerm.toLowerCase();
    name = name.toLowerCase();
    return name.includes(searchTerm);
  }

  const typeChecker = (selected, type) => {
    if (selected === 'All') return true;
    return selected === type;
  }

  return (
    <>
      <Search setSearchTerm={setSearchTerm}/>
      <TypeDropdown setType={setType} />
      <div className={wrapper}>
      {data.map((info) => {
        if (searchChecker(searchTerm, info.Name) && typeChecker(type, info.Type)) {
          return <Business info={info}/>
        } 
      })}
      </div>
    </>
  );
}

export default App;
