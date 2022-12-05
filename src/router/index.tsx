import { Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import useRouterGuard from '@/hooks/useRouterGuard'

import type { RootState } from '@/types/store'

const RouteTable = () => {
    const routes = useSelector((state: RootState) => state.router.routes)

    useRouterGuard()

    return (
        <Routes>
            {routes.map(route => (
                <Route
                    key={route.name}
                    path={route.path}
                    element={<route.component />}
                />
            ))}
        </Routes>
    )
}

export default RouteTable
