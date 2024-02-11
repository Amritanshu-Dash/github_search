import React, { useState } from "react";
import './App.css';
import Heading from './components/heading';
import Search from './components/search';
import User from './components/user';

const API_URL = "https://api.github.com";

async function fetchResults(query) {
  try {
    const response = await fetch(`${API_URL}/search/users?q=${query}`);
    const json = await response.json();
    return json.items || [];
  } catch (e) {
    throw new Error(e);
  }
}


function App() {

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  function onSearchChange(event) {
    setQuery(event.target.value);
  }

  async function onSearchSubmit(event) {
    event.preventDefault();
    const results = await fetchResults(query);
    setResults(results);
  }


  return (

    <div className="app">

      <Heading />

      <main className="main">
        <div className="search">
          <Search
            onChange={onSearchChange}
            onSubmit={onSearchSubmit}
            value={query}
          />
        </div>
      </main>

      <div id="results">
        {results.map((user) => (
          <User
            key={user.login}
            avatar={user.avatar_url}
            url={user.html_url}
            username={user.login}
          />
        ))}
      </div>

    </div>

  );
}

export default App;
