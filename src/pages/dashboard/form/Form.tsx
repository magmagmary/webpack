import i18n from '@src/plugins/I18n';
import React, { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface IUser {
  email: string;
  password: string;
  confirmPassword: string;
}

const Form = () => {
  const { t: translate } = useTranslation();
  const [data, setData] = useState<IUser>({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState<IUser>({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [target, setTarget] = useState<string>('');
  const [formHasSubmitted, setFormHasSubmitted] = useState(false);

  useEffect(() => {
    if (formHasSubmitted)
      validateFields(
        target as keyof typeof data,
        data[target as keyof typeof data],
      );
  }, [data]);

  const validateEmail = (mail: string): boolean => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    return false;
  };

  const validatePassword = (pass: string): boolean => {
    return !pass || pass.length >= 5;
  };

  const validateConfirmPassword = () => {
    return data.confirmPassword === data.password;
  };

  const validateFields = (name: keyof typeof data, value?: string) => {
    const validationFunction =
      name === 'email'
        ? validateEmail
        : name === 'password'
        ? validatePassword
        : validateConfirmPassword;
    const _error = !value
      ? i18n.t('validation.required', { name })
      : !validationFunction(data[name])
      ? i18n.t(`validation.${name}`)
      : '';
    setError((prevState) => ({
      ...prevState,
      [name]: _error,
    }));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prevState) => ({ ...prevState, [name]: value }));
    setTarget(name);
  };

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    setFormHasSubmitted(true);
    (Object.keys(data) as Array<keyof typeof data>).map(
      (key: keyof typeof data) => {
        validateFields(key, data[key]);
      },
    );
  };

  return (
    <form onSubmit={onSubmit} className='w-1/2 2xl:w-1/3'>
      <h1 className='text-xl font-bold mb-8' data-testid='form-heading'>
        {translate('dashboard.form.title')}
      </h1>
      <div className='form-group'>
        <label htmlFor='email' className='form-label'>
          {translate('dashboard.form.email')}
        </label>
        <input
          type='text'
          className='form-control'
          id='email'
          name='email'
          value={data.email}
          onChange={handleChange}
        />
        {error['email'] && <p className='feedback-error'>{error['email']}</p>}
      </div>
      <div className='form-group'>
        <label htmlFor='password' className='form-label'>
          {translate('dashboard.form.password')}
        </label>
        <input
          type='text'
          className='form-control'
          id='password'
          name='password'
          value={data.password}
          onChange={handleChange}
        />
        {error['password'] && (
          <p className='feedback-error'>{error['password']}</p>
        )}
      </div>
      <div className='form-group'>
        <label htmlFor='confirmPassword' className='form-label'>
          {translate('dashboard.form.confirm_password')}
        </label>
        <input
          type='text'
          className='form-control'
          id='confirmPassword'
          name='confirmPassword'
          value={data.confirmPassword}
          onChange={handleChange}
        />
        {error['confirmPassword'] && (
          <p className='feedback-error'>{error['confirmPassword']}</p>
        )}
      </div>
      <button className='btn-primary text-base'>
        {translate('dashboard.form.submit')}
      </button>
    </form>
  );
};

export default Form;
