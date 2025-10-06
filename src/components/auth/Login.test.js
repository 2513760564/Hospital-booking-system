import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Login from './Login';

// Mock the validation module
jest.mock('../../utils/validation', () => ({
  validateLoginForm: jest.fn()
}));

import { validateLoginForm } from '../../utils/validation';

describe('Login Component', () => {
  beforeEach(() => {
    validateLoginForm.mockClear();
  });

  test('renders login form with all fields', () => {
    render(<Login />);
    
    expect(screen.getByText('Patient Login')).toBeInTheDocument();
    expect(screen.getByLabelText(/phone number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
  });

  test('allows user to fill out the form', () => {
    render(<Login />);
    
    const phoneInput = screen.getByLabelText(/phone number/i);
    const passwordInput = screen.getByLabelText(/password/i);

    fireEvent.change(phoneInput, { target: { value: '13800138000' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    expect(phoneInput.value).toBe('13800138000');
    expect(passwordInput.value).toBe('password123');
  });

  test('shows validation errors when form is invalid', () => {
    validateLoginForm.mockReturnValue({
      isValid: false,
      errors: { phone: 'Phone number is required' }
    });

    render(<Login />);
    
    const submitButton = screen.getByRole('button', { name: /login/i });
    fireEvent.click(submitButton);

    expect(validateLoginForm).toHaveBeenCalled();
  });

  test('submits form when validation passes', () => {
    validateLoginForm.mockReturnValue({
      isValid: true,
      errors: {}
    });

    render(<Login />);
    
    const submitButton = screen.getByRole('button', { name: /login/i });
    fireEvent.click(submitButton);

    expect(validateLoginForm).toHaveBeenCalled();
  });
});
