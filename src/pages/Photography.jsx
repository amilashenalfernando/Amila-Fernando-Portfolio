import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiCamera, FiChevronLeft, FiChevronRight, FiLayers } from 'react-icons/fi';

// Helper to generate gallery paths
const generateGallery = (folderId, count) => {
    return Array.from({ length: count }, (_, i) => `/Photography/${folderId}/${i + 1}.jpg`);
};

const collections = [
    {
        id: 1,
        title: "After Glow",
        category: "Events",
        cover: "/Photography/1/1.jpg",
        gallery: generateGallery(1, 11)
    },
    {
        id: 2,
        title: "Megahara",
        category: "Events",
        cover: "/Photography/2/1.jpg",
        gallery: generateGallery(2, 8)
    },
    {
        id: 3,
        title: "Echoes of Holi",
        category: "Events",
        cover: "/Photography/3/1.jpg",
        gallery: generateGallery(3, 8)
    }
];

const categories = ["All", "Nature", "Events", "Portraits"];

const Photography = () => {
    const [filter, setFilter] = useState("All");

    // State for Lightbox
    const [selectedCollection, setSelectedCollection] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const filteredCollections = collections.filter(c => filter === "All" || c.category === filter);

    // Ensure we reset index when opening a new collection
    const openCollection = (collection) => {
        setSelectedCollection(collection);
        setCurrentImageIndex(null); // Start in Grid View
    };

    const handlePrev = useCallback((e) => {
        e?.stopPropagation();
        if (!selectedCollection) return;
        setCurrentImageIndex(prev =>
            (prev - 1 + selectedCollection.gallery.length) % selectedCollection.gallery.length
        );
    }, [selectedCollection]);

    const handleNext = useCallback((e) => {
        e?.stopPropagation();
        if (!selectedCollection) return;
        setCurrentImageIndex(prev =>
            (prev + 1) % selectedCollection.gallery.length
        );
    }, [selectedCollection]);

    // Keyboard Navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!selectedCollection) return;
            if (e.key === "ArrowLeft") handlePrev();
            if (e.key === "ArrowRight") handleNext();
            if (e.key === "Escape") setSelectedCollection(null);
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedCollection, handleNext, handlePrev]);

    return (
        <div className="w-full max-w-7xl mx-auto pt-10 px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12"
            >
                <span className="text-orange-400 font-semibold tracking-wider uppercase text-sm">Through The Lens</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-2">Photography <span className="text-gradient">Gallery</span></h2>
            </motion.div>

            {/* Filters */}
            <div className="flex justify-center gap-4 mb-12 flex-wrap">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${filter === cat
                            ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg'
                            : 'bg-white/5 text-gray-300 hover:bg-white/10'
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Album Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence mode='popLayout'>
                    {filteredCollections.map((album) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            key={album.id}
                            onClick={() => openCollection(album)}
                            className="relative group rounded-2xl overflow-hidden cursor-pointer bg-white/5 border border-white/5 aspect-[3/4]"
                        >
                            <img
                                src={album.cover}
                                alt={album.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                                <FiLayers className="text-4xl text-orange-400 mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300" />
                                <h3 className="text-xl font-bold text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                    {album.title}
                                </h3>
                                <p className="text-gray-300 text-sm mt-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                                    {album.gallery.length} Photos
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {/* Album Viewer (Grid or Lightbox) */}
            <AnimatePresence>
                {selectedCollection && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[70] flex flex-col bg-black/95 backdrop-blur-md"
                    >
                        {/* Header (Title + Close) */}
                        <div className="flex justify-between items-center p-6 border-b border-white/10 bg-black/40 z-50">
                            <h2 className="text-xl font-bold text-white">
                                {selectedCollection.title}
                                <span className="text-gray-500 text-sm font-normal ml-3">
                                    {selectedCollection.gallery.length} Photos
                                </span>
                            </h2>
                            <button
                                onClick={() => {
                                    if (currentImageIndex !== null) {
                                        setCurrentImageIndex(null); // Back to Grid from Lightbox
                                    } else {
                                        setSelectedCollection(null); // Close Album Viewer
                                    }
                                }}
                                className="p-2 hover:bg-white/10 rounded-full transition-colors text-white"
                            >
                                <FiX className="text-2xl" />
                            </button>
                        </div>

                        {/* Content Container */}
                        <div className="flex-1 overflow-hidden relative">
                            {currentImageIndex === null ? (
                                /* ALBUM GRID VIEW */
                                <div
                                    className="h-full overflow-y-auto p-4 md:p-8"
                                    onClick={(e) => {
                                        // Close album if clicking grid background
                                        if (e.target === e.currentTarget) setSelectedCollection(null);
                                    }}
                                >
                                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
                                        {selectedCollection.gallery.map((img, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: idx * 0.05 }}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setCurrentImageIndex(idx);
                                                }}
                                                className="aspect-square cursor-pointer rounded-xl overflow-hidden border border-white/5 hover:border-orange-500/50 transition-colors group relative"
                                            >
                                                <img
                                                    src={img}
                                                    alt={`Photo ${idx + 1}`}
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                /* LIGHTBOX SLIDESHOW VIEW */
                                <div
                                    className="absolute inset-0 flex items-center justify-center p-4 cursor-zoom-out"
                                    onClick={() => setCurrentImageIndex(null)} // Click outside to go back to grid
                                >
                                    {/* Navigation Buttons */}
                                    <button
                                        className="absolute left-4 md:left-8 text-white/50 hover:text-white text-5xl transition-colors z-50 p-2"
                                        onClick={handlePrev}
                                    >
                                        <FiChevronLeft />
                                    </button>

                                    <button
                                        className="absolute right-4 md:right-8 text-white/50 hover:text-white text-5xl transition-colors z-50 p-2"
                                        onClick={handleNext}
                                    >
                                        <FiChevronRight />
                                    </button>

                                    {/* Current Image */}
                                    <motion.img
                                        key={`${selectedCollection.id}-${currentImageIndex}`}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.3 }}
                                        src={selectedCollection.gallery[currentImageIndex]}
                                        className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg shadow-2xl border border-white/10"
                                        onClick={(e) => e.stopPropagation()}
                                    />

                                    {/* Caption / Counter */}
                                    <div className="absolute bottom-6 text-center">
                                        <p className="text-gray-400 text-sm mt-1">
                                            {currentImageIndex + 1} / {selectedCollection.gallery.length}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Photography;
