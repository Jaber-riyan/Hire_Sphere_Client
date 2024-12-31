import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gray-100 text-gray-700 text-sm pt-10 pb-4">
            <div className="container mx-auto px-6">
                {/* Grid Layout for Footer */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    {/* About Section */}
                    <div className="">
                        <h2 className="font-bold text-xl text-gray-900 mb-4">HireSphere</h2>
                        <p className="mb-4">
                            HireSphere is the heart of the design community and the best resource
                            to discover and connect with designers and jobs worldwide.
                        </p>
                        {/* Social Media Icons */}
                        <div className="flex space-x-4">
                            <Link
                                to="#"
                                className="text-blue-500 hover:text-blue-700 animate__animated animate__fadeIn"
                            >
                                <FaFacebookF size={20} />
                            </Link>
                            <Link
                                to="#"
                                className="text-blue-400 hover:text-blue-600 animate__animated animate__fadeIn"
                            >
                                <FaTwitter size={20} />
                            </Link>
                            <Link
                                to="#"
                                className="text-blue-700 hover:text-blue-900 animate__animated animate__fadeIn"
                            >
                                <FaLinkedinIn size={20} />
                            </Link>
                        </div>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="font-semibold mb-4 text-gray-900">Resources</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/about" className="hover:text-blue-600">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/team" className="hover:text-blue-600">
                                    Our Team
                                </Link>
                            </li>
                            <li>
                                <Link to="/products" className="hover:text-blue-600">
                                    Products
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="hover:text-blue-600">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Community */}
                    <div>
                        <h3 className="font-semibold mb-4 text-gray-900">Community</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/feature" className="hover:text-blue-600">
                                    Feature
                                </Link>
                            </li>
                            <li>
                                <Link to="/pricing" className="hover:text-blue-600">
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link to="/credit" className="hover:text-blue-600">
                                    Credit
                                </Link>
                            </li>
                            <li>
                                <Link to="/faq" className="hover:text-blue-600">
                                    FAQ
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold mb-4 text-gray-900">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/ios" className="hover:text-blue-600">
                                    iOS
                                </Link>
                            </li>
                            <li>
                                <Link to="/android" className="hover:text-blue-600">
                                    Android
                                </Link>
                            </li>
                            <li>
                                <Link to="/microsoft" className="hover:text-blue-600">
                                    Microsoft
                                </Link>
                            </li>
                            <li>
                                <Link to="/desktop" className="hover:text-blue-600">
                                    Desktop
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Download App Section */}
                    <div>
                        <h3 className="font-semibold mb-4 text-gray-900">Download App</h3>
                        <p className="mb-4">
                            Download our Apps and get an extra 15% discount on your first
                            order...!
                        </p>
                        <div className="flex space-x-2">
                            <Link to="/appstore">
                                <img
                                    src="https://via.placeholder.com/120x40?text=App+Store"
                                    alt="App Store"
                                    className="hover:scale-105 transition-transform"
                                />
                            </Link>
                            <Link to="/googleplay">
                                <img
                                    src="https://via.placeholder.com/120x40?text=Google+Play"
                                    alt="Google Play"
                                    className="hover:scale-105 transition-transform"
                                />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t mt-8"></div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center mt-6">
                    <p>&copy; 2024 HireSphere. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link to="/privacy-policy" className="hover:text-blue-600">
                            Privacy Policy
                        </Link>
                        <Link to="/terms" className="hover:text-blue-600">
                            Terms & Conditions
                        </Link>
                        <Link to="/security" className="hover:text-blue-600">
                            Security
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
