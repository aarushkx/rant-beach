import React from "react";
import Post from "./Post";

function PostList({ posts }) {
    return (
        <div className="p-4 mt-16 mb-4">
            <h1 className="text-xl font-semibold text-center">
                Whine Zone: No Judgment
            </h1>
            <hr className="border-t-1 border-gray-200 mt-4" />
            {posts.map((post, index) => (
                <Post key={index} title={post.title} body={post.body} />
            ))}
        </div>
    );
}

export default PostList;
