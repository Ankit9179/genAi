import React from 'react'

const Button = ({ text }) => {
    return (
        <button className="btn btn-neutral hover:bg-gray-400 font-bold">{text}</button>
    )
}

export default Button

