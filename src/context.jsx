

import { createContext,useState } from "react";
export const Context=createContext();
export function UserProvider ({children}){
   
    const [userData,setUserData]=useState({username:"",password:""});
    const [theme,setTheme]=useState();
    const [font,setFont]=useState('serif');
    return (
        <Context.Provider value={{userData,setUserData,theme,setTheme,font,setFont}}>
            {children}
        </Context.Provider>
    );
}
