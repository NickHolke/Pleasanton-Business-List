import React from 'react';

const Search = ({setSearchTerm}) => (
    <input 
      placeholder="Search by name here" 
      onChange={(e)=> setSearchTerm(e.target.value)} 
    />
)

export default Search;
