import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { RANT_API_ENDPOINT } from "../endpoints.js";

function CreateButton() {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [error, setError] = useState("");
    const [isVisible, setIsVisible] = useState(true);
    const lastScrollTop = useRef(0);

    const handleCreatePost = async () => {
        try {
            const response = await axios.post(`${RANT_API_ENDPOINT}/create`, {
                title,
                body,
            });

            if (response.status === 201) {
                setTitle("");
                setBody("");
                document.getElementById("create-modal").close();
            }
        } catch (error) {
            setError(
                error.response?.data?.error ||
                    "Failed to create rant. Please try again."
            );
            console.error("Error creating rant:", error);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > lastScrollTop.current) setIsVisible(false);
            else setIsVisible(true);

            lastScrollTop.current = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={`fixed bottom-12 w-full flex justify-center transition-opacity duration-300 ${
                isVisible ? "opacity-100" : "opacity-0"
            }`}
        >
            <button
                onClick={() => {
                    document.getElementById("create-modal").showModal();
                }}
                className="btn btn-primary btn-circle text-white shadow-lg"
            >
                <img src="/icons/create.svg" alt="Create" className="w-6 h-6" />
            </button>

            <dialog id="create-modal" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg mb-4 text-center">
                        Let the Ranting Begin!
                    </h3>

                    <hr className="border-t-1 border-gray-200 mb-2" />

                    <form className="flex flex-col gap-4">
                        <div className="form-control">
                            <label className="label justify-center">
                                <span className="label-text font-bold">
                                    Label Your Lament
                                </span>
                            </label>

                            <textarea
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Write the title here"
                                rows={1}
                                className="textarea textarea-primary w-full"
                            ></textarea>
                        </div>
                        <div className="form-control">
                            <label className="label justify-center">
                                <span className="label-text font-bold">
                                    Spill the Tea
                                </span>
                            </label>

                            <textarea
                                value={body}
                                onChange={(e) => setBody(e.target.value)}
                                placeholder="Write the body here"
                                className="textarea textarea-primary w-full"
                            ></textarea>
                        </div>

                        {error && (
                            <p className="text-red-500 text-center">{error}</p>
                        )}

                        <div className="flex justify-center mt-4">
                            <button
                                type="button"
                                onClick={handleCreatePost}
                                className="btn btn-primary"
                            >
                                Create
                            </button>
                        </div>
                    </form>
                </div>

                <form method="dialog" className="modal-backdrop">
                    <button
                        type="button"
                        onClick={() =>
                            document.getElementById("create-modal").close()
                        }
                    ></button>
                </form>
            </dialog>
        </div>
    );
}

export default CreateButton;
