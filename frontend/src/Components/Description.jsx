import React from 'react';
import pic from '../assets/description.png'

const Description = () => {
    return (
        <>

            <b className='font-bold text-center text-3xl'>About GenAi</b>
            <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto mt-10 px-6 pb-4">
                {/* Left Side - Image */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <img
                        src={pic}
                        alt="Website Preview"
                        className="rounded-lg shadow-md w-full max-w-md"
                    />
                </div>

                {/* Right Side - Content */}
                <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-10 text-center md:text-left">
                    <h2 className="text-3xl font-bold text-black text-center">Welcome to GenAi</h2>
                    <p className="text-lg text-gray-600 mt-4 tracking-widest">
                        GenAi is an advanced AI-powered platform designed to reimagine history through stunning visuals. Whether it’s recreating lost moments, restoring old photographs, or visualizing ancient events, GenAi transforms text prompts into breathtaking images that bring the past to life.                    </p>
                </div>
            </div>
        </>
    );
};

export default Description;
