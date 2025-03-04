import React from 'react';

const Footer = () => {
    return (
        <footer className=" text-black py-6 mt-10">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                {/* Left - Brand Name */}
                <div className="text-lg font-semibold">GenAi © {new Date().getFullYear()}</div>

                {/* Center - Links */}
                <div className="flex space-x-6 my-4 md:my-0">
                    <a href="/about" className="hover:text-gray-400 transition">About</a>
                    <a href="/contact" className="hover:text-gray-400 transition">Contact</a>
                    <a href="/privacy" className="hover:text-gray-400 transition">Privacy Policy</a>
                </div>

                {/* Right - Social Icons */}
                <div className="flex space-x-4">
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <img src="https://cdn-icons-png.flaticon.com/512/733/733635.png" alt="Twitter" className="w-5 h-5" />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" className="w-5 h-5" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" alt="LinkedIn" className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
