import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders input tag for id', () => {
  render(<App />);
  const idInput = screen.getByLabelText('id-input');
  expect(idInput).toBeInTheDocument();
})

test('renders input tag for password', () => {
  render(<App />);
  const idInput = screen.getByLabelText('password-input');
  expect(idInput).toBeInTheDocument();
})

test('renders button tag to submit', () => {
  render(<App />);
  const submitButton = screen.getByRole('button');
  expect(submitButton).toBeInTheDocument();
})
