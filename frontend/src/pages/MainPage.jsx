import React from "react";
import { Header, Footer, PostList, CreateButton } from "../components/index.js";

const MainPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                <PostList />
            </main>
            <CreateButton />
            <Footer />
        </div>
    );
};

export default MainPage;
