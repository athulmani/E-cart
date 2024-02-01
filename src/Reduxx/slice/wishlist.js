import { createSlice } from "@reduxjs/toolkit";



const wishlist = createSlice({
    name:"wishlist",
    initialState:[],
    reducers:{
        addtoWishlist:(state,action)=>{
            state.push(action.payload)
        },
        removeFromWishlist:(state,action)=>{
            return state.filter(item=>item.id!=action.payload)
        }
        
    }
})
export const {addtoWishlist,removeFromWishlist} = wishlist.actions
export default wishlist.reducer






