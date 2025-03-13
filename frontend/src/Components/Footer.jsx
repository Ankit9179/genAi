import React from 'react';

const Footer = () => {
    return (
        <footer className=" text-black py-6 mt-10">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                {/* Left - Brand Name */}
                <div className="text-lg font-semibold">GenAi © {new Date().getFullYear()}</div>

                {/* Center - Links */}
                <div className="flex space-x-6 my-4 md:my-0">
                    <a href="/" className="hover:text-gray-400 transition">About</a>
                    <a href="tel:+7828092738" className="hover:text-gray-400 transition">Contact</a>
                    <span className="hover:text-gray-400 transition">testankit06@gmail.com
                    </span>
                </div>

                {/* Right - Social Icons */}
                <div className="flex space-x-4">
                    <a href="https://github.com/Ankit9179" target="_blank" rel="noopener noreferrer">
                        <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png"
                            alt="github" className="w-5 h-5" />
                    </a>
                    <a href="https://www.instagram.com/ak_vampire12/" target="_blank" rel="noopener noreferrer">
                        <img src="https://cdn-icons-png.flaticon.com/512/733/733558.png" alt="instagram" className="w-5 h-5" />
                    </a>
                    <a href="https://www.linkedin.com/in/ankit-rahi-563752258/" target="_blank" rel="noopener noreferrer">
                        <img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" alt="LinkedIn" className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
