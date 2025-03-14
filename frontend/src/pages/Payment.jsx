import React, { useContext } from 'react';
import { Mycontext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const Payment = () => {
    const navigate = useNavigate()
    const CardData = [
        {
            plan: "Basic",
            for: "Best for student and others.",
            price: 50,
            creditsNumber: 5
        },
        {
            plan: "Advance",
            for: "Best for professionals.",
            price: 150,
            creditsNumber: 7
        },

        {
            plan: "Business",
            for: "Best for enterprise use.",
            price: 250,
            creditsNumber: 9
        }
    ];
    const { user, token, setShowLogin, backendUrl, creditBalanceFunction } = useContext(Mycontext)

    //init payment function
    const initPamentFunction = async (order) => {
        const options = {
            key: import.meta.env.VITE_RAZOR_PAY_KEY,
            amount: order.amount,
            currency: order.currency,
            name: "Credits Payment",
            description: "Credits Payment",
            order_id: order.id,
            recepit: order.recepit,
            handler: async (response) => {
                try {
                    const { data } = await axios.post(backendUrl + '/api/v1/user/verify-rozer', response, { headers: { token } })
                    if (data.success) {
                        creditBalanceFunction()
                        navigate('/')
                        toast.success("Credits Added !")
                    }
                } catch (error) {
                    toast.error(error.message)
                }
            }
        }


        const rzp = new window.Razorpay(options)
        rzp.open()
    }

    //razorpay functions
    const razorPayPaymentFunction = async (planId) => {
        // console.log(planId)
        try {
            if (!user) {
                navigate('/login')
            }

            //sending data to backend
            const { data } = await axios.post(backendUrl + '/api/v1/user/pay-rozer', { planId: planId }, { headers: { token } })
            if (data.success) {
                initPamentFunction(data.order)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }
    return (

        <div className=' flex flex-col justify-center items-center h-full gap-10 mt-16'>
            <button
                className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-indigo-500 rounded-md group"
            >
                <span
                    className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4"
                >
                    <span
                        className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                    ></span>
                </span>
                <span
                    className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4"
                >
                    <span
                        className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                    ></span>
                </span>
                <span
                    className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-600 rounded-md group-hover:translate-x-0"
                ></span>
                <span
                    className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white"
                >
                    Our Plans
                </span>
            </button>
            <h1 className='text-2xl text-black text-center font-bold'>Choose the plan</h1>

            <div className='card-container flex flex-col md:flex-row gap-4 flex-wrap justify-center items-center'>
                {CardData.map((e, index) => (
                    <div key={index} className="flex flex-col bg-white rounded-3xl p-6 shadow-lg hover:border-x-2">
                        <div className="px-6 py-8 sm:p-10 sm:pb-6">
                            <div className="grid items-center justify-center w-full grid-cols-1 text-left">
                                <div>
                                    <h2 className="text-lg font-medium tracking-tighter text-gray-600 lg:text-3xl">
                                        {e.plan}
                                    </h2>
                                    <p className="mt-2 text-sm text-gray-500">{e.for}</p>
                                </div>
                                <div className="mt-6">
                                    <p>
                                        <span className="text-5xl font-light tracking-tight text-black">
                                            ${e.price}
                                        </span>
                                        <span className="text-base font-medium text-gray-500"> / {e.creditsNumber} Credits </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex px-6 pb-8 sm:px-8">
                            <a onClick={() => razorPayPaymentFunction(e.plan)}
                                aria-describedby="tier-company"
                                className=" cursor-pointer flex items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
                            >
                                {
                                    user ? "Purchase" : "Get started"
                                }
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Payment;
