import {
  validateEmail,
  validatePhone,
  validatePassword,
  validateName,
  validateLoginForm,
  validateRegisterForm
} from './validation';

describe('Validation Utilities', () => {
  describe('validateEmail', () => {
    test('validates correct email formats', () => {
      expect(validateEmail('test@example.com')).toBe(true);
      expect(validateEmail('user.name@domain.co.uk')).toBe(true);
    });

    test('rejects invalid email formats', () => {
      expect(validateEmail('invalid-email')).toBe(false);
      expect(validateEmail('@domain.com')).toBe(false);
      expect(validateEmail('user@')).toBe(false);
    });
  });

  describe('validatePhone', () => {
    test('validates Chinese phone numbers', () => {
      expect(validatePhone('13800138000')).toBe(true);
      expect(validatePhone('13912345678')).toBe(true);
    });

    test('rejects invalid phone numbers', () => {
      expect(validatePhone('1234567890')).toBe(false);
      expect(validatePhone('23800138000')).toBe(false);
      expect(validatePhone('1380013800')).toBe(false);
    });
  });

  describe('validateLoginForm', () => {
    test('validates correct login data', () => {
      const formData = {
        phone: '13800138000',
        password: 'password123'
      };

      const result = validateLoginForm(formData);
      expect(result.isValid).toBe(true);
      expect(result.errors).toEqual({});
    });

    test('returns errors for invalid login data', () => {
      const formData = {
        phone: '',
        password: ''
      };

      const result = validateLoginForm(formData);
      expect(result.isValid).toBe(false);
      expect(result.errors.phone).toBeDefined();
      expect(result.errors.password).toBeDefined();
    });
  });

  describe('validateRegisterForm', () => {
    test('validates correct registration data', () => {
      const formData = {
        name: 'John Doe',
        phone: '13800138000',
        password: 'password123',
        confirmPassword: 'password123'
      };

      const result = validateRegisterForm(formData);
      expect(result.isValid).toBe(true);
      expect(result.errors).toEqual({});
    });

    test('returns errors for password mismatch', () => {
      const formData = {
        name: 'John Doe',
        phone: '13800138000',
        password: 'password123',
        confirmPassword: 'differentpassword'
      };

      const result = validateRegisterForm(formData);
      expect(result.isValid).toBe(false);
      expect(result.errors.confirmPassword).toBeDefined();
    });
  });
});
