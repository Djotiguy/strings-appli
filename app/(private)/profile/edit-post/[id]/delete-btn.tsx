import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export default function DeleteBtn({post}: {post: PostI}) {
    const router = useRouter();
    const [state, setState] = useState({showConfirm: false});
    
        async function handleDelete(){
            const res = await fetch('/api/posts/' + post.id, {
                method: 'DELETE',
            });

            if(res.ok){
                router.push('/profile');
            }
        }

        function handleClick(){
            // const newState = Object.assign({}, state, {showConfirm: !state.showConfirm});
            setState({...state, showConfirm: !state.showConfirm});
        }

        return (
          <>
          {!state.showConfirm && (
            <button className='text-red-600' type='submit' onClick={handleClick}>Delete post</button>
          )}
            {state.showConfirm && (
                <div>
                    <p>Are you sure you to delete this post ?</p>
                    <div className='flex flex-row gap-10'>
                        <button className='text-red-500' onClick={handleDelete} type='submit'>Yes</button>
                        <button className='text-blue-500' type='submit' onClick={handleClick}>No</button>
                    </div>
                </div>
            )}
          </>
        )
};

