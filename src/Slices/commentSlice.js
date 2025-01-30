import { createSlice } from "@reduxjs/toolkit";

const commentSlice = createSlice({
    name:'comments',
    initialState:{
        comments:[]
    },
    reducers:{
        addComments:(state,action)=>{
            state.comments.push(action.payload)
        },
        deleteComments:(state,action)=>{
            console.log(action.payload.id);
            state.comments = state.comments.filter((item)=>item.id !== action.payload.id)
        }
    }
})

export const {addComments,deleteComments} = commentSlice.actions
export default commentSlice.reducer