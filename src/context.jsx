import { createContext,useState } from "react";
export const Context=createContext();
export function UserProvider ({children}){
    const [userData,setUserData]=useState({username:"",password:""});
    return (
        <Context.Provider value={{userData,setUserData}}>
            {children}
        </Context.Provider>
    );
}
