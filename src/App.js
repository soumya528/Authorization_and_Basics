import "./App.css";
//import React from "react";
import React, { useState, useEffect, useReducer } from "react";

/*function SecretComponent() {
  return <h1>Secret Information for Authorized Personel Only</h1>;
}
function RegularComponent() {
  return <h1>Everyone can see this</h1>;
}
/*function App(props) {
  if (props.authorized) {
    return <SecretComponent />;
  } else {
    return <RegularComponent />;
  }
  return(
    <>
    {props.authorized?<SecretComponent />:<RegularComponent />};
    </>
);
}
function App({ authorized }) {
  return <>{authorized ? <SecretComponent /> : <RegularComponent />}</>;
}
*/

function App() {
  const [emotion, setEmotion] = useState("happy");
  //console.log(emotion);
  const [secondary, setSecondary] = useState("tired");
  useEffect(() => {
    console.log(`It's ${emotion} around here!`);
  }, [emotion]);
  useEffect(() => {
    console.log(`It's ${secondary} around here!`);
  }, [secondary]); //OR
  /*const [checked, setChecked] = useState(false);
  function toggle() {
    setChecked((checked) => !checked);
  }*/ const [
    checked,
    toggle
  ] = useReducer((checked) => !checked, false);
  return (
    <>
      <div>
        <h1>
          Current emotion is {emotion} and {secondary}.
        </h1>
        <button onClick={() => setEmotion("happy")}>Make me Happy</button>
        <button onClick={() => setSecondary("crabby")}>I am Crabby</button>
        <button onClick={() => setEmotion("fraustrated")}>Fraustrate me</button>
        <button onClick={() => setEmotion("enthusiatic")}>Enthusiase me</button>
      </div>
      {/*<div>
        <input
          type="checkbox"
          value={checked}
          onChange={() => setChecked((checked) => !checked)}
        />
        <p>{checked?"checked":"not checked"}</p>
      </div>*/}
      <div>
        <input type="checkbox" value={checked} onChange={toggle} />
        <p>{checked ? "checked" : "not checked"}</p>
      </div>
    </>
  );
}
export default App;
