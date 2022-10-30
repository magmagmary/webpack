import React, { FC, memo, useMemo } from 'react';
import { parseISO, formatDistanceToNow } from 'date-fns';

const Date: FC<{ timestamp: string }> = ({ timestamp }) => {
  const time = useMemo<string>(() => {
    if (!timestamp) return '';
    const date = parseISO(timestamp);
    const timePeriod = formatDistanceToNow(date);
    return `${timePeriod} ago`;
  }, [timestamp]);

  return <span className='text-gray-500 text-xs'>{time}</span>;
};

export default memo(Date);
