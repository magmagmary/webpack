import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import Author from './components/Author';
import Date from './components/Date';
import NewPost from './components/NewPost';
import Reactions from './components/Reactions';
import { getAllPosts } from './poseSelectors';
import { IPost } from './postInterface';

const Posts = () => {
  const posts: IPost[] = useSelector(getAllPosts);

  const reversedPosts = useMemo<IPost[]>(() => {
    return posts
      .slice()
      .sort((a: IPost, b: IPost) => b.date.localeCompare(a.date));
  }, [posts]);

  return (
    <div className='bg-gray-200 min-h-full'>
      <NewPost />
      <div className='my-5 flex flex-col gap-5'>
        {reversedPosts.map((item: IPost) => (
          <div
            key={item.id}
            className='border border-gray-700 rounded-lg p-5 flex flex-col '
          >
            <h2 className='text-2xl font-semibold mb-4'>{item.title}</h2>
            <p>{item.content}</p>
            <Author id={item.userId} />
            <Date timestamp={item.date} />
            <Reactions post={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
