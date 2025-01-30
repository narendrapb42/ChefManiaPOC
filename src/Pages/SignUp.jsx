import {Formik, Field, Form} from 'formik'
import logo from '../Images/ChefManiaLogo.png'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Warning } from '@mui/icons-material'
import CheckIcon from '@mui/icons-material/Check';
import axios from 'axios'
import { toggleUserLog } from '../Slices/chefSlice'
import { useDispatch, useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import { CircularProgress } from '@mui/material'

export default function SignUp(){
    const [formErrors, setFormErrors] = useState('')
    const [formSuccess, setFormSuccess] = useState('')
    const dispatch = useDispatch()
    const {isUserLoggedIn} = useSelector((state)=>state.chefReducer)
    const navigate = useNavigate()
    console.log(isUserLoggedIn)

    useEffect(()=>{
        const time = setTimeout(()=>{
            setFormErrors(null)
        },2000) 
        return ()=>clearTimeout(time)
    },[formErrors,isUserLoggedIn])

    useEffect(()=>{
        const time = setTimeout(()=>{
            setFormSuccess('')
        },1500)
    },[formSuccess])

    return (
        <div className='signup'>
            <img src={logo} className='logo'></img>
            <div className="signuptxt">
                <h1>Login or register</h1>
                {formErrors && <div className="error-container">
                <Warning></Warning><p>{formErrors}</p>
            </div>}
            {formSuccess && <div className="success-container">
                <CheckIcon></CheckIcon><p>{formSuccess}</p>
            </div>}
            </div>
          
            <div className="form-container">
               
                <Formik initialValues={{name:'',email:'',password:''}} onSubmit={async(values , {resetForm})=>{
                    if(values.name === '' || values.email === '' || values.password === ''){
                        setFormErrors('Please provide all values')
                        return
                    }
                    if(values.name.length<3 || values.password.length<3){
                        setFormErrors('Either name or password should have more than 3 characters')
                        return
                    }
                    try{
                        const response = await axios.post('http://localhost:5000/usersignup',values)
                        console.log(response);
                        dispatch(toggleUserLog(true))
                        localStorage.setItem('login',isUserLoggedIn)
                        setFormSuccess(response.data.msg)
                        resetForm()

                        setTimeout(()=>{
                            navigate('/home')
                        },2000)

                    }catch(err){
                        setFormErrors(err.response.data.msg)
                        console.log(err)
                    }
                    
                }}>
                 {({isSubmitting})=><Form>
                        <div className="input-fields">
                            <label>Name:</label><Field name="name"></Field>
                            <label>Email:</label><Field name="email" type="email"></Field>
                            <label>Password:</label><Field name="password" type="password"></Field>
                        </div>
                        <motion.div className="btn-container">
                            <motion.button whileHover={{scale:1.1,color:'gray'}} 
                                transition={{type:'spring'}} 
                                type='submit' 
                                className='btn'>{isSubmitting ? <CircularProgress></CircularProgress>: 'Sign Up'}
                            </motion.button>
                        </motion.div>
                        <p>Already Have an Account?. <Link to='/login'>Login</Link></p>
                    </Form>}
                </Formik>
                <h1 className='hero-text'>Chef <br></br>Mania</h1>
               
            </div>
          
        </div>
    )
}