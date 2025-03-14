import React, { useContext, useEffect, useState } from 'react'
import { Mycontext } from '../context/AppContext';
import axios from 'axios'
import { toast } from 'react-toastify';

const Login = () => {
    const [state, setState] = useState("Login")
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    //for restrict scrolling 
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        }
    }, [])

    const { setShowLogin, backendUrl, setToken, setUser } = useContext(Mycontext)

    //state and api calling and manage
    const handlerFunction = async (e) => {
        e.preventDefault()
        try {
            if (state === "Login") {
                const { data } = await axios.post(backendUrl + '/api/v1/user/login', { email, password })
                if (data.success) {
                    setToken(data.token)
                    setUser(data.user)
                    localStorage.setItem("token", data.token)
                    setShowLogin(false)
                    toast.success("You are logged successfully")
                } else (
                    toast.error(data.message)
                )
            } else {
                const { data } = await axios.post(backendUrl + '/api/v1/user/register', { name, email, password })
                if (data.success) {
                    setToken(data.token)
                    setUser(data.user)
                    localStorage.setItem("token", data.token)
                    setShowLogin(false)
                    toast.success("You are registered successfully")
                } else (
                    toast.error(data.message)
                )
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    return (
        <div className='fixed left-0 ring-0 top-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center w-full'>
            <from onSubmit={handlerFunction}>
                <section className="rounded-md p-2 bg-white">
                    <div className='text-end justify-end items-end'>
                        <span onClick={() => setShowLogin(false)} className='  text-2xl font-bold text-black cursor-pointer mr-2 '>X</span>
                    </div>
                    <div className="flex items-center justify-center my-3">
                        <div className="xl:mx-auto shadow-md p-4 xl:w-full xl:max-w-sm 2xl:max-w-md">
                            <div className="mb-2"></div>
                            <h2 className="text-2xl font-bold text-black leading-tight text-center">
                                {state}
                            </h2>
                            <form className="mt-5" >
                                <div className="space-y-4">
                                    {
                                        state !== "Login" && <div>
                                            <label className="text-base font-medium text-gray-900">
                                                User Name
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    onChange={e => setName(e.target.value)} value={name}
                                                    placeholder="Full Name"
                                                    type="text"
                                                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                    name="user_name"
                                                />
                                            </div>
                                        </div>
                                    }
                                    <div>
                                        <label className="text-base font-medium text-gray-900">
                                            Email address
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                onChange={e => setEmail(e.target.value)} value={email}
                                                placeholder="Email"
                                                type="email"
                                                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                name="email"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-center justify-between">
                                            <label className="text-base font-medium text-gray-900">
                                                Password
                                            </label>
                                        </div>
                                        <div className="mt-2">
                                            <input
                                                onChange={e => setPassword(e.target.value)} value={password}
                                                placeholder="Password"
                                                type="password"
                                                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                name="password"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <a className='text-blue-500 cursor-pointer mb-4' href="">Forgot password?</a>
                                        {state !== "Login" ? <p className="mt-2 text-base text-gray-600">
                                            Already have an account? <span onClick={() => setState("Login")} className='text-blue-500 cursor-pointer'>Sign In</span>
                                        </p> :
                                            <p className="mt-2 text-base text-gray-600">
                                                Dont have an account? <span onClick={() => setState("Sign Up")} className='text-blue-500 cursor-pointer'>Sign Up</span>
                                            </p>}
                                        <button
                                            className=" cursor-pointer mt-4 inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                                            type="submit"
                                        >
                                            {state === "Login" ? "login" : "Create Account"}
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </from>
        </div>
    )
}

export default Login