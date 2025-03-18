import React from 'react'
import { useNavigate } from 'react-router-dom'

const DropDownComponent = () => {
    const navigate = useNavigate()
    return (
        <><div className="dropdown dropdown-start">
            <div tabIndex={0} role="button" className="btn m-1">⬇️</div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                <li onClick={() => navigate('/result')}><a>Generate pics with GenAi</a></li>
                <li onClick={() => navigate('/codereview')} > <a>Code review with GenAi</a></li>
            </ul>
        </div >
        </>
    )
}

export default DropDownComponent