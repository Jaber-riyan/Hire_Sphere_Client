import React from "react";
import { FaBullhorn, FaHeadset, FaLaptopCode, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";
import { SiBinance } from "react-icons/si";

const categories = [
    { id: 1, title: "Marketing & Sale", jobs: "1526 Jobs Available", icon: <FaBullhorn /> },
    { id: 2, title: "Customer Help", jobs: "185 Jobs Available", icon: <FaHeadset /> },
    { id: 3, title: "Finance", jobs: "168 Jobs Available", icon: <SiBinance /> },
    { id: 4, title: "Software", jobs: "1856 Jobs Available", icon: <FaLaptopCode /> },
    { id: 5, title: "Human Resource", jobs: "165 Jobs Available", icon: <FaUsers /> },
];

const BrowseByCategory = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            {/* Section Header */}
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">Browse by category</h2>
                <p className="text-gray-500 mt-2">
                    Find the job that's perfect for you. About <span className="font-semibold">800+ new jobs</span> every day
                </p>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-6">
                {categories.map((category, index) => (
                    <motion.div
                        key={category.id}
                        className="bg-white shadow-md rounded-md p-6 w-[220px] text-center cursor-pointer hover:bg-blue-100 transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <div className="text-4xl text-blue-500 mb-4 flex justify-center">{category.icon}</div>
                        <h3 className="text-lg font-semibold text-gray-700">{category.title}</h3>
                        <p className="text-gray-500 text-sm mt-2">{category.jobs}</p>
                    </motion.div>
                ))}
            </div>

            {/* Hiring Banner */}
            <motion.div
                className="bg-blue-50 shadow-lg rounded-md flex flex-col md:flex-row items-center justify-between p-6 mt-10"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
            >
                <div className="flex flex-col items-center md:items-start md:flex-row gap-4">
                    <img
                        src="https://via.placeholder.com/100x100"
                        alt="We are hiring"
                        className="w-20 h-20 md:w-24 md:h-24"
                    />
                    <div>
                        <h3 className="text-xl font-bold text-gray-800">WE ARE HIRING</h3>
                        <p className="text-gray-600 mt-2">Let's Work Together & Explore Opportunities</p>
                    </div>
                </div>
                <motion.button
                    className="mt-4 md:mt-0 bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                >
                    Apply now
                </motion.button>
            </motion.div>
        </div>
    );
};

export default BrowseByCategory;
