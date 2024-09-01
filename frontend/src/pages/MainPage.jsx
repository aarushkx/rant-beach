import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PostList from "../components/PostList";
import CreateButton from "../components/CreateButton";

const MainPage = () => {
    const [posts, setPosts] = useState([
        {
            title: "My First Rant",
            body: "This is the content of my first rant. This is the of my first rant.",
        },
        {
            title: "Another Rant",
            body: "Here is another rant about something.",
        },
        {
            title: "My First Rant",
            body: "This is the content of my first rant.",
        },
        {
            title: "Another Rant",
            body: "Here is another rant about something.",
        },
        {
            title: "My First Rant",
            body: "This is the content of my first rant.",
        },
        {
            title: "Another Rant",
            body: "Here is another rant about something.",
        },
        {
            title: "My First Rant",
            body: "This is the content of my first rant.",
        },
        {
            title: "Another Rant",
            body: "Here is another rant about something.",
        },
        {
            title: "My First Rant",
            body: "This is the content of my first rant.",
        },
        {
            title: "Another Rant",
            body: "Here is another rant about something.",
        },
    ]);

    const handleCreate = () => {
        // TODO: Logic to create a new post
        console.log("Create button clicked");
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                <PostList posts={posts} />
            </main>
            <CreateButton />
            <Footer />
        </div>
    );
};

export default MainPage;
