import { configureStore } from '@reduxjs/toolkit'
import routerReducer from './router'

export default configureStore({
    reducer: {
        router: routerReducer
    }
})
