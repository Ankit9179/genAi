import React, { useContext } from "react";
import { auth, provider, signInWithPopup } from "./firebaseConfig.js";
import { toast } from 'react-toastify';
import axios from "axios";
import { Mycontext } from '../context/AppContext.jsx';
import SignWithGoogleButton from "./SignWithGoogleButton.jsx";

const LoginWithGoogleBtn = () => {
    const { setShowLogin, backendUrl, setToken, setUser } = useContext(Mycontext);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const result = await signInWithPopup(auth, provider);
            if (result.user) {
                const userData = {
                    name: result.user.displayName,
                    email: result.user.email,
                    password: "123firebase"
                };

                // Register or login
                const registerResponse = await axios.post(`${backendUrl}/api/v1/user/register`, userData);

                if (registerResponse.data.success || registerResponse.data.message === "User Already Exist") {
                    const loginResponse = await axios.post(`${backendUrl}/api/v1/user/login`, {
                        email: result.user.email,
                        password: "123firebase"
                    });

                    if (loginResponse.data.success) {
                        setToken(loginResponse.data.token);
                        setUser(loginResponse.data.user);
                        localStorage.setItem("token", loginResponse.data.token);
                        setShowLogin(false);
                        toast.success("You are logged in successfully");
                    } else {
                        toast.error(loginResponse.data.message);
                    }
                } else {
                    toast.error(registerResponse.data.message);
                }
            } else {
                toast.error("Google sign-in failed");
            }
        } catch (error) {
            toast.error(`Google Sign-In Error: ${error.message}`);
        }
    };

    return (
        <div>
            {/* <button  onClick={handleLogin}>Login with Google</button> */}
            <SignWithGoogleButton handleLogin={handleLogin} />
        </div>
    );
};

export default LoginWithGoogleBtn;
