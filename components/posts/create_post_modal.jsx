'use client'

import { Icons } from "@/public/icons";
import { IconImages } from "@/public/icon_images";
import { useState, useRef, useEffect } from "react";

const CreatePostModal = ({ profile, closeModal }) => {
    const [text, setText] = useState("");
    const [textLine, setTextLine] = useState(0);
    const [fontSize, setFontSize] = useState(30); // Initial font size
    const [modalHeight, setModalHeight] = useState(400); // Initial modal height
    const [maxModalHeightReached, setMaxModalHeightReached] = useState(false);
    const textAreaRef = useRef(null);

    // Function to adjust font size and modal height based on input height
    const adjustSize = () => {
        if (textAreaRef.current) {
            const textAreaHeight = textAreaRef.current.scrollHeight;
            
            // Split the textarea value by newlines and count wrapped lines
            const lines = text.split("\n").reduce((totalLines, line) => {
                const lineLength = line.length;
                const charsPerLine = Math.floor(textAreaRef.current.clientWidth / (fontSize * 0.6)); // Estimate characters per line based on font size
                const wrappedLines = Math.ceil(lineLength / charsPerLine);
                return totalLines + wrappedLines;
            }, 0);

            setTextLine(lines)

            // Adjust font size based on the scrollHeight of the textarea
            if (lines <= 3) {
                setFontSize(30); // Reset to initial size when there's very little text
                console.log(`line 1`)
            }
            if (lines > 1 && lines <= 5) {
                setFontSize(24); // Medium size for moderate text
                console.log(`line 2`)
            }
            if (lines > 5) {
                setFontSize(16); // Smaller size for a lot of text
                console.log(`line 3`)
            }

            console.log(lines)
            setModalHeight(400 + lines*fontSize);

            // Dynamically increase modal height by 50px until it reaches 90vh
            // if (textAreaHeight > inputHeight && !maxModalHeightReached) {
            //     const newModalHeight = currentModalHeight + 50;
            //     const maxModalHeight = window.innerHeight * 0.9; // 90vh

            //     if (newModalHeight <= maxModalHeight) {
            //         setModalHeight(newModalHeight);
            //     } else {
            //         setMaxModalHeightReached(true); // Stop resizing when reaching 90vh
            //     }
            // } else if (textAreaHeight < inputHeight && modalHeight > 200) {
            //     // Reduce the modal height if the text decreases and the modal is larger than its original size
            //     const newModalHeight = Math.max(currentModalHeight - 50, 200); // Ensure it doesn't go below initial height
            //     setModalHeight(newModalHeight);
            //     setMaxModalHeightReached(false); // Allow resizing again
            // }
        }
    };

    useEffect(() => {
        adjustSize(); // Adjust size whenever the text changes
    }, [text]);

    return (
        <div className="fixed inset-0 py-14 px-6 z-50 flex items-center justify-center">
            {/* Modal background */}
            <div>
                <div
                    className="absolute inset-0 bg-gray-200 opacity-70"
                    onClick={closeModal}
                />
            </div>
            {/* Modal content */}
            <div
                className="relative z-10 flex flex-col flex-grow bg-white py-4 rounded-lg shadow-lg max-w-lg w-full h-fit"
                style={{ height: `fit-content`, maxHeight: "90vh", overflow: "hidden" }} // Dynamically set modal height
            >
                {/* Close button */}
                <div className="block">
                    <div className="flex justify-center pb-4 w-full">
                        <p className="font-bold text-[1.25rem]">Create post</p>
                    </div>
                    <button
                        className="absolute flex justify-center rounded-full items-center top-2 pl-1 pt-1 w-9 h-9 bg-[#e4e6eb] right-2 text-gray-500"
                        onClick={closeModal}
                    >
                        <IconImages.Close className="w-6 h-6 opacity-45" />
                    </button>
                </div>
                <hr className="border-none h-[1px] bg-gray-200" />
                <div id="model_content" className={`p-4 pb-0`}>
                    <div id="content_user-detail flex flex-row">
                        <div
                            style={{ backgroundImage: `url(${profile.image})` }}
                            className="inline-block h-10 w-10 p-2 rounded-full bg-gray-200 bg-cover bg-center bg-no-repeat cursor-pointer hover:opacity-80 active:opacity-60"
                        ></div>
                        <div className="inline-block ml-3">
                            <p className="font-semibold">{profile.name}</p>
                            <p className="flex items-center gap-1 font-semibold text-[13px] bg-gray-200 py-1 px-2 rounded-lg">
                                <Icons.FriendIcon className="w-3 h-3" type="solid" />
                                <span>Friends</span>
                                <i
                                    style={{
                                        backgroundImage: `url(https://static.xx.fbcdn.net/rsrc.php/v3/yV/r/D15K5HtLH2o.png)`,
                                        backgroundPosition: `0px -822px`,
                                        backgroundSize: `25px 835px`,
                                    }}
                                    className="w-3 h-3 bg-no-repeat inline-block"
                                ></i>
                            </p>
                        </div>
                    </div>
                    <textarea
                        ref={textAreaRef}
                        className={`w-full h-full mt-3 p-2 bg-transparent min-h-[200px] border-none outline-none resize-none ${
                            maxModalHeightReached ? "overflow-y-scroll" : ""
                        }`}
                        rows={2}
                        placeholder="What's on your mind?"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        style={{ fontSize: `${fontSize}px`, maxHeight: "68vh", lineHeight: "1.2", height: `${textLine * fontSize + 50}px`}} // Adjust textarea styles
                    />
                    <button className="w-full mt-3 bg-gray-400 p-1 px-3 rounded-md font-semibold opacity-30">
                        Post
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreatePostModal;
