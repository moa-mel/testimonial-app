import { configureStore } from '@reduxjs/toolkit'
import storiesReducer from './features/storySlice'

export const store = configureStore({
    reducer: {
        stories: storiesReducer
    },
})