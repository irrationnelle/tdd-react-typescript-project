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

  test("should be available to click submit button with id and password", () => {
    const submitButton = screen.getByRole("button");
    expect(submitButton).toBeDisabled();
  });
});
