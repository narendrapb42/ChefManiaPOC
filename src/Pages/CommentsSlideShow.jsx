import { Rating } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CommentsSlideShow(){
    
    const comments = [
        "ChefMania is a game-changer for food enthusiasts! The recipes are well-organized and easy to follow, making cooking enjoyable for beginners and experts alike. The vibrant visuals and detailed instructions ensure every dish turns out perfectly. I love how they cater to diverse cuisines and dietary preferences!",
        "I’m absolutely hooked on ChefMania! The website's user-friendly design makes it a breeze to explore new recipes. The step-by-step guides, ingredient lists, and cooking tips have elevated my skills in the kitchen. It’s like having a personal chef at your fingertips. Highly recommended!",
        "ChefMania is a treasure trove for anyone who loves to cook or experiment with food. The search functionality and filters are spot-on, helping me quickly find recipes that suit my mood. I especially appreciate the creative twists on classic dishes. It’s my go-to site for meal inspiration!",
        "What sets ChefMania apart is the attention to detail in every recipe. The clear instructions, estimated prep times, and nutritional information make planning meals so much easier. I’ve discovered so many new favorite dishes thanks to this website. Kudos to the team behind it!",
        "ChefMania has completely transformed my cooking routine. The variety of recipes is outstanding, and I love how they include tips for substitutions and make-ahead options. The community reviews and ratings also help me choose the best recipes. It’s an amazing platform for anyone passionate about food.",
    ];
    const ratings = [4.5,4,5,4.5,5]

    const [index, setIndex] = useState(0)
    const [fade, setFade] = useState(false)

    useEffect(()=>{
        const interval = setInterval(()=>{
            setFade(false)
            setTimeout(()=>{setIndex((prevIndex)=>(prevIndex+1) % comments.length);setFade(true)
            },500)            
        },5000)

        return ()=>clearInterval(interval)
    },[comments.length])

    return(
        <>
            <div className={`comment-box ${fade ? 'fade-in':'fade-out'}`}>
                {`${comments[index]}`}
                <Rating value={ratings[index]}></Rating>
            </div>
        </>
    )
}