import { createSlice } from "@reduxjs/toolkit";



const cartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        addtoCart:(state,action)=>{
            state.push(action.payload)
        },
        removeFromcart:(state,action)=>{
            return state.filter(item=>item.id!=action.payload)
        },
        emptyCart:(state)=>{
            return state=[]
        }
        
    }
})
export const {addtoCart,removeFromcart,emptyCart}=cartSlice.actions
export default cartSlice.reducer






