import { commonImages } from '@assets/svg';
import React, { FC, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

enum Languages {
  FA = 'fa',
  EN = 'en',
}

const LocaleSwitcher: FC<{ customClass: string }> = ({ customClass }) => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  //update documnet direction according to language
  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [currentLang]);

  //change locale of website
  const changeLocale = () => {
    i18n.changeLanguage(language);
  };

  //get current language
  const language = useMemo(() => {
    return Object.values(Languages).find((l) => l !== currentLang) || '';
  }, [currentLang]);

  return (
    <p
      className={`flex items-center gap-1 cursor-pointer text-primary uppercase text-sm ${customClass}`}
      onClick={changeLocale}
    >
      <span className='text-primary text-sm uppercase '>{language}</span>
      <img src={commonImages['world']} alt='world' />
    </p>
  );
};

export default LocaleSwitcher;
