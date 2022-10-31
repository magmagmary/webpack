import React, { FC } from 'react';
import { IPost } from '../postInterface';
import Author from './Author';
import Reactions from './Reactions';
import Date from './Date';
import Trash from '@src/components/shared/icons/Trash';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@src/store';
import { deletePost } from '../postSlice';

const PostCard: FC<{ post: IPost }> = ({ post }) => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className='border border-gray-700 rounded-lg p-5 flex flex-col relative '>
      <h2 className='text-2xl font-semibold mb-4'>
        {post.title} {post.id}
      </h2>
      <p>{post.content}</p>
      <Author id={post.userId} />
      <Date timestamp={post.date} />
      <Reactions post={post} />
      <Trash
        fill='red'
        className='w-5 absolute top-5 ltr:right-5 rtl:left-5 cursor-pointer'
        onClick={() => dispatch(deletePost(post.id))}
      />
    </div>
  );
};

export default PostCard;
