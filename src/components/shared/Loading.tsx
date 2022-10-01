import React from 'react';

function Loading() {
  return (
    <div className='fixed w-screen h-screen inset-0 bg-black opacity-30 center z-50'>
      <div className='flex gap-5'>
        <div className=' flex justify-center items-center'>
          <div className='animate-spin rounded-full h-32 w-32 border-b-2 border-subtextlight'></div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
