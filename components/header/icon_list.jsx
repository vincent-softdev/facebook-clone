"use client"
import { useState } from "react";

const IconList = ({ icons }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleIconClick = (index) => {
        setActiveIndex(index); // Set the clicked icon as active
    };

    return (
        <ul className="flex">
            {
                icons.map((item, index) => (
                    <li key={index} onClick={() => handleIconClick(index)}
                        className={`flex-shrink-0 w-20 lg:w-28 flex justify-center cursor-pointer ${activeIndex === index ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-600 md:hover:bg-gray-100 md:hover:rounded-xl'}`}>
                        <item.icon type={activeIndex === index ? "solid" : undefined} className={`h-12 w-12 p-2`}/> {/* Ensure item is a React component */}
                    </li>
                ))
            }
        </ul>
    );
};

export default IconList;
