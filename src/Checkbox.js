import React, { useReducer } from "react";

function Checked() {
  const [checked, toggle] = useReducer((checked) => !checked, false);
  return (
    <>
      <label htmlFor="checkbox">{checked ? "checked" : "not checked"}</label>
      <input id="checkbox" type="checkbox" value={checked} onChange={toggle} />
    </>
  );
}
export default Checked;
