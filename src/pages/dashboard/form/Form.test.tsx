import '@testing-library/jest-dom';
import React from 'react';
import Form from './Form';
import { fireEvent, screen } from '@testing-library/react';
import RenderWithi18n from '../../../components/shared/RenderWithi18n';

test('home component render correctly', async () => {
  RenderWithi18n(<Form />);
  const item = screen.getByText('Form With Test');
  expect(item).toBeInTheDocument();
});

test('inputs should be initially empty', () => {
  RenderWithi18n(<Form />);
  const emailInputElement = screen.getByRole('textbox', {
    name: 'Email addreess',
  });
  const passwordInputElement = screen.getByRole('textbox', {
    name: 'Password',
  });
  const confirmPasswordInputElement = screen.getByRole('textbox', {
    name: 'Conform Password',
  });
  expect(emailInputElement).toHaveAttribute('value', '');
  expect(passwordInputElement).toHaveAttribute('value', '');
  expect(confirmPasswordInputElement).toHaveAttribute('value', '');
});

test('should be able to type an email', () => {
  RenderWithi18n(<Form />);
  const _email = 'm@m.co';
  const emailInputElement = screen.getByRole('textbox', {
    name: 'Email addreess',
  });
  fireEvent.change(emailInputElement, { target: { value: _email } });
  expect(emailInputElement).toHaveAttribute('value', _email);
});

test('should be able to type an password', () => {
  RenderWithi18n(<Form />);
  const _pass = 'Arduino';
  const passwordInputElement = screen.getByRole('textbox', {
    name: 'Password',
  });
  fireEvent.change(passwordInputElement, { target: { value: _pass } });
  expect(passwordInputElement).toHaveAttribute('value', _pass);
});

test('should be able to type an confirm password', () => {
  RenderWithi18n(<Form />);
  const _pass = 'Arduino';
  const confirmPasswordInputElement = screen.getByRole('textbox', {
    name: 'Conform Password',
  });
  fireEvent.change(confirmPasswordInputElement, { target: { value: _pass } });
  expect(confirmPasswordInputElement).toHaveAttribute('value', _pass);
});

test('should show error message when no data has entered', () => {
  RenderWithi18n(<Form />);
  const btnElement = screen.getByText('submit');
  fireEvent.click(btnElement);
  const errors = screen.getAllByText(/field is required/i);
  expect(errors.length).toBe(3);
});

test('should show validation error message for non-corect email type', () => {
  RenderWithi18n(<Form />);
  const emailInputElement = screen.getByRole('textbox', {
    name: 'Email addreess',
  });
  fireEvent.change(emailInputElement, { target: { value: 'magmag' } });
  const btnElement = screen.getByText('submit');
  fireEvent.click(btnElement);
  const errors = screen.getByText(/The email format is not correct/i);
  expect(errors).toBeInTheDocument();
});

test('should show validation error message for password less than 4 char', () => {
  RenderWithi18n(<Form />);
  const passwordInputElement = screen.getByRole('textbox', {
    name: 'Password',
  });
  fireEvent.change(passwordInputElement, { target: { value: '000' } });
  const btnElement = screen.getByText('submit');
  fireEvent.click(btnElement);
  const errors = screen.getByText(
    /Password should contain 5 charachter at least/i,
  );
  expect(errors).toBeInTheDocument();
});

test('should show validation error message for unequal password and confirm password', () => {
  RenderWithi18n(<Form />);
  const passwordInputElement = screen.getByRole('textbox', {
    name: 'Password',
  });
  const confirmPasswordInputElement = screen.getByRole('textbox', {
    name: 'Conform Password',
  });
  fireEvent.change(passwordInputElement, { target: { value: '00000' } });
  fireEvent.change(confirmPasswordInputElement, {
    target: { value: '11111' },
  });
  const btnElement = screen.getByText('submit');
  fireEvent.click(btnElement);
  const errors = screen.getByText(/The passwords does not match/i);
  expect(errors).toBeInTheDocument();
});
