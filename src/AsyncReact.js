import "./App.css";
//import React from "react";
import React, { useState, useEffect, useReducer } from "react";

//https://api.github.com/users/soumya528
//Data From API https://jsonplaceholder.typicode.com/todos/1
//https://dog.ceo/api/breeds/image/random
function AsyncReact({ login }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (!login) return;
    setLoading(true);
    //fetch(`https://api.github.com/users/${login}`)
    fetch(`https://dog.ceo/api/breeds/image/${login}`)
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [login]);
  if (loading) return <h1>Loading....</h1>;
  if (error) return;
  <pre>{JSON.stringify(error, null, 2)}</pre>;
  if (!data) return null;
  //Default fo else
  return (
    <>
      <div>{JSON.stringify(data)}</div>
      <div>
        <p>
          <h3>{data.status}</h3>
          <img
            alt={data.message}
            src="https://images.dog.ceo//breeds//terrier-irish//n02093991_1895.jpg"
          />
        </p>
      </div>
    </>
  );
}

export default AsyncReact;
