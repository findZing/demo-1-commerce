import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../reducers/count'
import navBarReducer from '../reducers/navBar'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    navBar: navBarReducer
  },
})