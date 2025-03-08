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
        <div className="min-h-screen flex flex-col items-center justify-center px-4">
            <header className="text-center my-8">
                <h1 className="text-4xl font-bold text-gray-800">Welcome to GenAi</h1>
                <p className="text-lg text-gray-600 mt-2">Your AI-powered assistant for all your needs.</p>
            </header>

            <section className="max-w-3xl text-center">
                <p className="text-gray-700 text-lg leading-relaxed">
                    GenAi is designed to help you with various tasks, from answering questions to generating creative content.
                    Whether you're a developer, writer, or just someone looking for assistance, GenAi has got you covered.
                    GenAi is designed to help you with various tasks, from answering questions to generating creative content.
                    Whether you're a developer, writer, or just someone looking for assistance, GenAi has got you covered.
                    GenAi is designed to help you with various tasks, from answering questions to generating creative content.
                    Whether you're a developer, writer, or just someone looking for assistance, GenAi has got you covered.
                </p>
            </section>

            <button onClick={handleFunction} className="cursor-pointer mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all">
                Get Started
            </button>
        </div>
    );
};

export default Header;
