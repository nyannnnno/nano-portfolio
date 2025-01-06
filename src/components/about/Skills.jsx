import React from 'react';

const othersSkills = [
    'microsoft office',
    'microsoft excel',
    'notion',
    'jira',
    'social media management',
];

const codingSkills = [
    'HTML',
    'CSS',
    'tailwind',
    'react',
    'javascript',
    'typescript',
    'python',
    'PHP',
    'SQL',
    'three js',
    'GSAP',
];

const graphicSkills = [
    'illustrator',
    'photoshop',
    'procreate',
    'powerpoint',
    'canva',
    'figma',

];

const softSkills = [
    'adaptibility',
    'creativity ',
    'problem-solving',
    'flexibility',
    'public speaking',

];

const Skills = () => {
    return (
        <section className="py-4 px-4 ">
            <h2 className="text-4xl text-center lg:-mb-4 md:-mb-4 mb-10 lg:mt-5 md:mt-5 -mt-4 ">skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:gap-20 md:p-20 md:pb-0 pb-0 gap-5 p-5 pt-0">
                <div className="relative bg-[#dbd0e7a2] p-6 rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300 overflow-hidden">
                    <div className="absolute bottom-0 -left-0 w-80 h-60 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 blur-2xl rounded-full opacity-30 pointer-events-none z-0"></div>
                    <div className="absolute top-3 right-3 w-64 h-40 bg-gradient-to-b from-purple-500 via-pink-500 to-red-500 blur-2xl rounded-full opacity-20 pointer-events-none z-0"></div>

                    <h3 className="font-semibold text-gray-800 text-center text-lg italic mb-4">graphic software</h3>
                    <ul className="list-disc ml-8 text-gray-800">
                        {graphicSkills.slice(0, 5).map((skill) => (
                            <li key={skill} className="text-lg mb-2">
                                <span className="">{skill}</span>
                            </li>
                        ))}
                    </ul>

                    <ul className="list-disc ml-8 text-gray-800">
                        {graphicSkills.slice(6).map((skill) => (
                            <li key={skill} className="text-lg mb-2">
                                <span className="">{skill}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="bg-[#dbd0e7a2] p-6 rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300">
                    <div className="absolute -top-0 -left-0 w-80 h-60 bg-gradient-to-t from-purple-500 via-pink-500 to-red-500 blur-2xl rounded-full opacity-30 pointer-events-none z-0"></div>
                    <div className="absolute bottom-0 right-3 w-64 h-40 bg-gradient-to-l from-purple-500 via-pink-500 to-red-500 blur-2xl rounded-full opacity-20 pointer-events-none z-0"></div>
                    <h3 className="text-lg font-semibold text-gray-800 text-center font-base italic mb-4">coding skills</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <ul className="list-disc ml-8 text-gray-800 ">
                            {codingSkills.slice(0, 5).map((skill) => (
                                <li key={skill} className="text-lg mb-2">
                                    <span className="">{skill}</span>
                                </li>
                            ))}
                        </ul>

                        <ul className="list-disc ml-8 text-gray-800">
                            {codingSkills.slice(6, 10).map((skill) => (
                                <li key={skill} className="text-lg mb-2">
                                    <span className="">{skill}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="bg-[#dbd0e7a2] p-6 rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300">
                    <div className="absolute bottom-0 right-2 w-80 h-52 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 blur-2xl rounded-full opacity-30 pointer-events-none z-0"></div>
                    <div className="absolute top-4 left-0 w-40 h-40 bg-gradient-to-b from-purple-500 via-pink-500 to-red-500 blur-2xl rounded-full opacity-30 pointer-events-none z-0"></div>
                    <h3 className="text-lg font-semibold text-gray-800 text-center font-base italic mb-4">others software</h3>
                    <ul className="list-disc ml-8 text-gray-800">
                        {othersSkills.map((skill) => (
                            <li key={skill} className="text-lg mb-2">
                                <span className="">{skill}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="bg-[#dbd0e7a2] p-6 rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300">
                    <div className="absolute top-4 left-0 w-72 h-52 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 blur-2xl rounded-full opacity-30 pointer-events-none z-0"></div>
                    <div className="absolute bottom-0 right-2 w-40 h-40 bg-gradient-to-b from-purple-500 via-pink-500 to-red-500 blur-2xl rounded-full opacity-30 pointer-events-none z-0"></div>
                    <h3 className="text-lg font-semibold text-gray-800 text-center font-base italic mb-4">soft skills</h3>
                    <ul className="list-disc ml-8 text-gray-800">
                        {softSkills.map((skill) => (
                            <li key={skill} className="text-lg mb-2">
                                <span className="">{skill}</span>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </section>
    );
};

export default Skills;
