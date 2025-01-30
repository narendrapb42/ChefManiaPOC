import { createSlice } from "@reduxjs/toolkit";

const chefSlice = createSlice({
    name:'chefslice',
    initialState:{
        search:'',
        fav:[],
        isUserLoggedIn:false,
        userName:''
    },
    reducers:{
        searchText:(state,action)=>{
            state.search = action.payload
        },
        toggleFav:(state,action)=>{
            console.log(action.payload)
            const item = state.fav.findIndex((item)=>item.id === action.payload.id)
            if(item ===-1){
                state.fav.push(action.payload.item)
            }
            return
        },
        setUserName:(state,action)=>{
            state.userName = action.payload
        },
        toggleUserLog:(state,action)=>{
            state.isUserLoggedIn = action.payload
        },
    }
})

export const {searchText,toggleFav,toggleUserLog,setUserName} = chefSlice.actions
export default chefSlice.reducer