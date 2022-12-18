import { Routes, Route } from 'react-router-dom'
import useRouterGuard from '@/hooks/useRouterGuard'
import useStoreSelector from '@/hooks/useStoreSelector'
import useRecordHistory from '@/hooks/useRecordHistory'
import { useLocation } from 'react-router-dom'

import type { Route as R } from '@/types/router'

const renderRoutes = (routes: R[]) => {
    return routes.map(route => (
        <Route
            key={route.name}
            path={route.path}
            element={<route.component />}
            {...(route.children ? renderRoutes(route.children) : null)}
        ></Route>
    ))
}

const RouteTable = () => {
    const { routes } = useStoreSelector('router')
    const location = useLocation()

    useRecordHistory()

    useRouterGuard(location)

    return <Routes>{renderRoutes(routes)}</Routes>
}

export default RouteTable
