import React, { FC, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getAllUsers } from '../poseSelectors';

const Author: FC<{ id: string }> = ({ id }) => {
  const users = useSelector(getAllUsers);
  const { t: translate } = useTranslation();
  const userName = useMemo(() => {
    const _user = users.find((u) => u.id === id);
    return _user ? _user.name : translate('posts.unknown');
  }, [users, id]);

  return (
    <span className='text-gray-500 text-sm'>
      {translate('posts.author')}:{userName}
    </span>
  );
};

export default Author;
