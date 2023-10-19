import {useState, FormEvent} from 'react'
import { useSWRConfig } from 'swr'

export default function Form() {
    const {mutate} = useSWRConfig();
    const [post, setPost] = useState("");

    async function handleSubmit(e: FormEvent){
        e.preventDefault();

        const res = await fetch("/api/posts", {
            method: "POST",
            body: JSON.stringify({content: post}),
        });

        if(res.ok){
            setPost("");
            mutate((key) => typeof key === "string" && key.startsWith("api/posts") );
        }
    }
  return (
    <form onSubmit={handleSubmit}>
        <textarea 
        placeholder='What happenning ?'
        className='bg-gray-700 p-2 rounded-lg w-full my-2'
        value={post}
        onChange={(e) => setPost(e.target.value)}
         />
         <button
        className='bg-slate-900 p-2 rounded-lg self-center'
        type='submit'
         >Post</button>
    </form>
  )
}
