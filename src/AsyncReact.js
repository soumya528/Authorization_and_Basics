import "./App.css";
//import React from "react";
import React, { useState, useEffect, useReducer } from "react";

//https://api.github.com/users/soumya528
//Data From API
function AsyncReact({ login }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then(setData);
  }, []);
  if (data) {
    return <div>{JSON.stringify(data)}</div>;
  }
  return (
    <>
      <p>No User Available</p>
    </>
  );
}

export default AsyncReact;
