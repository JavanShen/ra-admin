import { createElement } from 'react'
import Loadable from '@/components/common/Loadable'
import { UserOutlined, CalendarOutlined } from '@ant-design/icons'
import type { Route } from '@/types/router'

const fixedRoutes: Route[] = [
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
            roles: ['admin'],
            icon: createElement(UserOutlined)
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
            roles: ['user'],
            icon: createElement(CalendarOutlined)
        }
    }
]

const notFoundRoute: Route = {
    path: '*',
    name: 'NotFound',
    component: Loadable({
        loader: () => import('@/view/NotFound')
    }),
    hidden: true
}

const whiteList = fixedRoutes.map(route => `/${route.path}`)

export { fixedRoutes, asyncRoutes, whiteList, notFoundRoute }
