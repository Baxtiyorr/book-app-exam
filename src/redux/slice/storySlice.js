import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const getStoryBooks = createAsyncThunk('story', async (url) => {
    try{
        const response = await fetch(url);
        return response.json()
    }catch(error){
        console.log(error);
    }
})

const getStoryBooksSlice = createSlice({
    name: 'story',
    initialState:{
        loading:false,
        story:null,
        error: false
    },

    extraReducers: (builder) =>{
        builder
        .addCase(getStoryBooks.pending, (state) =>{
            state.loading = true;
            
        })
        .addCase(getStoryBooks.fulfilled, (state, action) =>{
            state.loading = true;
            state.story = action.payload;
            state.error = false;
        })
        .addCase(getStoryBooks.rejected, (state) =>{
            state.loading = false;
            state.error = true;
        })

    }
})

export default getStoryBooksSlice.reducer