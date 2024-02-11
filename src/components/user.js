import React from "react";

export default function User({ avatar, url, username }) {
    return (
      <div className="user">
        <img src={avatar} alt="Profile" height="200px" width="200px"/>
        <a href={url} target="_blank" rel="noopener noreferrer">
          {username}
        </a>
      </div>
    );
  }