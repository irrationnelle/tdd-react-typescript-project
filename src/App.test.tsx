import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  beforeEach(() => {
    render(<App />);
  });

  test("renders main page after clicking submit button", () => {
    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);
    const mainPageElement = screen.getByText(/main page/);
    expect(mainPageElement).toBeInTheDocument();
  });
});
