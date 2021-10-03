import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Login from "./Login";
import * as auth from "./api/auth";

describe("Login component", () => {
  beforeEach(() => {
    render(<Login />);
  });

  test("renders input tag for id", () => {
    const idInput = screen.getByLabelText("id-input");
    expect(idInput).toBeInTheDocument();
  });

  test("renders input tag for password", () => {
    const passwordInput = screen.getByLabelText("password-input");
    expect(passwordInput).toBeInTheDocument();
  });

  test("renders button tag to submit", () => {
    const submitButton = screen.getByRole("button");
    expect(submitButton).toBeInTheDocument();
  });

  test("should be available to click submit button with id and password", () => {
    const submitButton = screen.getByRole("button");
    expect(submitButton).toBeDisabled();

    const idInput = screen.getByLabelText("id-input");
    fireEvent.change(idInput, { target: { value: "sample_id" } });

    const passwordInput = screen.getByLabelText("password-input");
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    expect(submitButton).not.toBeDisabled();
  });

  test("should call signIn function after clicking submit button", () => {
    const mock = jest.spyOn(auth, "signIn");
    const idInput = screen.getByLabelText("id-input");
    fireEvent.change(idInput, { target: { value: "sample_id" } });

    const passwordInput = screen.getByLabelText("password-input");
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);

    expect(mock).toBeCalled();
  });
});
