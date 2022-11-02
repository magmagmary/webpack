import React, { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import PostCard from './components/PostCard';
import { getAllPosts } from './poseSelectors';
import { IPost } from './postInterface';
import { fetchAllPosts } from './postSlice';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import _ from 'lodash';
import { useAppDispatch } from '@src/hooks/redux';

const Posts = () => {
  const posts: IPost[] = useSelector(getAllPosts);

  const dispatch = useAppDispatch();
  const { t: translate } = useTranslation();

  useEffect(() => {
    if (posts.length === 0) dispatch(fetchAllPosts());
  }, []);

  console.log('posts', posts);

  const reversedPosts = useMemo<IPost[]>(() => {
    return posts
      .slice()
      .sort((a: IPost, b: IPost) => b.date.localeCompare(a.date));
  }, [posts]);

  return (
    <div>
      <Link to='/posts/new' className='btn btn-primary py-2 px-4 text-xl'>
        {translate('posts.form')}
      </Link>
      <div className='my-5 gap-5 grid grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6'>
        {reversedPosts.map((post: IPost) => (
          <PostCard post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
