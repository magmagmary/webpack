import React, { FC, memo } from 'react';
import Date from './Date';
import Trash from '@src/components/shared/icons/Trash';
import { IPost } from '@src/pages/posts/postInterface';
import Edit from '@src/components/shared/icons/Edit';
import { useDeletePostMutation, useUpdatePostMutation } from '../postApi';

const PostCard: FC<{ post: IPost }> = ({ post }) => {
  const [updatePost] = useUpdatePostMutation();
  const [deletePost] = useDeletePostMutation();

  const handlePost = (type: 'delete' | 'edit') => {
    if (type === 'delete') {
      deletePost(post.id);
      return;
    }

    const _post: IPost = { ...post, title: 'MagMag' };
    updatePost(_post);
  };

  return (
    <div className='border border-gray-700 rounded-lg p-5 flex flex-col relative hover:shadow-lg cursor-pointer'>
      <h3 className='text-2xl font-semibold mb-4 truncate'>{post.title}</h3>
      <p className='truncate'>{post.content}</p>
      <Date timestamp={post.date} />
      <div className='absolute bottom-3 ltr:right-3 rtl:left-3 flex gap-1'>
        <Trash
          className='w-4  cursor-pointer fill-red-600'
          onClick={() => handlePost('delete')}
        />
        <Edit
          className='w-4  cursor-pointer fill-blue-600'
          onClick={() => handlePost('edit')}
        />
      </div>
    </div>
  );
};

export default memo(PostCard);
