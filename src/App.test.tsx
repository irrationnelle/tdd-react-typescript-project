import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import * as auth from "./api/auth";
import App from "./App";

describe("App component", () => {
  beforeEach(() => {
    render(<App />);
  });

  test("renders main page after clicking submit button", () => {
    const idInput = screen.getByLabelText("id-input");
    fireEvent.change(idInput, { target: { value: "sample_id" } });

    const passwordInput = screen.getByLabelText("password-input");
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);

    const mainPageElement = screen.getByText(/main page/);
    expect(mainPageElement).toBeInTheDocument();
  });

  test("does not render main page with invalid account info after clicking submit button", () => {
    const idInput = screen.getByLabelText("id-input");
    fireEvent.change(idInput, { target: { value: "failing_id" } });

    const passwordInput = screen.getByLabelText("password-input");
    fireEvent.change(passwordInput, { target: { value: "invalid_password" } });

    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);

    const mainPageElement = screen.queryByText(/main page/);
    expect(mainPageElement).not.toBeInTheDocument();
  });
});
