import { configureStore } from '@reduxjs/toolkit'
import dataReducer from '../store/dataSlice'

export const store = configureStore({
  reducer: {
    data:dataReducer,
  },
})