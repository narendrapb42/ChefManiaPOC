import { useSelector } from "react-redux"
import NavBar from "./NavBar"
import { motion } from "framer-motion"

export default function Instructions(){

    const {ins} = useSelector((state)=>state.insReducer)
    console.log(ins)
    return(
        <>
            <NavBar/>
            {!ins ? 'Loading..' : ins.map((item)=>{
                return <div className="inscontainer">
                    <img src={item.image} className="ins img"></img>
                    <div className="inscontent">
                        <motion.h1 initial={{opacity:0}} animate={{opacity:1}} transition={{duration:2}}>{item.name}</motion.h1>
                        <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{duration:2,delay:0.2}}><span>Difficulty</span>: {item.difficulty}</motion.p>
                        <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{duration:2,delay:0.4}}><span>prepTimeMinutes</span>: {item.prepTimeMinutes}</motion.p>
                        <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{duration:2,delay:0.6}}><span>Cusinine</span>: {item.cuisine}</motion.p>
                        <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{duration:2,delay:0.8}}><span>Calories</span>: {item.caloriesPerServing}</motion.p>
                        <motion.h3 initial={{opacity:0}} animate={{opacity:1}} transition={{duration:2,delay:1}}><span>Ingredients</span></motion.h3>
                        <motion.ul initial={{opacity:0}} animate={{opacity:1}} transition={{duration:2,delay:1.2}}>{item.ingredients.map((item)=><li>{item}</li>)}</motion.ul>
                        <motion.h3 initial={{opacity:0}} animate={{opacity:1}} transition={{duration:2,delay:1.3}}><span>Instructions</span></motion.h3>
                        <motion.ul initial={{opacity:0}} animate={{opacity:1}} transition={{duration:2,delay:1.4}}>{item.instructions.map((item)=><li>{item}</li>)}</motion.ul>
                    </div>
                </div>
            })}
        </>
    )
}