import { NavLink, useNavigate } from "react-router-dom";
import logo from '../Images/ChefManiaLogo.png'
import { useDispatch } from "react-redux";
import { toggleUserLog } from "../Slices/chefSlice";
import { Modal } from "@mui/material";
import { useState } from "react";
export default function NavBar(){
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [open, setOpen] = useState(false)
    return(
        <div className="nav-container">
        
                <img src={logo}  className='logo'></img>

            <div className="navlinks">
                <NavLink to='/home' style={({isActive})=>{return isActive ? {color:'black'}:{color:'gray'}}}>Home</NavLink>
                <NavLink to='/recipes' style={({isActive})=>{return isActive ? {color:'black'}:{color:'gray'}}}>Browse<br></br>Recipes</NavLink>
                <NavLink to='/blog' style={({isActive})=>{return isActive ? {color:'black'}:{color:'gray'}}}>Blog</NavLink>
                <NavLink to='/cookform' style={({isActive})=>{return isActive ? {color:'black'}:{color:'gray'}}}>Cook!</NavLink>
            </div>
            <div className="btn-container"><button type='submit' onClick={()=>{
                setOpen(true)
            }} className='btn'>Logout</button></div>
             <Modal open={open}>
                <div className="btn-container">
                    <p style={{color:'white'}}>Do you want to logout?</p>
                    <button className='btn' onClick={()=>{
                        localStorage.removeItem('login')
                        dispatch(toggleUserLog(false))
                        navigate('/')
                    }}>Yes</button>
                    <button className='btn' onClick={()=>{setOpen(false)}}>No</button>
                </div>
                
             </Modal>

        </div>
    )
}

