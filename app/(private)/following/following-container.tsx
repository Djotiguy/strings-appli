import { useState } from 'react';
import FollowingList from './following-list';

export default function FollowingContainer() {
    const [cnt, setCnt] = useState(0);
    const pages = []
    for(let i = 0; i < cnt; i++){
        pages.push(<FollowingList index={i} key={i}/>)
    }
  return (
    <div>
        {pages}
        <div className='flex justify-center w-full'>
            <button type='submit' onClick={() => setCnt(cnt + 1)} className='dark:bg-slate-900 bg-slate-400 p-2 rounded-lg'>Load More</button>
        </div>
    </div>
  )
}
