import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";




export const fetchProductData = createAsyncThunk("allProducts/fetchProductData",async()=>{
    const result = await axios.get("http://dummyjson.com/products")
      return result.data
})

 const productSlice = createSlice({
    name:"allProducts",
    initialState:{
        products:[],
        loading:false,
        error:""
    },
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProductData.pending,(state)=>{
             state.loading=true
        }),
        builder.addCase(fetchProductData.fulfilled,(state,action)=>{
            state.products = action.payload
        }),
        builder.addCase(fetchProductData.rejected,(state)=>{
            state.error="API Failed ... please try after some time"
        })

    }
    
 })

export default productSlice.reducer 