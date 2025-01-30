import {Formik, Field, Form} from 'formik'
import logo from '../Images/ChefManiaLogo.png'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Warning } from '@mui/icons-material'
import CheckIcon from '@mui/icons-material/Check';
import { setUserName } from '../Slices/chefSlice'

export default function Login(){
    const navigate = useNavigate()
    const [formErrors, setFormErrors] = useState('')
    const [formSuccess, setFormSuccess] = useState('')
    const {isUserLoggedIn} = useSelector((state)=>state.chefReducer)
    const dispatch = useDispatch()

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

    return(
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
               
                <Formik initialValues={{email:'',password:''}} onSubmit={async (values,{resetForm})=>{
                    if(values.email === '' || values.password === ''){
                        setFormErrors('Please provide all values')
                        return
                    }
                    try{
                        const response = await axios.post('http://localhost:5000/loginuser',values)
                        console.log(response)
                        localStorage.setItem('login',response.token)
                        setFormSuccess(response.data.msg)
                        dispatch(setUserName(response.data.name))
                        resetForm()
                        setTimeout(()=>{navigate('/home')},2500)
                        console.log(response.data)
                    }
                    catch(err){
                        setFormErrors(err.response.data.msg)
                        console.log(err)
                    }

                }}>
                    <Form>
                        <div className="input-fields">
                            <label>Email:</label><Field name="email" type="email"></Field>
                            <label>Password:</label><Field name="password" type="password"></Field>
                        </div>
                        <div className="btn-container"><button type='submit' className='btn'>Login</button></div>
                    </Form>
                </Formik>
                <h1 className='hero-text'>Chef <br></br>Mania</h1>
               
            </div>
          
        </div>
    )
}