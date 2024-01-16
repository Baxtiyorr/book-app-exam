import { configureStore } from "@reduxjs/toolkit";

import getBooksReducer from './slice/booksFetchSlice'
import getPopularBooksReducer from './slice/popularBookFetch';
import getSingleBookReducer from "./slice/getSingleBook";
import getBlogsReducer from './slice/blogslice';
import getStoryBookReducer from './slice/storySlice';

const store = configureStore({
    reducer:{
        getData: getBooksReducer,
        getPopularBooks: getPopularBooksReducer,
        getSingleBooks: getSingleBookReducer,
        getBlogs: getBlogsReducer,
        getStory: getStoryBookReducer,
    }
});

export default store