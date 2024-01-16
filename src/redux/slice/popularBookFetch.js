import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getPopularBooks = createAsyncThunk('popular', async (url) => {
    try {
        const response = await fetch(url);
        return response.json();
    } catch (error) {
        console.error(error);
        
    }
});

const getPopularBooksSlice = createSlice({
    name: 'data',
    initialState: {
        loading: false,
        popularBooks: null,
        error: false
    },

    extraReducers: (builder) => {
        builder
            .addCase(getPopularBooks.pending, (state) => {
                state.loading = true;
            })
            .addCase(getPopularBooks.fulfilled, (state, action) => {
                state.loading = false; 
                state.popularBooks = action.payload;
                state.error = false;
            })
            .addCase(getPopularBooks.rejected, (state) => {
                state.loading = false;
                state.error = true;
            });
    }
});

export default getPopularBooksSlice.reducer;
