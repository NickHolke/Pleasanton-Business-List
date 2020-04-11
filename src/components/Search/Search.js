import React, {useState} from 'react';

const Search = ({setSearchTerm}) => {
  const changeHandler = (e) => {
    setSearchTerm(e.target.value);
  }

  return (
    <input 
      placeholder="Search by name here" 
      onChange={changeHandler} 
    />
  )
}

export default Search;