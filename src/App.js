import "./App.css";
import React from "react";

function SecretComponent() {
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
}*/
function App({ authorized }) {
  return <>{authorized ? <SecretComponent /> : <RegularComponent />}</>;
}
export default App;
