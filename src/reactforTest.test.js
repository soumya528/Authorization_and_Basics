import Rt from "./ReactforTest";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import React from "react";

afterEach(cleanup);
test("renders an h1", () => {
  const { getByText } = render(<Rt />);
  const h1 = getByText(/Hello React Testing Library/);
  expect(h1).toHaveTextContent("Hello React Testing Library");
});
