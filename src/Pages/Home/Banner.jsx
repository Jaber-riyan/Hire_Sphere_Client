import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const Banner = () => {
    return (
        <div className="w-full py-20 px-6 md:px-12 lg:px-20">
            {/* Container */}
            <div className="flex flex-col md:flex-row items-center gap-20 min-h-screen">
                {/* Left Section */}
                <div className="text-center md:text-left space-y-6 max-w-md md:max-w-lg lg:max-w-xl">
                    <motion.h1 whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }} className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                        The <motion.span
                        animate={{color: ['#055cb3', '#661dbf']}}
                        transition={{duration: 1.5, repeat: Infinity}}
                        >Easiest Way</motion.span> to Get Your New Job
                    </motion.h1>
                    <p className="text-gray-600 text-base md:text-lg">
                        Each month, more than 3 million job seekers turn to this website in their search for work, making over 140,000 applications every single day.
                    </p>

                    {/* Search Box */}
                    <div className="flex flex-col md:flex-row items-center justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-2">
                        <div className="flex items-center bg-white shadow rounded-lg w-full md:w-auto">
                            <select className="p-3 border-none outline-none text-gray-600 bg-transparent">
                                <option>Industry</option>
                                <option>IT</option>
                                <option>Marketing</option>
                                <option>Finance</option>
                            </select>
                        </div>
                        <div className="flex items-center bg-white shadow rounded-lg w-full md:w-auto">
                            <select className="p-3 border-none outline-none text-gray-600 bg-transparent">
                                <option>Location</option>
                                <option>Remote</option>
                                <option>Onsite</option>
                                <option>Hybrid</option>
                            </select>
                        </div>
                        <div className="flex items-center bg-white shadow rounded-lg w-full md:w-auto">
                            <input
                                type="text"
                                placeholder="Your keyword..."
                                className="p-3 outline-none border-none bg-transparent w-full"
                            />
                            <button className="bg-blue-600 text-white p-3 rounded-r-lg">
                                <FaSearch />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className="flex flex-col md:flex-row items-center gap-6 relative">
                    <motion.img
                        animate={{y:[0, 30, 0]}}
                        transition={{duration: 6, repeat: Infinity}}
                        src="https://i.ibb.co.com/JvBBV2M/banner1.png" 
                        alt="Team Collaboration"
                        className="shadow-lg w-[80%]"
                        onContextMenu={(e)=> e.preventDefault()}
                        draggable={false}
                    />
                    <motion.img
                        animate={{x:[0, -30, 0]}}
                        transition={{duration: 6, repeat: Infinity}}
                        src="https://i.ibb.co.com/BghhzhD/banner2.png" 
                        alt="Meeting Discussion"
                        className="lg:top-60 top-52 left-40 lg:w-[80%] w-[65%] lg:left-64 shadow-lg absolute"
                        onContextMenu={(e)=> e.preventDefault()}
                        draggable={false}
                    />
                </div>
            </div>


        </div>
    );
};

export default Banner;
