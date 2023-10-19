import React from 'react'
import useSWR from 'swr';
import Post from './post';

export default function PostList({
    index,
    username,

} : {
    index: number,
    username: string,
}) 

{
  const { data, error, isLoading } = useSWR(
    () => "/api/posts?page=" + index + "&username=" + username
  );
  if (error) return <div>Failed to load</div>;
  if (isLoading || !data) return <div>Loading...</div>;

  return(
    <ul>
        {data.data.map((post: PostI) => {
            return(
                <li key={post.username}className='my-5'>
                    <Post post={post} />
                </li>
            )
        })}
    </ul>
  )

}
