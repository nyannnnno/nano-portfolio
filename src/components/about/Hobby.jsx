import React, { useRef, useState } from 'react';

const images = [
    { src: 'hobby1.png', description: 'coding then pain and suffer' },
    { src: 'hobby2.png', description: 'Ars longa, Vita brevis believer' },
    { src: 'hobby3.png', description: 'a newbie chess player who loves to move a knight' },
    { src: 'hobby4.png', description: 'japanese food hunter' },
    { src: 'hobby5.png', description: 'top viewer for karaoke online on youtube' },
    { src: 'hobby6.png', description: 'photographer for cat only' },
    { src: 'hobby7.png', description: 'a baker that bakes something that looks like a meteorite' },
];

const Hobby = () => {
    const scrollContainerRef = useRef(null);

    const scrollNext = () => {
        const container = scrollContainerRef.current;
        const scrollAmount = container.offsetWidth;
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    };

    const scrollPrev = () => {
        const container = scrollContainerRef.current;
        const scrollAmount = container.offsetWidth;
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    };

    return (
        <section className="m-10">
            <h2 className="text-3xl text-center mb-8">hobbies</h2>
            <div className="relative w-full">
                <button
                    className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-[#fface2] p-2 rounded-full shadow-md hover:bg-[#f894d5] z-20"
                    onClick={scrollPrev}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 19.5L8.25 12l7.5-7.5"
                        />
                    </svg>
                </button>

                <div
                    ref={scrollContainerRef}
                    className="w-full overflow-x-auto no-scrollbar"
                >
                    <ul className="flex space-x-4 p-4">
                        {images.map((image, index) => (
                            <li
                                key={index}
                                className="flex-shrink-0 relative group cursor-pointer"
                            >
                                <img
                                    src={`./images/${image.src}`}
                                    alt={`image-${index + 1}`}
                                    className="w-72 h-auto rounded-md transform group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute bottom-2 left-2 bg-[#d2ff52] text-sm p-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                                    {image.description}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <button
                    className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-[#fface2] p-2 rounded-full shadow-md hover:bg-[#f894d5]"
                    onClick={scrollNext}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                    </svg>
                </button>
            </div>
        </section>
    );
};

export default Hobby;
