import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const getBooks = createAsyncThunk('books', async (url) => {
    try{
        const response = await fetch(url);
        return response.json()
    }catch(error){
        console.log(error);
    }
})

const getBooksSlice = createSlice({
    name: 'books',
    initialState:{
        loading:false,
        books:null,
        error: false
    },

    extraReducers: (builder) =>{
        builder
        .addCase(getBooks.pending, (state) =>{
            state.loading = true;
            
        })
        .addCase(getBooks.fulfilled, (state, action) =>{
            state.loading = true;
            state.books = action.payload;
            state.error = false;
        })
        .addCase(getBooks.rejected, (state) =>{
            state.loading = false;
            state.error = true;
        })

    }
})

export default getBooksSlice.reducer