import CB from "./Checkbox";
import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);
test("selecting Textbox", () => {
  const { getByLabelText } = render(<CB />);
  const checkbox = getByLabelText(/not checked/);
  fireEvent.click(checkbox);
  expect(checkbox.checked).toEqual(true);
});
