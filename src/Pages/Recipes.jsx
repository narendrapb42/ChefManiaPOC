import { useDispatch, useSelector } from "react-redux";
import NavBar from "./NavBar";
import RecipeCard from "./RecipeCard";
import { searchText } from "../Slices/chefSlice";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Badge } from "@mui/material";

export default function Recipes(){
    const dispatch = useDispatch()
    const {fav} = useSelector((state)=>state.chefReducer)
    console.log(fav)
    return (
        <>
           <NavBar/>
           <div className="search-container">
            {fav.length === 0 ? <FavoriteBorder></FavoriteBorder> : <Badge sx={{color:'red'}}badgeContent={fav.length}>
                                        <Favorite sx={{color:'red'}}  color="red"></Favorite>
            </Badge>}
            <input className="searchbox" placeholder="Search" onChange={(e)=>dispatch(searchText(e.target.value))}>
            </input>
           </div>
           <RecipeCard/>
        </>
    )
}