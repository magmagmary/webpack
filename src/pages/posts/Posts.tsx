import React, { useEffect, useMemo } from 'react';
import axiosClient from '@src/plugins/axios';
import { AppDispatch } from '@src/store';
import { useDispatch, useSelector } from 'react-redux';
import NewPost from './components/NewPost';
import PostCard from './components/PostCard';
import { getAllPosts } from './poseSelectors';
import { IPost } from './postInterface';
import { fetchAllPosts, fetchAllUsers } from './postSlice';

const Posts = () => {
  const posts: IPost[] = useSelector(getAllPosts);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    axiosClient.setupAxiosInterceptors();
    dispatch(fetchAllUsers());
    dispatch(fetchAllPosts());
  }, []);

  const reversedPosts = useMemo<IPost[]>(() => {
    return posts
      .slice()
      .sort((a: IPost, b: IPost) => b.date.localeCompare(a.date));
  }, [posts]);

  console.log('posts', posts);

  return (
    <div className='bg-gray-200 min-h-full'>
      <NewPost />
      <div className='my-5 flex flex-col gap-5'>
        {reversedPosts.map((post: IPost) => (
          <PostCard post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
