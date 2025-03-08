import { createContext, useState } from "react";
//constext variable
export const Mycontext = createContext()
//context function
const AppContextProvider = (props) => {
    //state of this constext function
    const [user, setUser] = useState(false)
    const [showLogin, setShowLogin] = useState(false)

    //value object which cantaining variable and function
    const value = {
        user, setUser, showLogin, setShowLogin
    }
    return (
        <Mycontext.Provider value={value}>
            {props.children}
        </Mycontext.Provider>
    )
}

export default AppContextProvider