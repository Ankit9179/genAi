import React from 'react';
import pic from '../assets/description.png'

const Description = () => {
    return (
        <>

            <h1 className='font-bold text-center text-3xl'>About GenAi</h1>
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
                    <h2 className="text-3xl font-bold text-gray-800">Welcome to GenAi</h2>
                    <p className="text-lg text-gray-600 mt-4">
                        GenAi is an advanced AI-powered platform that helps you generate content, automate tasks,
                        and enhance productivity. Whether you're a developer, writer, or business owner,
                        GenAi provides intelligent solutions to make your work easier and more efficient.
                    </p>
                </div>
            </div>
        </>
    );
};

export default Description;
