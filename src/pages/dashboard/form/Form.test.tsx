import '@testing-library/jest-dom';
import React from 'react';
import Form from './Form';
import { fireEvent, screen } from '@testing-library/react';
import RenderWithi18n from '../../../components/shared/RenderWithi18n';

beforeEach(() => {
  RenderWithi18n(<Form />);
});

const WriteInInputElement = (selector: string, value: string): HTMLElement => {
  const element = screen.getByRole('textbox', {
    name: selector,
  });
  fireEvent.change(element, { target: { value } });
  return element;
};

const submitForm = () => {
  const btnElement = screen.getByText('submit');
  fireEvent.click(btnElement);
};

describe('Happy Path', () => {
  test('home component render correctly', async () => {
    const item = screen.getByText('Form With Test');
    expect(item).toBeInTheDocument();
  });

  test('inputs should be initially empty', () => {
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
    const _email = 'm@m.co';
    const element = WriteInInputElement('Email addreess', _email);
    expect(element).toHaveAttribute('value', _email);
  });

  test('should be able to type an password', () => {
    const _pass = 'Arduino';
    const element = WriteInInputElement('Password', _pass);
    expect(element).toHaveAttribute('value', _pass);
  });

  test('should be able to type an confirm password', () => {
    const _pass = 'Arduino';
    const element = WriteInInputElement('Conform Password', _pass);
    expect(element).toHaveAttribute('value', _pass);
  });

  test('should not display any error when tha input data is correct', () => {
    WriteInInputElement('Email addreess', 'magmag@mg.com');
    WriteInInputElement('Password', '11111');
    WriteInInputElement('Conform Password', '11111');
    submitForm();
    const form = screen.getByTestId('form');
    const errors = form.querySelectorAll('.feedback-error');
    expect(errors.length).toBe(0);
  });
});

describe('Error handling', () => {
  test('should show error message when no data has entered', () => {
    submitForm();
    expect(screen.getAllByText(/field is required/i).length).toBe(3);
  });

  test('should show validation error message for incorrect email type', () => {
    WriteInInputElement('Email addreess', 'magmag');
    submitForm();
    expect(
      screen.getByText(/The email format is not correct/i),
    ).toBeInTheDocument();
  });

  test('should show validation error message for password which is less than 4 char', () => {
    WriteInInputElement('Password', '000');
    submitForm();
    expect(
      screen.getByText(/Password should contain 5 charachter at least/i),
    ).toBeInTheDocument();
  });

  test('should show validation error message for unequal password and confirm password', () => {
    WriteInInputElement('Password', '00000');
    WriteInInputElement('Conform Password', '11111');
    submitForm();
    expect(
      screen.getByText(/The passwords does not match/i),
    ).toBeInTheDocument();
  });
});
