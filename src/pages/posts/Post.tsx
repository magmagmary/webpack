import React, { useEffect } from 'react';
import { RootState } from '@src/store';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAllPosts, getPost } from './poseSelectors';

import { fetchAllPosts, fetchAllUsers } from './postSlice';
import { useTranslation } from 'react-i18next';
import PostCard from './components/PostCard';
import { useAppDispatch } from '@src/hooks/redux';

function Post() {
  const { postId } = useParams();
  const post = useSelector((state: RootState) => getPost(state, postId || ''));
  const posts = useSelector(getAllPosts);
  const dispatch = useAppDispatch();
  const { t: translate } = useTranslation();

  useEffect(() => {
    if (posts.length === 0) {
      dispatch(fetchAllUsers());
      dispatch(fetchAllPosts());
    }
  }, [posts]);

  return (
    <div className='center h-full'>
      {posts.length > 0 && post ? (
        <div className='w-1/2 bg-white rounded'>
          <PostCard post={post} />
        </div>
      ) : (
        <h1 className='text-4xl font-bold text-red-500 text-center'>
          !!! {translate('posts.empty')}
        </h1>
      )}
    </div>
  );
}

export default Post;
