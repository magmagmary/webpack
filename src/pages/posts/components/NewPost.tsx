import React, {
  ChangeEvent,
  memo,
  SyntheticEvent,
  useMemo,
  useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../poseSelectors';
import { IPost, IUser } from '../postInterface';
import { postAction } from '../postSlice';

function NewPost() {
  const { t: translate } = useTranslation();
  const [data, setData] = useState<Partial<IPost>>({
    title: '',
    content: '',
    userId: '',
  });
  const users = useSelector(getAllUsers);
  const dispath = useDispatch();
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setData((prevState) => ({ ...prevState, [name]: value }));
  };

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    dispath(postAction.addPost(data));
  };

  const userOptions = useMemo<JSX.Element[]>(() => {
    return users.map((item: IUser) => (
      <option key={item.id} value={item.id}>
        {item.name}
      </option>
    ));
  }, [users]);

  const isButtonDisabled = useMemo<boolean>(() => {
    return Object.values(data).some((i) => i === '');
  }, [data]);

  return (
    <form
      onSubmit={onSubmit}
      className='w-1/2 2xl:w-1/3 border border-gray-600 rounded-lg p-2'
      role='form'
      data-testid='form'
    >
      <h1 className='text-xl font-bold mb-8' data-testid='form-heading'>
        {translate('posts.form')}
      </h1>
      <div className='form-group'>
        <label htmlFor='title' className='form-label'>
          {translate('posts.title')}
        </label>
        <input
          type='text'
          className='form-control'
          id='title'
          name='title'
          value={data.title}
          onChange={handleChange}
        />
      </div>
      <div className='form-group'>
        <label htmlFor='content' className='form-label'>
          {translate('posts.content')}
        </label>
        <input
          type='text'
          className='form-control'
          id='content'
          name='content'
          value={data.content}
          onChange={handleChange}
        />
      </div>
      <div className='form-group'>
        <label htmlFor='content' className='form-label'>
          {translate('posts.author')}
        </label>
        <select
          name='userId'
          id='userId'
          className='form-control'
          defaultValue={data.userId}
          onChange={handleChange}
        >
          <option value=''>---</option>
          {userOptions}
        </select>
      </div>
      <button className='btn btn-primary text-base' disabled={isButtonDisabled}>
        {translate('posts.submit')}
      </button>
    </form>
  );
}

export default memo(NewPost);
