import { configureStore } from "@reduxjs/toolkit";
import chefSlice from '../Slices/chefSlice'
import instructionSlice from '../Slices/instructionSlice'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from "redux-persist";
import commentSlice from '../Slices/commentSlice'

const persistConfig = {
    key:'root',
    storage
}

const persistedReducer = persistReducer(persistConfig,commentSlice)
const store = configureStore({
    reducer:{
        chefReducer:chefSlice,
        insReducer:instructionSlice,
        commentReducer:persistedReducer
    }
})

export default store
export const persistor = persistStore(store)