import React, { use, useState } from 'react'
import Button from './Button'
import { useNavigate } from 'react-router-dom'

const NaveBar = () => {
    const [user, setUser] = useState(false)
    const navigater = useNavigate()
    return (
        <div className="navbar bg-base-100 shadow-sm flex justify-around px-22 ">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">GenAi</a>
            </div>
            {
                user ? <div className="flex justify-center items-center gap-2 ">
                    <span className='text- font-semibold mr-2 '>Credits left: 3</span>
                    <p>Hi,Ankit</p>
                    <div className='relative group'>
                        <div className="avatar ml-2">
                            <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <div className='absolute hidden group-hover:block top-0 right-0 text-black rounded pt-12'>
                            <ul>
                                <li><Button text={"LOGOUT"} /></li>
                            </ul>
                        </div>
                    </div>
                </div> : <div className="flex-none">
                    <span onClick={() => navigater('/buy')} className='font-semibold mr-2 '>Prising</span>
                    <Button text={"LOGIN"} />
                </div>
            }

        </div>)
}

export default NaveBar