import React, { useContext } from 'react';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import { Mycontext } from '../context/AppContext';

const NaveBar = () => {
    const { user } = useContext(Mycontext);
    const navigate = useNavigate();

    return (
        <div className="navbar shadow-sm flex justify-between px-4 md:px-8 lg:px-16 items-center">
            <div className="flex-1">
                <a onClick={() => navigate('/')} className="btn btn-ghost text-xl">GenAi</a>
            </div>
            {user ? (
                <div className="flex items-center gap-2">
                    <span className='text-sm font-semibold mr-2'>Credits left: 3</span>
                    <p className="hidden sm:block">Hi, Ankit</p>
                    <div className='relative group'>
                        <div className="avatar ml-2">
                            <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="User Avatar" />
                            </div>
                        </div>
                        <div className='absolute hidden group-hover:block top-full right-0 bg-white shadow-md rounded p-2'>
                            <ul>
                                <li><Button text="LOGOUT" /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex items-center gap-2">
                    <span onClick={() => navigate('/buy')} className='font-semibold mr-2 cursor-pointer'>Pricing</span>
                    <Button text="LOGIN" />
                </div>
            )}
        </div>
    );
};

export default NaveBar;
