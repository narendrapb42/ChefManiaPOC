import NavBar from "./NavBar";
import {Formik, Field, Form} from 'formik'
import img from '../Images/ChefImage.png'
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import gsap from "gsap";
import axios from "axios";
import { Warning } from "@mui/icons-material";

export default function CookForm(){
    const [success, setSuccess] = useState('')
    const [formErrors, setFormErrors] = useState('')

    useEffect(()=>{
        gsap.fromTo('.cook-img',{scale:0},{scale:1,ease:'bounce'})
    })

    useEffect(()=>{
        const time = setTimeout(()=>{
            setFormErrors(null)
        },2000) 
        return ()=>clearTimeout(time)
    },[formErrors])


    useEffect(()=>{
        const time = setTimeout(()=>{
            setSuccess('')
        },1500)
    },[success])

    return(
        <>
           <NavBar/>
           <div className='signup'>
            <div className="signuptxt cookform">
                <h1>Cook With Us!</h1>
                {formErrors && <div className="error-container">
                                <Warning></Warning><p>{formErrors}</p>
                            </div>}
                {success && <div className="success-container" style={{width:'fit-content'}}>
                <p>{success}</p>
            </div>}
            </div>
             
            <div className="form-container">
               
                <Formik initialValues={{name:'',contact:'',email:'',message:''}} onSubmit={async(values,{resetForm})=>{

                    if(values.name === '' || values.contact === '' || values.email === '' || values.message === ''){
                        setFormErrors('Please provide all values')
                        return
                    }
                    try{
                        const response = await axios.post('http://localhost:5000/cookform',values)
                        setSuccess(response.data.msg)
                        resetForm()
                    }catch(err){
                        console.log(err)
                    }
                   

                    
                }}>
                    <Form>
                        <motion.div className="input-fields">
                            <label>Name:</label><Field name="name" type="text"></Field>
                            <label>Contact:</label><Field name="contact" type="text"></Field>
                            <label>Email:</label><Field name="email" type="email"></Field>
                            <label>Message for us : ) :</label><Field name="message" type="text"></Field>
                        </motion.div>
                        <div className="btn-container">
                            <motion.button whileHover={{scale:1.2}} transition = {{type:'spring'}} type='submit' className='btn'>Cook</motion.button>
                            </div>
                    </Form>
                </Formik>
                <img src={img} className="cook-img"></img>
               
            </div>
          
        </div>
        </>
    )
}