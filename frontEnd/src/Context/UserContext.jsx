import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const  UserContext=createContext()


const UserContextProvider=(props)=>{
    const backendUrl=import.meta.env.VITE_BACKEND_URL
    
   
    const [open,setOpen]=useState(localStorage.getItem('open')? localStorage.getItem('open'):'')
    const [token,setToken]=useState(localStorage.getItem('token')? localStorage.getItem('token'):'')
    const navigate=useNavigate()
    //all values
    const value={open, setOpen, navigate, token,setToken,backendUrl}
    return(
        <UserContext.Provider value={value}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider