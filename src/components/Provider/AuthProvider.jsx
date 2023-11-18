import { createContext, useEffect, useState } from "react";
import { useRegister } from "../../hooks/useRegister";
import { useLogin } from "../../hooks/useLogin";

export const AuthContext= createContext()

const AuthProvider = ({children}) => {
    const {register} = useRegister()
    const {login} = useLogin()

    const [user, setUser] = useState(false)

    useEffect(() => {

        if (register.password.length >= 6 && register.email.length >= 3) {
            setUser(true)
        } else if (login.auth == true) {
            setUser(true)
        } else {
            setUser(false)
        }
    }, [register, login])

    return (
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;