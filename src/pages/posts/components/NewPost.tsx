import React, {
  ChangeEvent,
  memo,
  SyntheticEvent,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { AppDispatch, RootState } from '@src/store';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getAllUsers, getPost } from '../poseSelectors';
import { IPost, IUser } from '../postInterface';
import { addNewPost, editPost, fetchAllUsers } from '../postSlice';

function NewPost() {
  const { t: translate } = useTranslation();
  const { postId } = useParams();
  const post =
    useSelector((state: RootState) => getPost(state, postId || '')) ||
    ({
      title: '',
      content: '',
      userId: '',
    } as Partial<IPost>);
  const [data, setData] = useState<Partial<IPost>>(post);
  const [status, setStatus] = useState<'idle' | 'pending'>('idle');
  const users = useSelector(getAllUsers);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  useEffect(() => {
    if (users.length === 0) {
      dispatch(fetchAllUsers());
    }
  }, []);

  useEffect(() => {
    if (!post.id) {
      navigate('/posts/new');
    }
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setData((prevState) => ({ ...prevState, [name]: value }));
  };

  const isButtonDisabled = useMemo<boolean>(() => {
    return Object.values(data).some((i) => i === '') && status === 'idle';
  }, [data]);

  const onSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (!isButtonDisabled) {
      try {
        setStatus('pending');
        if (!post.id) {
          await dispatch(addNewPost(data)).unwrap();
        } else {
          await dispatch(editPost(data)).unwrap();
        }
        navigate('/posts');
      } catch (error) {
        console.log('errror', error);
      } finally {
        setStatus('idle');
      }
    }
  };

  const userOptions = useMemo<JSX.Element[]>(() => {
    return users.map((item: IUser) => (
      <option key={item.id} value={item.id}>
        {item.name}
      </option>
    ));
  }, [users]);

  return (
    <div className=' flex justify-center'>
      <form
        onSubmit={onSubmit}
        className='w-1/2 2xl:w-1/3 rounded-lg p-2 h-auto'
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
        <div className='flex justify-center gap-4'>
          <button
            className='btn btn-primary text-base'
            disabled={isButtonDisabled}
          >
            {status === 'idle' ? translate('posts.submit') : '...'}
          </button>
          <Link to='/posts' className='btn border border-gray-500 center'>
            {translate('posts.back')}
          </Link>
        </div>
      </form>
    </div>
  );
}

export default memo(NewPost);
