import axios from "axios";
import { createContext, useEffect, useState, } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


//constext variable
export const Mycontext = createContext()


//context function
const AppContextProvider = (props) => {
    //state of this constext function
    const [user, setUser] = useState(false)
    const [showLogin, setShowLogin] = useState(false)
    const [token, setToken] = useState(localStorage.getItem("token"))
    const [credit, setCredit] = useState(false)

    //getting backend url from .env file
    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const navigate = useNavigate()

    //getting credit balance from the backend api
    const creditBalanceFunction = async () => {
        try {
            const { data } = await axios.get(backendUrl + "/api/v1/user/credits", {
                headers: { token }
            })
            if (data.success) {
                setCredit(data.credits)
                setUser(data.user)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    //call the fetching balance data 
    useEffect(() => {
        if (token) {
            creditBalanceFunction()
        } else {
            navigate('/')
        }
    }, [token])

    //logUot function
    const logOutFunction = () => {
        localStorage.removeItem("token")
        setToken("")
        setUser(null)
        toast.success("")
        toast.success("You are logOut successfully")
    }

    //image  generate function
    const imageGenerateFunction = async (prompt) => {
        try {
            const { data } = await axios.post(backendUrl + '/api/v1/image/generate-image', { prompt }, { headers: { token } })
            if (data) {
                creditBalanceFunction();
                return data.resultImage
            } else {
                toast.error(data.message)
                creditBalanceFunction()
                if (data.creditBalance === 0) {
                    navigate('/buy')
                }
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    //value object which cantaining variable and function
    const value = {
        user, setUser, showLogin, setShowLogin,
        backendUrl, token, setToken, credit, setCredit,
        creditBalanceFunction, logOutFunction,
        imageGenerateFunction
    }
    return (
        <Mycontext.Provider value={value}>
            {props.children}
        </Mycontext.Provider>
    )
}

export default AppContextProvider