import { render as rtlRender } from '@testing-library/react';
import React from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../plugins/I18nForTest';

const RenderWithi18n = (ui: React.ReactElement) => {
  return rtlRender(<I18nextProvider i18n={i18n}>{ui}</I18nextProvider>);
};

export default RenderWithi18n;
