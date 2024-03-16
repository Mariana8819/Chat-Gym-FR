import { createContext, useEffect, useState } from "react";
import {auth} from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null)
    
    useEffect(()=>{
        console.log("antes de llamar a onAuthStateChanged");
      const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
           console.log("Usuario autenticado:", user)
        },(error)=>{
            console.error("error de autenticación:", error);
        });
console.log("despues de llamar a onAthStateChanged");
        //limpia el suscriptor cuando el componente se desmonta o cuando cambia el usuario
        return () => {
            unsubscribe();
        }
        },[]);
 
    return(
    <AuthContext.Provider value={{currentUser}}>
        {children}
    </AuthContext.Provider>
    );
};
    