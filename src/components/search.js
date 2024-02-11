import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RiSearchEyeLine } from "react-icons/ri";

export default function search({ onSubmit, onChange, value }) {
  return (
    <form className="search-form" onSubmit={onSubmit}>
      <input
        id="search"
        type="text"
        placeholder="Enter username or email"
        onChange={onChange}
        value={value}
      />
      <div className='searchingButton'><button type="submit"><RiSearchEyeLine/></button></div>
    </form>
  );
}