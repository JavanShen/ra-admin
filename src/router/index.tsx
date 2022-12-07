import { Routes, Route } from 'react-router-dom'
import useRouterGuard from '@/hooks/useRouterGuard'
import useStoreSelector from '@/hooks/useStoreSelector.'

const RouteTable = () => {
    const { routes } = useStoreSelector('router')

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
