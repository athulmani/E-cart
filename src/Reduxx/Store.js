
import { configureStore } from "@reduxjs/toolkit";
import wishlist from "./slice/wishlist";
import cartSlice from "./slice/cartSlice";

const store=configureStore({

    reducer:{
wishlistReducer:wishlist,
CartReducer:cartSlice
    }

})

export default store