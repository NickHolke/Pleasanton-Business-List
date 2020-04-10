import React from 'react';
import {data} from './Pleasanton_Business_List';
import Business from '../Business/Business';
import {wrapper} from './App.module.css';

function App() {
  return (
    <div className={wrapper}>
      {data.map((info) => <Business info={info}/>)}
    </div>
  );
}

export default App;
