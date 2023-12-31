"use client";
import {useState} from 'react';
import FeedList from './feed-list';

export default function FeedContainer() {
    const [cnt, setCnt] = useState(1);
    const pages = [];
    for(let i = 0; i < cnt; i++){
        pages.push(<FeedList index={i} key={i} />)
    }
  return (
    <div>
        {pages}
        <div className='flex justify-center'>
            <button type='submit' className='dark:bg-slate-900 bg-slate-400 p-2 rounded-lg self-center' onClick={() => setCnt(cnt + 1)}>Load More</button>
        </div>
    </div>
  )
}
