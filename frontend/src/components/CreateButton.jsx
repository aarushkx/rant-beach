import React from "react";

function CreateButton() {
    return (
        <div className="fixed bottom-12 w-full flex justify-center">
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
                                placeholder="Write the body here"
                                className="textarea textarea-primary w-full"
                            ></textarea>
                        </div>
                        <div className="flex justify-center mt-4">
                            <button
                                type="button"
                                onClick={() => {
                                    // TODO: Handle creation logic here
                                    document
                                        .getElementById("create-modal")
                                        .close();
                                }}
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
                    >
                    </button>
                </form>
            </dialog>
        </div>
    );
}

export default CreateButton;
