import { createSlice } from '@reduxjs/toolkit'
import { fixedRoutes } from '@/router/routes'

export const routerSlice = createSlice({
    name: 'router',
    initialState: {
        routes: fixedRoutes
    },
    reducers: {
        addRoute: (state, action) => {
            state.routes.push(action.payload)
        }
    }
})

export const { addRoute } = routerSlice.actions

export default routerSlice.reducer
