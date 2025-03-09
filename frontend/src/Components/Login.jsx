import React, { useContext, useEffect, useState } from 'react'
import { Mycontext } from '../context/AppContext';

const Login = () => {
    const [state, setState] = useState("Login")
    //for restrict scrolling 
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        }
    }, [])
    const { setShowLogin } = useContext(Mycontext)
    return (
        <div className='fixed left-0 ring-0 top-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center w-full'>
            <from>
                <section class="rounded-md p-2 bg-white">
                    <div className='text-end justify-end items-end'>
                        <span onClick={() => setShowLogin(false)} className='  text-2xl cursor-pointer mr-2 '>X</span>
                    </div>
                    <div class="flex items-center justify-center my-3">
                        <div class="xl:mx-auto shadow-md p-4 xl:w-full xl:max-w-sm 2xl:max-w-md">
                            <div class="mb-2"></div>
                            <h2 class="text-2xl font-bold leading-tight text-center">
                                {state}
                            </h2>
                            <form class="mt-5">
                                <div class="space-y-4">
                                    {
                                        state !== "Login" && <div>
                                            <label class="text-base font-medium text-gray-900">
                                                User Name
                                            </label>
                                            <div class="mt-2">
                                                <input
                                                    placeholder="Full Name"
                                                    type="text"
                                                    class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                    name="user_name"
                                                />
                                            </div>
                                        </div>
                                    }
                                    <div>
                                        <label class="text-base font-medium text-gray-900">
                                            Email address
                                        </label>
                                        <div class="mt-2">
                                            <input
                                                placeholder="Email"
                                                type="email"
                                                class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                name="email"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div class="flex items-center justify-between">
                                            <label class="text-base font-medium text-gray-900">
                                                Password
                                            </label>
                                        </div>
                                        <div class="mt-2">
                                            <input
                                                placeholder="Password"
                                                type="password"
                                                class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                name="password"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <a className='text-blue-500 cursor-pointer mb-4' href="">Forgot password?</a>
                                        {state !== "Login" ? <p class="mt-2 text-base text-gray-600">
                                            Already have an account? <span onClick={() => setState("Login")} className='text-blue-500 cursor-pointer'>Sign In</span>
                                        </p> :
                                            <p class="mt-2 text-base text-gray-600">
                                                Dont have an account? <span onClick={() => setState("Sign Up")} className='text-blue-500 cursor-pointer'>Sign Up</span>
                                            </p>}
                                        <button
                                            class=" cursor-pointer mt-4 inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                                            type="button"
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