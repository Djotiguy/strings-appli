"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Post({
  post,
  showEditBtn,
}: {
  post: PostI;
  showEditBtn?: boolean;
}) {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  const createdAt = new Date(post.created_at).toLocaleDateString(
    "fr-FR",
    options
  );
  return (
    <div className="flex flex-row">
      <div>
        {post.avatar && (
          <Link href={`/${post.username}`}>
            <Image
              src={post.avatar}
              width={50}
              height={50}
              alt={post.username}
              className="rounded-full mr-3"
            />
          </Link>
        )}
        {!post.avatar && (
          <div
            className="bg-slate-600 rounded-full mr-3"
            style={{ width: 50, height: 50 }}
          ></div>
        )}
      </div>

      <div className="flex flex-col max-w-xs">
        <div className="font-bold">
          <Link href={`/${post.username}`}> {post.username} </Link>
        </div>

        <div>{createdAt}</div>
        <div className="text-slate-600">{post.content}</div>
      </div>
      {showEditBtn && (
      <div className="text-right flex-grow">
        {" "}
        <Link href={`/profile/edit-post/${post.id}`} className="text-green-500">
          Edit
        </Link>{" "}
      </div>

      )}
    </div>
  );
}
