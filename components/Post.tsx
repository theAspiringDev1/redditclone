import {
    ArrowDownIcon,
    ArrowUpIcon,
    BookmarkAltIcon,
    BookmarkIcon,
    ChatAltIcon,
    DotsHorizontalIcon,
    GiftIcon,
    ShareIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import React from "react";
import TimeAgo from "react-timeago";

import Avatar from "./Avatar";

type Props = {
    post: Post;
};

function Post({ post }: Props) {
    return (
        <Link href={`/post/${post.id}`}>
            <div className="rounded-md flex cursor-pointer border boder-gray-300 bg-white shadow-sm hover:border hover:border-gray-600">
                {/* VOTE */}
                <div className="flex flex-col items-center justify-start rounded-l-md bg-gray-50 p-4 text-gray-400">
                    <ArrowUpIcon className="voteButtons hover:text-red-500" />
                    <p className="text-xs text-black font-bold">0</p>
                    <ArrowDownIcon className="voteButtons hover:text-blue-500" />
                </div>

                <div className="p-3 pb-1">
                    {/* HEADER */}
                    <div className="flex items-center space-x-2">
                        <Avatar seed={post.subreddit[0].topic} />
                        <p className="text-xs text-gray-400">
                            <Link
                                href={`/subreddit/${post.subreddit[0].topic}`}
                            >
                                <span className="font-bold text-black hover:text-blue-400 hover:underline">
                                    r/{post.subreddit[0].topic}{" "}
                                </span>
                            </Link>
                            Posted by u/{post.username}{" "}
                            <TimeAgo date={post.created_at} />
                        </p>
                    </div>
                    {/* BODY */}
                    <div className="py-4">
                        <h2 className="text-xl font-semibold">{post.title}</h2>
                        <p className="mt-2 text-sm font-light">{post.body}</p>
                    </div>
                    {/* IMAGE */}
                    <img src={post.image} alt="" className="w-full" />
                    {/* FOOTER */}
                    <div className="flex space-x-4 text-gray-400">
                        <div className="postButtons">
                            <ChatAltIcon className="h-6 w-6" />
                            <p className="">{post.comments.length} Comments</p>
                        </div>
                        <div className="postButtons">
                            <GiftIcon className="h-6 w-6" />
                            <p className="hidden sm:inline">Award</p>
                        </div>
                        <div className="postButtons">
                            <ShareIcon className="h-6 w-6" />
                            <p className="hidden sm:inline">Share</p>
                        </div>
                        <div className="postButtons">
                            <BookmarkIcon className="h-6 w-6" />
                            <p className="hidden sm:inline"> Save</p>
                        </div>
                        <div className="postButtons">
                            <DotsHorizontalIcon className="h-6 w-6" />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default Post;
