import React, { useState, useRef, useEffect } from "react";

function Post({ title, body }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isOverflowing, setIsOverflowing] = useState(false);
    const contentRef = useRef(null);

    useEffect(() => {
        if (contentRef.current) {
            setIsOverflowing(
                contentRef.current.scrollHeight >
                    contentRef.current.clientHeight
            );
        }
    }, [body]);

    return (
        <div
            className="bg-base-100 mb-4 max-w-2xl mx-auto border-b border-gray-300 cursor-pointer"
            onClick={() => {
                setIsExpanded(!isExpanded);
            }}
        >
            <div
                ref={contentRef}
                className={`p-2 m-2 ${
                    isExpanded ? "" : "max-h-24 overflow-hidden"
                }`}
            >
                <h2 className="text-xl font-semibold mb-2">{title}</h2>
                <p className={`text-sm ${isExpanded ? "" : "truncate-lines"}`}>
                    {body}
                </p>
            </div>

            {isOverflowing && (
                <div className="flex justify-center text-gray-500 p-2">
                    <span onClick={() => setIsExpanded(!isExpanded)}>
                        {isExpanded ? (
                            <img src="/icons/up.svg" alt="Up" className="w-6" />
                        ) : (
                            <img
                                src="/icons/down.svg"
                                alt="Down"
                                className="w-6"
                            />
                        )}
                    </span>
                </div>
            )}
        </div>
    );
}

export default Post;
