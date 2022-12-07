import { configureStore } from '@reduxjs/toolkit'
import routerReducer from './router'
import configReducer from './config'

export default configureStore({
    reducer: {
        router: routerReducer,
        config: configReducer
    }
})
