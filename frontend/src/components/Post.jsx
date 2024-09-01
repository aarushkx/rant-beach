import React, { useState } from "react";

function Post({ title, body }) {
    return (
        <div className="bg-base-100 mb-4 max-w-2xl mx-auto border-b border-gray-300">
            <div className="p-8">
                <h2 className="text-xl font-semibold mb-2">{title}</h2>
                <p>{body}</p>
            </div>
        </div>
    );
}

export default Post;
