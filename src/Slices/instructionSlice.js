import { createSlice } from "@reduxjs/toolkit";

const instructionSlice = createSlice({
    name:'instructions',
    initialState:{
        ins:[]
    },
    reducers:{
        addInstructions:(state,action)=>{
             state.ins.splice(0,1,action.payload)
        }
    }
})

export const{addInstructions} = instructionSlice.actions
export default instructionSlice.reducer