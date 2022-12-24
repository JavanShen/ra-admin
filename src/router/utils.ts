import { asyncRoutes } from './routes'
import produce from 'immer'

import type { Route } from '@/types/router'
import type { Role } from '@/types/user'

const filterRoutesByRole = (routes: Route[], role: Role) => {
    return produce(routes, draft =>
        draft.reduce((res, route) => {
            if (route.meta?.roles.includes(role)) {
                const { children } = route
                if (children)
                    route.children = filterRoutesByRole(children, role)
                res.push(route)
            }
            return res
        }, <Route[]>[])
    )
}

const generateRoutes = (role: Role) => {
    return role === 'admin'
        ? asyncRoutes
        : filterRoutesByRole(asyncRoutes, role)
}

export { generateRoutes }
