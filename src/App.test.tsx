import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  beforeEach(() => {
    render(<App />);
  });

  test("renders input tag for id", () => {
    const idInput = screen.getByLabelText("id-input");
    expect(idInput).toBeInTheDocument();
  });

  test("renders input tag for password", () => {
    const idInput = screen.getByLabelText("password-input");
    expect(idInput).toBeInTheDocument();
  });

  test("renders button tag to submit", () => {
    const submitButton = screen.getByRole("button");
    expect(submitButton).toBeInTheDocument();
  });

  test("renders main page after clicking submit button", () => {
    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);
    const mainPageElement = screen.getByText(/main page/);
    expect(mainPageElement).toBeInTheDocument();
  });
});
