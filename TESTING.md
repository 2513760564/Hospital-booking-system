# Testing Documentation

## Overview
This document describes the testing strategy for the Hospital Booking System frontend authentication module.

## Test Structure

### Unit Tests
- **Location**: `src/**/*.test.js`
- **Purpose**: Test individual components and utilities in isolation
- **Coverage**: Component rendering, user interactions, validation logic

### Test Files
- `Login.test.js` - Tests for login component
- `validation.test.js` - Tests for validation utilities

## Running Tests

```bash
# Run tests once
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage report
npm run test:coverage

# Run tests for CI
npm run test:ci
