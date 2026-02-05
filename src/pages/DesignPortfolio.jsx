import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiZoomIn, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const designs = [
    { id: 1, title: "CS T-Shirt Launch", image: "/Designs/1.png", category: "Merchandise", desc: "Official launch design for CS T-Shirts." },
    { id: 2, title: "Guest Speaker Session", image: "/Designs/2.png", category: "Flyer", desc: "Promotional flyer for guest speaker event." },
    { id: 3, title: "Brand Merchandise", image: "/Designs/3.png", category: "Merchandise", desc: "Clean and modern merchandise design." },
    { id: 4, title: "Mentor Reveal", image: "/Designs/4.png", category: "Social Media", desc: "Social media announcement for mentor reveal." },
    { id: 5, title: "Session 01 Announcement", image: "/Designs/5.png", category: "Flyer", desc: "Announcement flyer for the first session." },
    { id: 6, title: "Website Launch Flyer", image: "/Designs/6.png", category: "Flyer", desc: "Launch flyer for the new website." },
    { id: 7, title: "Website Launch Event", image: "/Designs/7.png", category: "Event", desc: "Event creative for website launching." }
];

const DesignPortfolio = () => {
    const [selectedId, setSelectedId] = useState(null);

    const handlePrev = useCallback((e) => {
        e?.stopPropagation();
        if (!selectedId) return;
        const currentIndex = designs.findIndex(d => d.id === selectedId);
        const prevIndex = (currentIndex - 1 + designs.length) % designs.length;
        setSelectedId(designs[prevIndex].id);
    }, [selectedId]);

    const handleNext = useCallback((e) => {
        e?.stopPropagation();
        if (!selectedId) return;
        const currentIndex = designs.findIndex(d => d.id === selectedId);
        const nextIndex = (currentIndex + 1) % designs.length;
        setSelectedId(designs[nextIndex].id);
    }, [selectedId]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!selectedId) return;
            if (e.key === "ArrowLeft") handlePrev();
            if (e.key === "ArrowRight") handleNext();
            if (e.key === "Escape") setSelectedId(null);
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedId, handleNext, handlePrev]);

    return (
        <div className="w-full max-w-7xl mx-auto pt-10 px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12"
            >
                <span className="text-orange-400 font-semibold tracking-wider uppercase text-sm">Visuals</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-2">Design <span className="text-gradient">Portfolio</span></h2>
            </motion.div>

            {/* Grid Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {designs.map((item) => (
                    <motion.div
                        layoutId={`card-container-${item.id}`}
                        key={item.id}
                        onClick={() => setSelectedId(item.id)}
                        whileHover={{ y: -5 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="cursor-pointer group relative rounded-2xl overflow-hidden glass-card aspect-square md:aspect-auto"
                    >
                        <motion.img
                            layoutId={`card-image-${item.id}`}
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <div className="text-center p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                                <span className="text-orange-400 text-xs font-bold uppercase tracking-wider mb-2 block">{item.category}</span>
                                <h3 className="text-white text-xl font-bold">{item.title}</h3>
                                <p className="text-gray-300 text-sm mt-2">View Details</p>
                                <FiZoomIn className="mx-auto mt-4 text-2xl text-orange-400" />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedId && (
                    <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedId(null)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm pointer-events-auto"
                        />

                        {/* Card Modal */}
                        <motion.div
                            layoutId={`card-container-${selectedId}`}
                            className="w-full max-w-3xl glass-card overflow-hidden relative pointer-events-auto shadow-2xl shadow-orange-500/20"
                        >
                            <button
                                onClick={() => setSelectedId(null)}
                                className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-red-500/80 transition-colors"
                            >
                                <FiX size={24} />
                            </button>

                            {/* Navigation Buttons */}
                            <button
                                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-orange-500 transition-colors"
                                onClick={handlePrev}
                            >
                                <FiChevronLeft size={32} />
                            </button>
                            <button
                                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-orange-500 transition-colors"
                                onClick={handleNext}
                            >
                                <FiChevronRight size={32} />
                            </button>

                            <div className="w-full h-auto max-h-[85vh] flex items-center justify-center bg-[#050505]">
                                <motion.img
                                    key={selectedId} // Force re-render for smooth transition if needed, or rely on layoutId
                                    layoutId={`card-image-${selectedId}`}
                                    src={designs.find(d => d.id === selectedId).image}
                                    className="max-w-full max-h-[85vh] object-contain"
                                />
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default DesignPortfolio;
