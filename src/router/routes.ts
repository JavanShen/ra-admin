import Loadable from '@/components/common/Loadable'

const fixedRoutes = [
    {
        path: '/',
        name: 'Layout',
        component: Loadable({
            loader: () => import('@/view/NotFound')
        })
    },
    {
        path: 'login',
        name: 'Login',
        component: Loadable({
            loader: () => import('@/view/login')
        })
    }
]

const asyncRoutes = [
    {
        path: 'user',
        name: 'User',
        component: Loadable({
            loader: () => import('@/view/user')
        }),
        meta: {
            title: '用户',
            roles: ['admin']
        }
    }
]

export { fixedRoutes, asyncRoutes }
