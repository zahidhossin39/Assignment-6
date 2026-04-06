import React from 'react';
import { FaYoutube, FaFacebook } from 'react-icons/fa6';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#1b1e2e', color: '#cbd5e1' }} className="px-6 md:px-16 pt-14 pb-6">

            {/* Top Section */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-10 border-b border-gray-700">

                {/* Brand */}
                <div className="md:col-span-1">
                    <h2 className="text-white text-2xl font-bold mb-3">DigiTools</h2>
                    <p className="text-sm text-gray-400 leading-relaxed">
                        Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
                    </p>
                </div>

                {/* Product */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Product</h3>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
                    </ul>
                </div>

                {/* Company */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Company</h3>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                    </ul>
                </div>

                {/* Resources */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Resources</h3>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                    </ul>
                </div>

                {/* Social Links */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Social Links</h3>
                    <div className="flex gap-3">
                        <a
                            href="#"
                            className="w-9 h-9 rounded-full flex items-center justify-center transition-opacity hover:opacity-75"
                            style={{ backgroundColor: '#2d3148' }}
                        >
                            <FaYoutube className="text-white text-base" />
                        </a>
                        <a
                            href="#"
                            className="w-9 h-9 rounded-full flex items-center justify-center transition-opacity hover:opacity-75"
                            style={{ backgroundColor: '#2d3148' }}
                        >
                            <FaFacebook className="text-white text-base" />
                        </a>
                        <a
                            href="#"
                            className="w-9 h-9 rounded-full flex items-center justify-center transition-opacity hover:opacity-75"
                            style={{ backgroundColor: '#2d3148' }}
                        >
                            <FaXTwitter className="text-white text-base" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between pt-6 text-xs text-gray-500 gap-3">
                <p>© 2026 Digitools. All rights reserved.</p>
                <div className="flex gap-5">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    <a href="#" className="hover:text-white transition-colors">Cookies</a>
                </div>
            </div>

        </footer>
    );
};

export default Footer;