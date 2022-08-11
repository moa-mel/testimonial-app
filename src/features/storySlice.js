import {createSlice} from "@reduxjs/toolkit"

const initialState = []

const storySlice = createSlice({
    name: 'stories',
    initialState,
    reducers: {
        addStory: (state, action) =>{
            state.push(action.payload)
        }
    }
})

export const {addStory} = storySlice.actions
export default storySlice.reducer