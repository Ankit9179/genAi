import React, { useContext } from 'react'
import { Mycontext } from '../context/AppContext';


const Button = ({ text }) => {
    const { setShowLogin } = useContext(Mycontext);

    return (
        <button onClick={() => setShowLogin(true)} className="btn btn-neutral hover:bg-gray-400 font-bold">{text}</button>
    )
}

export default Button

