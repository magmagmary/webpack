import React, { FC } from 'react';
import { IPost } from '../postInterface';
import Author from './Author';
import Reactions from './Reactions';
import Date from './Date';
import Trash from '@src/components/shared/icons/Trash';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@src/store';
import { deletePost } from '../postSlice';
import { Link } from 'react-router-dom';
import Edit from '@src/components/shared/icons/Edit';

const PostCard: FC<{ post: IPost }> = ({ post }) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className='border border-gray-700 rounded-lg p-5 flex flex-col relative hover:shadow-lg cursor-pointer'>
      <Link
        to={`/posts/${post.id}`}
        className='text-2xl font-semibold mb-4 truncate'
      >
        {post.title}
      </Link>
      <p className='truncate'>{post.content}</p>
      <Author id={post.userId} />
      <Date timestamp={post.date} />
      <Reactions post={post} />
      <div className='absolute bottom-3 ltr:right-3 rtl:left-3 flex gap-1'>
        <Link to={`/posts/edit/${post.id}`}>
          <Edit stroke='blue' className='w-8  cursor-pointer' />
        </Link>
        <Trash
          fill='red'
          className='w-4  cursor-pointer'
          onClick={() => dispatch(deletePost(post.id))}
        />
      </div>
    </div>
  );
};

export default PostCard;
