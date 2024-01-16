import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getSingleBooks = createAsyncThunk('SingleBooks', async (url) => {
    try {
        const response = await fetch(url);
        return response.json();
    } catch (error) {
        console.error(error);
        
    }
});

const getSingleBooksSlice = createSlice({
    name: 'popularBooks',
    initialState: {
        loading: false,
        singleBook: null,
        error: false
    },

    extraReducers: (builder) => {
        builder
            .addCase(getSingleBooks.pending, (state) => {
                state.loading = true;
            })
            .addCase(getSingleBooks.fulfilled, (state, action) => {
                state.loading = false; 
                state.singleBook = action.payload;
                state.error = false;
            })
            .addCase(getSingleBooks.rejected, (state) => {
                state.loading = false;
                state.error = true;
            });
    }
});

export default getSingleBooksSlice.reducer;