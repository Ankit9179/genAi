// import React, { useContext } from 'react';
// import Button from './Button';
// import { useNavigate } from 'react-router-dom';
// import { Mycontext } from '../context/AppContext';

// const NaveBar = () => {
//     const { user, setShowLogin, credit, logOutFunction } = useContext(Mycontext);
//     const navigate = useNavigate();

//     return (
//         <div className="navbar shadow-sm flex justify-between px-4 md:px-8 lg:px-16 items-center">
//             <div className="flex-1">
//                 <img className='w-[30px] inline md:w-[90px] sm:w-[70px]' src="logo.png" alt="" />
//                 <b onClick={() => navigate('/')} className="text-xl font-bold text-black">GenAi</b>
//             </div>
//             {user ? (
//                 <div className="flex items-center gap-2">
//                     <b onClick={() => navigate('/buy')} className='cursor-pointer text-sm font-bold text-black mr-2'>Credits left: {credit}</b>
//                     <p className="font-bold text-black block sm:inline">Hi, {user.name}</p>
//                     <div className='relative group'>
//                         <div className="avatar ml-2">
//                             <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
//                                 <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="User Avatar" />
//                             </div>
//                         </div>
//                         <div className='absolute hidden group-hover:block top-full right-0 bg-white shadow-md rounded p-2'>
//                             <ul>
//                                 {/* <li><Button onClick={logOutFunction} text="LOGOUT" /></li> */}
//                                 <button onClick={logOutFunction}>LOGOUT</button>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             ) : (
//                 <div className="flex items-center gap-2">
//                     <p onClick={() => navigate('/buy')} className='font-semibold text-black text-center mr-2 cursor-pointer'>Pricing</p>
//                     <Button text="LOGIN" />
//                 </div>
//             )}
//         </div>
//     );
// };

// export default NaveBar;


import React, { useContext, useState } from 'react';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import { Mycontext } from '../context/AppContext';
import DropDownComponent from './DropDownComponent';

const NaveBar = () => {
    const { user, setShowLogin, credit, logOutFunction } = useContext(Mycontext);
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false); // Track menu visibility

    return (
        <div className="navbar shadow-sm flex justify-between px-4 md:px-8 lg:px-16 items-center">
            <div className="flex-1">
                <img className='w-[30px] inline md:w-[90px] sm:w-[70px]' src="logo.png" alt="" />
                <b onClick={() => navigate('/')} className="text-xl font-bold text-black">GenAi</b>
                <DropDownComponent />
            </div>
            {user ? (
                <div className="flex items-center gap-2">
                    <b onClick={() => navigate('/buy')} className='cursor-pointer text-sm font-bold text-black mr-2'>Credits left: {credit}</b>
                    <p className="font-bold text-black block sm:inline">Hi, {user.name}</p>

                    {/* Clickable Dropdown for log out */}
                    <div className="relative">
                        <div className="avatar ml-2 cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
                            <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="User Avatar" />
                            </div>
                        </div>

                        {/* Dropdown Menu (Visible when menuOpen is true) */}
                        {menuOpen && (
                            <div className='absolute top-full right-0 bg-white shadow-md rounded p-2'>
                                <ul>
                                    <li>
                                        <button onClick={logOutFunction} className="px-4 py-2 block w-full text-left hover:bg-gray-100">LOGOUT</button>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            ) : (
                <div className="flex items-center gap-2">
                    <p onClick={() => navigate('/buy')} className='font-semibold text-black text-center mr-2 cursor-pointer'>Pricing</p>
                    <Button text="LOGIN" />
                </div>
            )}
        </div>
    );
};

export default NaveBar;
