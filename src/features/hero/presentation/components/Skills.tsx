import { Card } from "@heroui/card";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SKILLS_DATA } from "../../../../constants/hero/skills";
import DotPagination from "../../../../components/common/DotPagination";

export default function Skills(){
    const [currentPage, setCurrentPage] = useState(1);
    const [isAutoPlay, setIsAutoPlay] = useState(true);
    const skillsPerPage = 6;
    
    const totalPages = Math.ceil(SKILLS_DATA.length / skillsPerPage);
    const startIndex = (currentPage - 1) * skillsPerPage;
    const endIndex = startIndex + skillsPerPage;
    const currentSkills = SKILLS_DATA.slice(startIndex, endIndex);

    // Auto-advance pages every 4 seconds
    useEffect(() => {
        if (!isAutoPlay || totalPages <= 1) return;

        const interval = setInterval(() => {
            setCurrentPage(prev => prev >= totalPages ? 1 : prev + 1);
        }, 4000);

        return () => clearInterval(interval);
    }, [isAutoPlay, totalPages]);

    // Pause auto-play on user interaction
    const handlePageClick = (page: number) => {
        setIsAutoPlay(false);
        setCurrentPage(page);
        
        // Resume auto-play after 8 seconds of no interaction
        setTimeout(() => {
            setIsAutoPlay(true);
        }, 8000);
    };

    return (
        <div className="w-full max-w-6xl mx-auto px-16">
            <div className="text-left mb-12 ">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    My <span className="text-white">Skills &</span>
                </h2>
                <h2 className="text-4xl md:text-5xl font-bold">
                    <span className="text-purple-400">Technologies</span>
                </h2>
            </div>
            
            <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
                key={currentPage}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
            >
                {currentSkills.map((skill, index) => (
                    <motion.div
                        key={startIndex + index}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ 
                            duration: 0.5, 
                            delay: index * 0.1,
                            ease: "easeOut" 
                        }}
                    >
                        <Card 
                            className="p-6 bg-gray-800/50 border-gray-700 hover:bg-gray-700/50 transition-all duration-300 cursor-pointer group h-full min-h-[140px] flex flex-col justify-center"
                        >
                            <div className="flex items-center gap-4 h-full">
                                <div className="p-3 bg-gray-700/50 rounded-xl group-hover:bg-gray-600/50 transition-colors flex-shrink-0">
                                    <skill.icon className="w-8 h-8 text-white" />
                                </div>
                                <div className="flex-1 flex flex-col justify-center">
                                    <h3 className="text-xl font-semibold text-white mb-2">
                                        {skill.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                                        {skill.description}
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
            
            <DotPagination 
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={handlePageClick}
            />
        </div>
    );
}
