import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useAddPostMutation, useGetpostsQuery } from './postApi';
import Loading from '@src/components/shared/Loading';
import PostCard from './components/PostCard';
import { IPost } from '@src/pages/posts/postInterface';

const Posts = () => {
  const { data: posts, error, isLoading } = useGetpostsQuery();
  const [addPost] = useAddPostMutation();
  const { t: translate } = useTranslation();

  const addPosthandler = useCallback(() => {
    const _post: Partial<IPost> = {
      title: 'Test nanoid',
      content: 'content nanoid',
      userId: '',
    };
    addPost(_post);
  }, []);

  if (isLoading) return <Loading />;

  return (
    <div>
      <button className=' btn btn-primary' onClick={addPosthandler}>
        {translate('posts.form')}
      </button>
      <div className='my-5 gap-5 grid grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6'>
        {posts &&
          posts.map((post: IPost) => <PostCard post={post} key={post.id} />)}
      </div>
    </div>
  );
};

export default Posts;
