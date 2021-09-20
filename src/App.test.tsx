import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  beforeEach(() => {
    render(<App />);
  })

  test('renders input tag for id', () => {
    const idInput = screen.getByLabelText('id-input');
    expect(idInput).toBeInTheDocument();
  })

  test('renders input tag for password', () => {
    const idInput = screen.getByLabelText('password-input');
    expect(idInput).toBeInTheDocument();
  })

  test('renders button tag to submit', () => {
    const submitButton = screen.getByRole('button');
    expect(submitButton).toBeInTheDocument();
  })
})
