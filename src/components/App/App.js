import React, { useState } from 'react';
import {data} from './Pleasanton_Business_List';
import Business from '../Business/Business';
import Search from '../Search/Search';
import {wrapper} from './App.module.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const searchChecker = (searchTerm, name) => {
    searchTerm = searchTerm.toLowerCase();
    name = name.toLowerCase();
    return name.includes(searchTerm);
  }

  return (
    <>
      <Search setSearchTerm={setSearchTerm}/>
      <div className={wrapper}>
      {data.map((info) => {
        if (searchChecker(searchTerm, info.Name)) {
          return <Business info={info}/>
        } 
      })}
      </div>
    </>
  );
}

export default App;
