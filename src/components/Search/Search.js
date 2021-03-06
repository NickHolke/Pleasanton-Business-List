import React from 'react';
import { wrapper } from './Search.module.css';

const Search = ({setSearchTerm}) => (
    <input className={wrapper}
      placeholder="Search by name" 
      onChange={(e)=> setSearchTerm(e.target.value)} 
    />
)

export default Search;
