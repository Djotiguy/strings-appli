import Post from "@/app/components/post";
import { sql } from "@/db";

async function getData(){
    const res = await sql(`
    select p.*, u.avatar, u.username from posts p 
    inner join users u on p.user_id = u.id order by created_at desc limit 10 
    `);
    return res.rows;
}

export default async function PublicRecentFeed(){
    const posts = await getData();
    return (
        <main>
            <h1 className="text-center text-4xl p-4">String</h1>
            <div className="dark:bg-slate-800 bg-slate-300 p-7 rounded-lg">
                <h2 className="p-4 text-xl">Recent posts from the community</h2>

                {posts.map((post) => {
                    return <Post key={post.id} post={post} />
                })}

            </div>
        </main>
    )
}