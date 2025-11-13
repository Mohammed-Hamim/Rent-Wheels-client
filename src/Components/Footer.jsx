import React from 'react';
import logo from '../assets/rentWheelsLogo.png'
import { FaFacebook } from 'react-icons/fa';
import { FaSquareInstagram, FaSquareXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (

        <footer className="bg-gray-950 text-gray-200 py-12">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">

                    {/* Logo + Website Name */}
                    <div className="flex flex-col items-start">
                        <img
                            src={logo}
                            alt="RentWheels Logo"
                            className="w-24 mb-3"
                        />
                        <h1 className="text-2xl font-bold text-primary">RentWheels</h1>
                        <p className="text-gray-400 mt-2 max-w-xs">
                            Your reliable partner for car rentals. Premium cars, top-rated services, and seamless bookings.
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-4">Contact Info</h3>
                        <ul className="text-gray-400 space-y-2">
                            <li>📧 Email: support@rentwheels.com</li>
                            <li>📞 Phone: +1 (555) 123-4567</li>
                            <li>📍 Address: 123 Main Street, San Francisco, CA</li>
                        </ul>
                    </div>

                    {/* Terms & Social */}
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
                        <ul className="text-gray-400 space-y-2">
                            <li>
                                <a href="#" className="hover:text-blue-400 transition-colors duration-300">
                                    Terms & Conditions
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-400 transition-colors duration-300">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-400 transition-colors duration-300">
                                    FAQ
                                </a>
                            </li>
                        </ul>

                        {/* Social Media */}
                        <div className="flex mt-6 space-x-4">
                            <a href="#" className="text-gray-400 hover:text-blue-500 transition duration-300">
                                <FaFacebook size={30} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-sky-400 transition duration-300">
                                <FaSquareXTwitter size={30} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-pink-500 transition duration-300">
                                <FaSquareInstagram size={30} />
                            </a>
                        </div>
                    </div>

                </div>

                {/* Bottom copyright */}
                <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
                    &copy; 2025 RentWheels. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;