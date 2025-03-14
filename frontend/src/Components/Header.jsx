import React, { useContext } from 'react';
import { Mycontext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const { user, setShowLogin } = useContext(Mycontext)
    const navigate = useNavigate()
    const handleFunction = () => {
        if (!user) {
            setShowLogin(true)
        } else {
            navigate('/result')
        }
    }
    return (
        <div className=" flex flex-col items-center justify-center mt-5 px-3">
            <header className="text-center my-8">
                <h1 className="text-4xl font-bold text-gray-800">Welcome to <span className='text-blue-600'>GenAi</span></h1>
                <p className="text-lg text-gray-600 mt-2">Your AI-Powered Creative Assistant.</p>
            </header>

            <section className="max-w-3xl text-center">
                <p className="text-gray-700 text-lg leading-relaxed">
                    GenAi is your go-to AI for generating stunning images from your prompts! Whether you're a designer, developer, writer, or just someone exploring creative possibilities, GenAi brings your ideas to life with AI-Generated visuals.
                    <br />
                    Simply enter a prompt, and watch as GenAi transforms your words into unique, high-quality images. From artistic illustrations to realistic renders, the possibilities are endless!
                </p>
                <br />
                <p className='font-bold text-black text-2xl'>🤖 Start creating with GenAi today and turn imagination into reality!</p>
            </section>

            <button onClick={handleFunction} className="cursor-pointer mt-6 px-6 py-3 bg-gray-600 text-black font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:text-white transition-all">
                Get Started
            </button>
        </div>
    );
};

export default Header;
