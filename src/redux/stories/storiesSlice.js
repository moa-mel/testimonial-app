import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    stories: {},
}

const storiesSlice= createSlice({
    name: 'stories',
    initialState,
   reducers : {
       addStories: (state, {payload})=>{
           state.stories = payload;
       },
    },
    })
    export const getAllStories = (state) => state.stories.stories;
 export default storiesSlice.reducer;