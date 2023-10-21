"use client";

import useSWR from "swr";
import UserPageHeader from "./user-page-header";
import PostContainer from "@/app/components/post-container";

export default function UserPage({params} : {params: {username: string}}){

    

return (
    <div>
        <UserPageHeader username={params.username} />
        <PostContainer username={params.username} />

    </div>
)
}