import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

export default function ProtectedRoute({children}){

    // const {isUserLoggedIn} = useSelector((state)=>state.chefReducer)
    const isUser = localStorage.getItem('login')
    console.log(isUser)
    if(isUser){
        return <>{children}</>
    }else{
        return <Navigate to="/"></Navigate>
    }
  
}