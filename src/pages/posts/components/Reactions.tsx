import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { IPost, IReaction } from '../postInterface';
import { postAction } from '../postSlice';

const reactionEmoji = {
  thumbsUp: '👍',
  wow: '😮',
  heart: '❤️',
  rocket: '🚀',
  coffee: '☕',
};

const Reactions: FC<{ post: IPost }> = ({ post }) => {
  const dispath = useDispatch();
  return (
    <div className='flex items-center gap-2 my-3'>
      {(Object.keys(post.reactions) as (keyof IReaction)[]).map(
        (item: keyof IReaction) => (
          <button
            key={item}
            onClick={() =>
              dispath(postAction.reactToPost({ id: post.id, reaction: item }))
            }
          >
            {reactionEmoji[item]}
            {post.reactions[item]}
          </button>
        ),
      )}
    </div>
  );
};

export default Reactions;
