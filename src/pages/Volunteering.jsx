import React from 'react';
import { motion } from 'framer-motion';
import { FiBook, FiCamera, FiUsers, FiPenTool } from 'react-icons/fi';

const activities = [
    {
        id: 1,
        title: "Design & Publicity - SLAIC",
        organization: "AI-Driven Sri Lanka",
        date: "2024 - 2025",
        role: "Design & Publicity Member",
        description: "Design & Publicity member at AI Driven Sri Lanka. Responsible for creating visual assets and managing publicity campaigns.",
        image: "/Volunteering/1.jpg",
        icon: <FiPenTool className="text-lg" />
    },
    {
        id: 2,
        title: "Photography Committee",
        organization: "Media Unit of SLTC Research University",
        date: "2024 - Present",
        role: "Member",
        description: "Member of the Photography Committee at the Media Unit of SLTC Research University. Responsible for capturing official university events and managing media coverage.",
        image: "/Volunteering/2.jpg",
        icon: <FiCamera className="text-lg" />
    },
    {
        id: 3,
        title: "Public Visibility Sub Committee",
        organization: "Computer Society of SLTC",
        date: "2024 - 2025",
        role: "Deputy Head",
        description: "Leading the public visibility initiatives and managing outreach strategies for the Computer Society at Sri Lanka Technology Campus.",
        image: "/Volunteering/3.jpg",
        icon: <FiUsers className="text-lg" />
    }
];

const Volunteering = () => {
    return (
        <div className="w-full max-w-6xl mx-auto pt-10 px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12"
            >
                <span className="text-orange-400 font-medium tracking-wide uppercase text-xs">Community Impact</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white">
                    Volunteering & Activities
                </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {activities.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="group relative h-full"
                    >
                        <div className="relative glass-card bg-[#0a0a0a] border border-white/5 rounded-xl overflow-hidden hover:border-orange-500/30 transition-colors duration-300 h-full flex flex-col">
                            {/* Image Section - Compact Height */}
                            <div className="relative h-48 overflow-hidden">

                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                                />
                                <div className="absolute top-3 right-3 z-20">
                                    <div className="p-2 bg-black/60 backdrop-blur-md rounded-lg text-orange-400 border border-white/10">
                                        {item.icon}
                                    </div>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex justify-between items-start mb-3">
                                    <span className="text-xs font-mono text-orange-400 bg-orange-500/5 px-2 py-1 rounded border border-orange-500/10">
                                        {item.date}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-1 leading-snug group-hover:text-orange-100 transition-colors">
                                    {item.title}
                                </h3>

                                <div className="text-sm text-gray-500 font-medium mb-3">
                                    <span className="text-orange-400 block mb-1 font-semibold">{item.role}</span>
                                    {item.organization}
                                </div>

                                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
                                    {item.description}
                                </p>


                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Volunteering;
