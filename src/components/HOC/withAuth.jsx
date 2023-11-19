import { useContext } from "react"
import NotAuth from "../screens/NotAuthPg/NotAuth"
import { AuthContext } from "../Provider/AuthProvider"
import { Navigate } from "react-router-dom"

export const withAuth = (Component) => (props) => {
    const {user} = useContext(AuthContext)

    if (!user) return <Navigate to={'/none-auth'}/>

    return <Component {...props} />
}