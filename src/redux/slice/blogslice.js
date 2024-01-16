import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const getBlogs = createAsyncThunk('blogs', async (url) => {
    try{
        const response = await fetch(url);
        return response.json()
    }catch(error){
        console.log(error);
        throw error;
    }
});

const blogSlice = createSlice({
    name: 'blogs',
    initialState:{
        loading:false,
        data: null,
        error: false
    },

    extraReducers: (builder) =>{
        builder
        .addCase(getBlogs.pending, (state) =>{
            state.loading = true;
            
        })
        .addCase(getBlogs.fulfilled, (state, action) =>{
            state.loading = false;
            state.data = action.payload;
            state.error = false;
        })
        .addCase(getBlogs.rejected, (state) =>{
            state.loading = false;
            state.error = true;
        })

    }
})

export default blogSlice.reducer;