"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { services } from '@/app/services/data';
import Link from 'next/link';
import { Palette } from '@mui/icons-material';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.3,
            staggerChildren: 0.1 
        }
    }
};

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 20 // Reduced movement
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4, // Faster animation
            ease: "easeOut"
        }
    }
};


const cardHover = {
    y: -2,
    transition: {
        duration: 0.15,
        ease: "easeOut"
    }
};

const Services = () => {
    return (
        <motion.div
            className="max-w-7xl mx-auto py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }} // Reduced threshold
        >
            {/* Header with simple fade-in */}
            <motion.div
                className="text-center mb-8 sm:mb-10 lg:mb-12"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
            >
                <h2 className="title text-gray-800 mb-2 sm:mb-3 lg:mb-4">
                    Our Services
                </h2>
                <p className="subtitle text-xs sm:text-sm md:text-base text-gray-600 tracking-wide">
                    We are committed to ensuring the successful delivery of software solutions
                </p>
            </motion.div>

            {/* Cards Grid */}
            <motion.div
                className="max-w-7xl mt-5 mx-auto"
                variants={containerVariants}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
                    {services.map((service, index) => {
                        const IconComponent = service.icon || Palette;

                        return (
                            <Link key={index} href={`/services/${index}`}>
                                <motion.div
                                    className={`
                                        relative rounded-3xl p-8 sm:p-10 transition-colors duration-200 cursor-pointer
                                        bg-[#eaeefe] text-white 
                                        h-full flex flex-col
                                        hover:bg-[#dddcfd]
                                    `}
                                    variants={cardVariants}
                                    whileHover={cardHover}
                                >
                                    {/* Icon - No complex animations */}
                                    <div className="
                                        w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mb-6
                                        bg-white shadow-md flex-shrink-0
                                    ">
                                        <IconComponent 
                                            sx={{ fontSize: { xs: 28, sm: 48 }, color: "#001E80" }} 
                                            className="text-3xl sm:text-9xl text-[#001E80]" 
                                        />
                                    </div>

                                    {/* Content Container */}
                                    <div className="flex-grow flex flex-col">
                                        {/* Title */}
                                        <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-800">
                                            {service.title}
                                        </h3>

                                        {/* Headline */}
                                        <p className="text-sm sm:text-base font-medium text-gray-600 flex-grow mb-6">
                                            {service.headline}
                                        </p>

                                        {/* Learn More Button */}
                                        <div className="mt-auto">
                                            <div className="
                                                inline-block text-sm font-semibold border-b-2 cursor-pointer transition-all duration-200
                                                text-[#001E80] border-[#001E80] hover:border-[#000c40] hover:text-[#000c40]
                                            ">
                                                Learn More
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </Link>
                        );
                    })}
                </div>
            </motion.div>
        </motion.div>
    )
}

export default Services