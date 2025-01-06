import React, { useState, useEffect } from "react";

const Modal = ({ isOpen, onClose, blogPost }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 mt-16 flex justify-center items-center z-20">
            <div className="bg-white p-6 w-full h-full overflow-y-auto relative">
                <h2 className="text-2xl font-bold text-gray-800 mt-24 ml-10 mr-10">{blogPost.title}</h2>
                <p className="text-base text-gray-600 mt-5 ml-10 mr-10 indent-2">{blogPost.preContent}</p>
                <p className="text-base text-gray-600 mt-5 ml-10 mr-10 indent-2">{blogPost.firstContent}</p>
                <div
                    className="text-base text-gray-600 mt-5 ml-10 mr-10 indent-2"
                    dangerouslySetInnerHTML={{ __html: blogPost.secondContent }}
                ></div>
                <p className="text-base text-gray-600 mt-5 ml-10 mr-10 indent-2">{blogPost.thirdContent}</p>

                <div className="absolute top-16 mt-1 right-16 text-sm text-gray-600">
                    {blogPost.date}
                </div>

                <button
                    onClick={onClose}
                    className="absolute top-16 left-16 text-gray-500 hover:text-gray-800 text-2xl font-bold"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

const BlogCard = ({ title, image, summary, date, preContent, firstContent, secondContent, thirdContent, onReadMore }) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-medium text-black">{date}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">{summary}</p>
                <button
                    onClick={() => onReadMore({ title, preContent, firstContent, secondContent, thirdContent, date })}
                    className="mt-4 inline-block bottom-4 text-black hover:underline-offset-4 hover:underline text-sm font-medium"
                >
                    read more →
                </button>
            </div>
        </div>
    );
};

const BlogList = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedBlog, setSelectedBlog] = useState(null);

    const blogPosts = [
        {
            title: "How to Deal with a Teammate Who's Too Chill?",
            image: "../images/blog2.jpg",
            summary: "If a teammate isn't helping, can I remove their name from this project, professor?",
            preContent: "In educational institutions or organizations, people often expect to work in areas they are skilled at, on a path that is strewn with roses and good colleagues around. I was one of those people who expected such a perfect life. But no, life can't always be perfect.",
            firstContent: "As a professional in managing people who are too chill to work, here's a shortcut to get rid of these problems from your life (kidding, I just face this issue more often than I have meals). Here are 5 tips that actually work very well from my experience.",
            secondContent: `
                <div>
                    <h2 class="text-lg font-semibold mb-2">1. Remember "You're not a hero and don't have to be"</h2>
                    <p class="mb-5">Your first priority is your own responsibilities. You’re not obligated to handle someone else’s tasks. Focus on your part, and don’t take on more than necessary.</p>
                    <h2 class="text-lg font-semibold mb-2">2. Time is the key</h2>
                    <p class="mb-5">Deadlines are tricky, especially for people who lack urgency. Don’t assign critical tasks to “chill” teammates when the deadline is near. They might need extra time and inspiration to deliver their best.</p>
                    <h2 class="text-lg font-semibold mb-2">3. Let them try</h2>
                    <p class="mb-5">If the task is new or challenging, give them the chance to figure it out on their own. If they make mistakes, use it as a teaching moment—guide them and let them fix it. Growth often comes through trial and error.</p>
                    <h2 class="text-lg font-semibold mb-2">4. Sometimes, Sacrifice the easy parts</h2>
                    <p class="mb-5">Allow them to start with simpler tasks while you take on the harder ones. This isn’t about being selfless but about creating a win-win situation. They’ll gain new skills, and you’ll strengthen your own by tackling more complex challenges.</p>
                    <h2 class="text-lg font-semibold mb-2">5. Words can hurt</h2>
                    <p class="mb-5">Always remember that words can traumatize people. Approach issues with empathy—everyone has their own reasons for behaving a certain way. Try to understand and inspire others instead of criticizing. A great leader lifts others up.</p>
                </div>
            `,
            thirdContent: "Managing too-chill teammates is like trying to herd cats—patience, empathy, and knowing when to let go. Please don't make it harder on yourself trust me, I've been there before. love you <3",
            date: "December 20, 2024",
        },
        {
            title: "Startups? Unicorn Battle? My Little Pony? NAH",
            image: "../images/blog3.png",
            summary: "Adventure in the showcase business potential and ideas for solving poop problems.",
            preContent: "Unicorn battle is like startups fiercely competing with each other to attract investors, achieve rapid growth, find a way to become the market leader in their industry or to achieve unicorn status. A unicorn is a privately held startup company valued at over $1 billion",
            firstContent: "I got the chance to compete in a small-scale unicorn battle at university. It was an opportunity to experiment and try out new things, and in the end, I received an honorable mention from the judges, who are part of a well-known organization that drives innovation. It’s a great experience that can easily be added to my portfolio. But this is just a blog, not a showcase of achievements, so instead of focusing on the success, I’ll talk about the mistakes I made while working on this project. so here are things",
            secondContent: `
            <div>
                <h2 class="text-lg font-semibold mb-2">"SHOWTIME"</h2>
                <p class="mb-5">The theme of the competition was all about innovation to solve everyday problems. And funny enough, at that time, there was this almost 3-hour long Marvel movie playing in theaters, and people were actually debating online about when’s the best time to get up and use the restroom. So, we thought, why not? Leaving the theater to go to the bathroom is something everyone deals with. That’s how we came up with the idea of SHOWTIME, with the slogan: "Movie to go: Where everywhere is a cinema"</p>
                <h2 class="text-lg font-semibold mb-2">What SHOWTIME do?</h2>
                <p class="mb-5">SHOWTIME business model is B2B2C, where we create a plugin for cinema apps to subscribe. Plugin works by scanning a movie ticket's QR code. The app will act like a streaming service, showing the same movie for 25 minutes, matching the theater and time of the ticket the customer purchased. We also added a screen recording prevention feature to avoid people recording the movie. The decision for the 25-minute viewing time came after interviewing 50 real cinema-goers</p>
                <h2 class="text-lg font-semibold mb-2">Why cinemas need to have us?</h2>
                <p class="mb-5">GOOD QUESTION. Our service helps cinemas deliver a better customer experience while addressing challenges like customer satisfaction and piracy prevention. But to be honest, do cinemas really need us as much as we hope? The judges asked. And here's the start of the epic tale of mistakes I'm about to share.</p>
                <p class="mb-5">After my heart started racing like it was about to jump out of my chest, the other judges hit me with a barrage of questions. "So, why can't cinemas do this themselves? Why do they need to buy it?" "With engagement being so uncertain, should they really be investing in this?" "How are you handling copyright issues? What if your idea gets stolen during the pitch?" So many great questions that slowly started to chip away at my confidence. I stopped to think and gave the answer I had prepared. To be honest, it didn’t really address their questions directly. The confidence I had left, with so little time remaining, made me realize I was already made a big mistake.</p>
                <h2 class="text-lg font-semibold mb-2">Mistakes makes you ... </h2>
                <p class="mb-5">The judges told me my idea was great—coming from someone who didn’t have to spend a dime, of course. Running a business involves a lot more than just focusing on customers or the hype that comes and goes. It made me realize that the honorable mention I got was for a new idea (that can’t really be implemented in an organization). This gave me a broader perspective and a better understanding of how to create ideas for the market. Plus, I now have a funny line to share with my friends that the blue ocean isn’t as sweet as it sounds. In reality, it might just be an idea no one’s tried because it hasn’t worked yet. It was a fun experience that I’ll talk about for a long time.</p>
            </div>
        `,
            date: "March 10, 2024",
        },
    ];

    const handleReadMore = (blogPost) => {
        setSelectedBlog(blogPost);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <section className="py-12">
            <div className="container mx-auto px-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-5">
                    {blogPosts.map((post, index) => (
                        <div key={index} className="transform hover:scale-105 transition-transform duration-300">
                            <BlogCard
                                title={post.title}
                                image={post.image}
                                summary={post.summary}
                                date={post.date}
                                preContent={post.preContent}
                                firstContent={post.firstContent}
                                secondContent={post.secondContent}
                                thirdContent={post.thirdContent}
                                onReadMore={handleReadMore}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <Modal isOpen={isModalOpen} onClose={handleCloseModal} blogPost={selectedBlog} />
        </section>
    );
};

export default BlogList;
