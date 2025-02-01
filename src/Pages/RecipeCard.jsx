import { CircularProgress, Rating } from "@mui/material"
import { useQuery } from "@tanstack/react-query"
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { addInstructions } from "../Slices/instructionSlice"
import { toggleFav } from "../Slices/chefSlice"
import { motion, stagger } from "framer-motion"
import { useEffect, useLayoutEffect } from "react"
import gsap from "gsap"

export default function RecipeCard(){
    const {search,fav} = useSelector((state)=>state.chefReducer)
    const token = localStorage.getItem('login')
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const fetchRecipe = async()=>{
        const response = await axios.get(`https://dummyjson.com/recipes/search?q=${search}`,{headers:{Authorization:`Bearer ${token}`}})
        return response.data.recipes
    }

    const{ data,isLoading,isFetching } = useQuery({
        queryKey:['recipes'],
        queryFn:fetchRecipe,
        refetchInterval:10000,
        refetchIntervalInBackground:true
    })

    useLayoutEffect(()=>{
        gsap.fromTo(".recipe-container",{opacity:0},{opacity:1,stagger:{from:'start',each:0.5}})
    },[data])

    console.log(data)
    return(
        <div className="recipe-grid">
            {isLoading ? <div style={{textAlign:'center',margin:'auto'}}><CircularProgress></CircularProgress></div> : data.map(((item)=>{
                return <motion.div className="recipe-container" id={item.id}>
                    {isFetching ? <div style={{textAlign:'center',margin:'auto'}}><CircularProgress></CircularProgress></div> : <motion.img initial={{scale:0}} animate={{scale:1,keyPoints:[0,0.5,1.2,1]}} transition={{type:'spring',duration:2}} src={item.image} className="recipe-image"></motion.img>}
                    <motion.h4 initial={{x:-100,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:0.5}}>{item.name}</motion.h4>
                    <p><span style={{fontWeight:500}}>Prep Time: </span>{item.prepTimeMinutes}{' '}<span style={{fontWeight:500}}>Cuisine: </span>{item.cuisine}</p>
                    <motion.button whileHover={{scale:1.1 ,opacity:'80%'}} transition={{type:'keyframes'}} className="btn fav" onClick={()=>{
                        
                        dispatch(toggleFav({item,id:item.id}))
                    
                    }
                        
                        }>Add To Fav</motion.button>
                    <br></br>
                    <motion.button whileHover={{scale:1.1 ,opacity:'80%'}} transition={{type:'keyframes'}} className="btn ins" onClick={()=>{
                        dispatch(addInstructions(item))
                        navigate(`/instructions/${item.name}`)}
                        
                        }>Instructions</motion.button>
                    <Rating value={item.rating} precision={0.5} readOnly></Rating>
                    {/* {isFav ? <Favorite></Favorite> : <FavoriteBorder></FavoriteBorder>} */}
                </motion.div>
            }))}
        </div>
    )
}