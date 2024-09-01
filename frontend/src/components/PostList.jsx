import React, { useState, useEffect } from "react";
import Post from "./Post";
import axios from "axios";
import { RANT_API_ENDPOINT } from "../endpoints.js";

function PostList() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get(`${RANT_API_ENDPOINT}/all`);
                setPosts(response.data);
                setLoading(false);
            } catch (error) {
                console.log(`${RANT_API_ENDPOINT}/all`);
                setError("Failed to fetch rants.");
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    return !loading ? (
        <div className="p-4 mt-16 mb-60">
            <h1 className="text-xl font-semibold text-center">
                Whine Zone: No Judgment
            </h1>

            <hr className="border-t-1 border-gray-200 mt-4" />

            {error ? (
                <p className="text-center text-red-600 mt-4">{error}</p>
            ) : posts.length > 0 ? (
                posts.map((post, index) => (
                    <Post key={index} title={post.title} body={post.body} />
                ))
            ) : (
                <p className="text-center mt-4">No rants available.</p>
            )}
        </div>
    ) : (
        <span className="loading loading-dots loading-lg"></span>
    );
}

export default PostList;
