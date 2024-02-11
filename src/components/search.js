import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RiSearchEyeLine } from "react-icons/ri";

export default function search({ onSubmit, onChange, value }) {
  return (
    <form className="search-form" onSubmit={onSubmit}>
      <input className='inputDim'
        id="search"
        type="text"
        placeholder="Enter username or email"
        onChange={onChange}
        value={value}
      />
      <button className='searchingButton' type="submit"><RiSearchEyeLine/></button>
    </form>
  );
}


