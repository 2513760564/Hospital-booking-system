// Form validation utilities for authentication forms
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone) => {
  const phoneRegex = /^1[3-9]\d{9}$/;
  return phoneRegex.test(phone);
};

export const validatePassword = (password) => {
  return password.length >= 6;
};

export const validateName = (name) => {
  return name.trim().length >= 2;
};

export const validateDateOfBirth = (date) => {
  if (!date) return true; // Optional field
  const birthDate = new Date(date);
  const today = new Date();
  return birthDate < today;
};

// Comprehensive form validation
export const validateLoginForm = (formData) => {
  const errors = {};

  if (!formData.phone) {
    errors.phone = 'Phone number is required';
  } else if (!validatePhone(formData.phone)) {
    errors.phone = 'Please enter a valid phone number';
  }

  if (!formData.password) {
    errors.password = 'Password is required';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

export const validateRegisterForm = (formData) => {
  const errors = {};

  if (!formData.name) {
    errors.name = 'Full name is required';
  } else if (!validateName(formData.name)) {
    errors.name = 'Name must be at least 2 characters long';
  }

  if (!formData.phone) {
    errors.phone = 'Phone number is required';
  } else if (!validatePhone(formData.phone)) {
    errors.phone = 'Please enter a valid phone number';
  }

  if (!formData.password) {
    errors.password = 'Password is required';
  } else if (!validatePassword(formData.password)) {
    errors.password = 'Password must be at least 6 characters long';
  }

  if (formData.password !== formData.confirmPassword) {
    errors.confirmPassword = 'Passwords do not match';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

export const validateProfileForm = (formData) => {
  const errors = {};

  if (!formData.name) {
    errors.name = 'Full name is required';
  } else if (!validateName(formData.name)) {
    errors.name = 'Name must be at least 2 characters long';
  }

  if (!formData.phone) {
    errors.phone = 'Phone number is required';
  } else if (!validatePhone(formData.phone)) {
    errors.phone = 'Please enter a valid phone number';
  }

  if (formData.email && !validateEmail(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (formData.dateOfBirth && !validateDateOfBirth(formData.dateOfBirth)) {
    errors.dateOfBirth = 'Date of birth cannot be in the future';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};
