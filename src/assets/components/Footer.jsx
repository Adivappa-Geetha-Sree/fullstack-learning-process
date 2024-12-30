import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";


const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-400 py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-around items-start md:items-center">
                    <div className="mb-6 md:mb-0">
                        <div className="text-white font-bold text-xl flex items-center space-x-2">
                            <span className="text-blue-400"><img
                                alt=""
                                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                                className="h-8 w-auto"
                            /></span>
                            <span className="sr-only">Your Logo</span>
                        </div>
                        <p className="mt-2 text-sm">
                            Making the world a better place through constructing elegant
                            hierarchies.
                        </p>
                        <div className="flex space-x-4 mt-4">
                        <a href="#" aria-label="Facebook" className="hover:text-white">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" aria-label="Instagram" className="hover:text-white">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" aria-label="Twitter" className="hover:text-white">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" aria-label="GitHub" className="hover:text-white">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="#" aria-label="YouTube" className="hover:text-white">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div>
                            <h6 className="font-semibold text-white mb-2">Solutions</h6>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <a href="#" className="hover:text-white">
                                        Marketing
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white">
                                        Analytics
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white">
                                        Automation
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white">
                                        Commerce
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white">
                                        Insights
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h6 className="font-semibold text-white mb-2">Support</h6>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <a href="#" className="hover:text-white">
                                        Submit Ticket
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white">
                                        Documentation
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white">
                                        Guides
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h6 className="font-semibold text-white mb-2">Company</h6>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <a href="#" className="hover:text-white">
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white">
                                        Blog
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white">
                                        Jobs
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white">
                                        Press
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h6 className="font-semibold text-white mb-2">Legal</h6>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <a href="#" className="hover:text-white">
                                        Terms of Service
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white">
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white">
                                        License
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-4 text-center text-xs">
                    © 2024 Your Company, Inc. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
