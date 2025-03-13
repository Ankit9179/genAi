import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-6xl font-bold text-gray-800">404</h1>
            <p className="text-xl text-gray-600 mt-4">Oops! The page you're looking for doesn't exist.</p>
            <button
                onClick={() => navigate(-1)}
                className="mt-6 px-6 py-2 bg-gray-600 text-black rounded-lg hover:bg-blue-700 hover:text-white transition"
            >
                Go Back
            </button>
        </div>
    );
};

export default NotFound;
