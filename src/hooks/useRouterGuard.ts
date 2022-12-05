import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const useRouterGuard = () => {
    const { pathname } = useLocation()

    useEffect(() => {
        console.log('location change')
    }, [pathname])
}

export default useRouterGuard
