import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Mycontext } from '../context/AppContext'

const Generate = () => {
    const navigate = useNavigate()
    const { user, setShowLogin } = useContext(Mycontext)
    const handleFunction = () => {
        if (!user) {
            setShowLogin(true)
        } else {
            navigate('/result')
        }
    }
    return (
        <div class="flex justify-center items-center gap-12 h-full my-12">
            <div
                class="bg-gradient-to-b from-stone-300/40 to-transparent p-[4px] rounded-[16px]"
            >
                <button
                    onClick={handleFunction}
                    class="group p-[4px] rounded-[12px] bg-gradient-to-b from-white to-stone-200/40 shadow-[0_1px_3px_rgba(0,0,0,0.5)] active:shadow-[0_0px_1px_rgba(0,0,0,0.5)] active:scale-[0.995]"
                >
                    <div
                        class="bg-gradient-to-b from-stone-200/40 to-white/80 rounded-[8px] px-2 py-2"
                    >
                        <div class="flex gap-2 items-center cursor-pointer">
                            <p className='font-bold text-black'>Generate Image from here !</p>
                            <b className="font-bold text-black">Get Started</b>
                        </div>
                    </div>
                </button>
            </div>
        </div>

    )
}

export default Generate