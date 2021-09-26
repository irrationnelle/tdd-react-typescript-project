import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Login from "./Login";

describe("Login component", () => {
  beforeEach(() => {
    render(<Login />);
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

  test("should input id and password", () => {
    const idInput = screen.getByLabelText("id-input");
    fireEvent.change(idInput, { target: { value: "exampleid" } });

    const passwordInput = screen.getByLabelText("password-input");
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    const idText = screen.getByDisplayValue("exampleId");
    expect(idText).toHaveAttribute("aria-label", "id-input");
    const passwordText = screen.getByDisplayValue("password123");
    expect(passwordText).toBeInTheDocument();
  });
});
