import { useContext } from "react";
import { Mycontext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const HowToUse = () => {
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
            <section className="max-w-4xl mt-10">
                <h2 className="text-2xl font-semibold text-gray-800 text-center">How to Use GenAi</h2>
                <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4 text-center">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold">Step 1</h3>
                        <p className="text-gray-600 mt-2">Sign up and create your account.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold">Step 2</h3>
                        <p className="text-gray-600 mt-2">Choose your desired service or tool.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold">Step 3</h3>
                        <p className="text-gray-600 mt-2">Input your query or upload required files.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold">Step 4</h3>
                        <p className="text-gray-600 mt-2">Get results instantly and refine as needed.</p>
                    </div>
                </div>
            </section>

            <button onClick={handleFunction} className=" cursor-pointer mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all">
                Let's Go
            </button>
        </div>
    );
};

export default HowToUse;
