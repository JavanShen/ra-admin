import Loadable from '@/components/common/Loadable'
import type { Route } from '@/types/router'

const fixedRoutes: Route[] = [
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

const asyncRoutes: Route[] = [
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
    },
    {
        path: 'todo',
        name: 'Todo',
        component: Loadable({
            loader: () => import('@/view/todo')
        }),
        meta: {
            title: '待办',
            roles: ['user']
        }
    }
]

const notFoundRoute: Route = {
    path: '*',
    name: 'NotFound',
    component: Loadable({
        loader: () => import('@/view/NotFound')
    })
}

const whiteList = fixedRoutes.map(route => `/${route.path}`)

export { fixedRoutes, asyncRoutes, whiteList, notFoundRoute }
