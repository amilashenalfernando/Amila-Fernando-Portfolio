import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { scroller } from 'react-scroll';
import { FiCode, FiPenTool, FiCamera, FiTarget, FiUser } from 'react-icons/fi';
import {
    SiReact, SiJavascript, SiPython,
    SiTypescript, SiPostgresql,
    SiAdobephotoshop, SiAdobepremierepro, SiFigma, SiAdobeillustrator, SiAdobelightroom
} from 'react-icons/si';
import { FaJava, FaNodeJs } from 'react-icons/fa';

const tools = [
    { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
    { name: "Python", icon: <SiPython className="text-[#3776AB]" /> },
    { name: "Java", icon: <FaJava className="text-[#007396]" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
    { name: "SQL", icon: <SiPostgresql className="text-[#4169E1]" /> },
    { name: "Photoshop", icon: <SiAdobephotoshop className="text-[#31A8FF]" /> },
    { name: "Premiere Pro", icon: <SiAdobepremierepro className="text-[#9999FF]" /> },
    { name: "Figma", icon: <SiFigma className="text-[#F24E1E]" /> },
    { name: "Illustrator", icon: <SiAdobeillustrator className="text-[#FF9A00]" /> },
    { name: "Lightroom", icon: <SiAdobelightroom className="text-[#31A8FF]" /> },
];

const skills = [
    {
        category: "Software Engineering",
        icon: <FiCode className="text-3xl text-yellow-400" />,
        items: ["React.js", "JavaScript", "Python", "Java", "Node.js", "SQL"]
    },
    {
        category: "Graphic Design",
        icon: <FiPenTool className="text-3xl text-red-400" />,
        items: ["Adobe Photoshop", "Adobe Premiere Pro", "Figma", "UI/UX Design", "Illustrator"]
    },
    {
        category: "Photography",
        icon: <FiCamera className="text-3xl text-orange-400" />,
        items: ["Portrait", "Event Photography", "Landscape", "Product Photography"]
    }
];

const About = () => {
    const navigate = useNavigate();
    const [activeTool, setActiveTool] = useState(null);

    return (
        <div className="w-full max-w-6xl mx-auto pt-10 px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <span className="text-orange-400 font-semibold tracking-wider uppercase text-sm">Discover</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-2">About <span className="text-gradient">Me</span></h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                {/* Profile Image Column */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="lg:col-span-1 h-full min-h-[400px]"
                >
                    <div className="relative h-full w-full rounded-2xl overflow-hidden glass-card group">
                        {/* Image Placeholder - REPLACE SRC WITH YOUR IMAGE */}
                        <img
                            src="/My/IMG_9738.JPG"
                            alt="Profile"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />

                        {/* Floating Tech Badges */}
                        <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2">
                            <span className="px-3 py-1 rounded-full bg-orange-900/40 border border-orange-500/30 text-orange-200 text-xs font-medium backdrop-blur-md shadow-lg">
                                Developer
                            </span>
                            <span className="px-3 py-1 rounded-full bg-red-900/40 border border-red-500/30 text-red-200 text-xs font-medium backdrop-blur-md shadow-lg">
                                Designer
                            </span>
                            <span className="px-3 py-1 rounded-full bg-blue-900/40 border border-blue-500/30 text-blue-200 text-xs font-medium backdrop-blur-md shadow-lg">
                                Photographer
                            </span>
                        </div>
                    </div>
                </motion.div>

                {/* Content Column */}
                <div className="lg:col-span-2 flex flex-col gap-6">
                    {/* Personal Intro */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="glass-card p-8 flex flex-col justify-center flex-1"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-4 bg-white/5 rounded-full">
                                <FiUser className="text-3xl text-white" />
                            </div>
                            <h3 className="text-2xl font-bold">Who I Am</h3>
                        </div>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            My background in Software Engineering and Data Science provides me with a structured, data-driven approach to problem-solving.
                            I focus on building high-performance web solutions and exploring the latest in tech.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            As a Graphic Designer and Photographer, I believe technology should be beautiful.
                            I bridge the gap between complex engineering and user-centric design, creating experiences that are intuitive, accessible, and visually stunning.
                        </p>
                    </motion.div>

                    {/* Career Goals */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="glass-card p-8 flex flex-col justify-center flex-1 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-32 bg-orange-600/10 rounded-full blur-3xl" />

                        <div className="flex items-center gap-4 mb-6 relative z-10">
                            <div className="p-4 bg-white/5 rounded-full">
                                <FiTarget className="text-3xl text-white" />
                            </div>
                            <h3 className="text-2xl font-bold">My Vision</h3>
                        </div>
                        <p className="text-gray-300 leading-relaxed relative z-10">
                            I envision a future where technology and creativity are inseparable. I aim to grow into a role where I can architect full-stack solutions that are defined by clean code and exceptional visual storytelling.
                            My mission is to build digital products that feel as natural to use as they are inspiring to look at.
                        </p>
                    </motion.div>

                </div>
            </div>

            {/* Skills Section */}
            <h3 className="text-3xl font-bold text-center mb-10">My Skillset</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        className="group glass-card p-6 hover-lift border-t-4 border-t-transparent hover:border-t-orange-500 transition-all cursor-pointer bg-white/5 hover:bg-white/10 relative overflow-hidden"
                        onClick={() => {
                            if (skill.category === "Software Engineering") {
                                scroller.scrollTo('projects', { smooth: true, duration: 500, offset: -100 });
                            } else if (skill.category === "Graphic Design") {
                                navigate('/design');
                            } else if (skill.category === "Photography") {
                                navigate('/photos');
                            }
                        }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/10 group-hover:to-red-500/10 transition-all duration-500" />

                        <div className="mb-6 relative z-10 transition-transform group-hover:scale-110 duration-300 origin-left">
                            {skill.icon}
                        </div>

                        <h4 className="text-xl font-bold mb-4 relative z-10 group-hover:text-orange-400 transition-colors">{skill.category}</h4>

                        <div className="flex flex-wrap gap-2 relative z-10">
                            {skill.items.map((item, idx) => (
                                <span
                                    key={idx}
                                    className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300 border border-white/5 transition-all duration-300 group-hover:bg-orange-500/20 group-hover:text-white group-hover:border-orange-500/30"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Software Marquee Section */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-20 mb-10"
            >
                <div className="text-center mb-10">
                    <span className="text-blue-400 font-semibold tracking-wider uppercase text-sm">Tech Stack</span>
                    <h3 className="text-3xl md:text-4xl font-bold mt-2">My <span className="text-gradient">Toolkit</span></h3>
                </div>

                <div className="relative w-screen ml-[calc(50%-50vw)] overflow-hidden py-6 bg-white/5 backdrop-blur-sm border-y border-white/5">
                    <div className="flex w-max">
                        {/* First Loop */}
                        <motion.div
                            className="flex gap-12 pr-12"
                            animate={{ x: ["0%", "-100%"] }}
                            transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
                        >
                            {[...tools, ...tools].map((tool, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center gap-3 min-w-[80px] group cursor-default"
                                    onClick={() => setActiveTool(activeTool === tool.name ? null : tool.name)}
                                >
                                    <div className={`text-4xl md:text-5xl transition-transform duration-300 filter ${activeTool === tool.name ? 'grayscale-0 opacity-100 scale-110' : 'grayscale group-hover:grayscale-0 opacity-50 group-hover:opacity-100 group-hover:scale-110'}`}>
                                        {tool.icon}
                                    </div>
                                    <span className={`text-sm transition-colors ${activeTool === tool.name ? 'text-white' : 'text-gray-500 group-hover:text-white'}`}>
                                        {tool.name}
                                    </span>
                                </div>
                            ))}
                        </motion.div>

                        {/* Second Loop (Duplicate for seamless effect) */}
                        <motion.div
                            className="flex gap-12 pr-12"
                            animate={{ x: ["0%", "-100%"] }}
                            transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
                        >
                            {[...tools, ...tools].map((tool, index) => (
                                <div
                                    key={`duplicate-${index}`}
                                    className="flex flex-col items-center gap-3 min-w-[80px] group cursor-default"
                                    onClick={() => setActiveTool(activeTool === tool.name ? null : tool.name)}
                                >
                                    <div className={`text-4xl md:text-5xl transition-transform duration-300 filter ${activeTool === tool.name ? 'grayscale-0 opacity-100 scale-110' : 'grayscale group-hover:grayscale-0 opacity-50 group-hover:opacity-100 group-hover:scale-110'}`}>
                                        {tool.icon}
                                    </div>
                                    <span className={`text-sm transition-colors ${activeTool === tool.name ? 'text-white' : 'text-gray-500 group-hover:text-white'}`}>
                                        {tool.name}
                                    </span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </motion.div>

        </div>
    );
};

export default About;
