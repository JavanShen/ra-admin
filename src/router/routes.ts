import { createElement } from 'react'
import Loadable from '@/components/common/Loadable'
import {
    UserOutlined,
    CalendarOutlined,
    ExperimentOutlined
} from '@ant-design/icons'
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
    },
    {
        path: 'test1',
        name: 'Test1',
        component: Loadable({
            loader: () => import('@/view/test/test1')
        }),
        meta: {
            title: '测试1',
            roles: ['user'],
            icon: createElement(ExperimentOutlined)
        },
        children: [
            {
                path: 'test2',
                name: 'Test2',
                component: Loadable({
                    loader: () => import('@/view/test/test2')
                }),
                meta: {
                    title: '测试2',
                    roles: ['user'],
                    group: 'more'
                }
            },
            {
                path: 'test3',
                name: 'Test3',
                component: Loadable({
                    loader: () => import('@/view/test/test3')
                }),
                meta: {
                    title: '测试3',
                    roles: ['user'],
                    group: 'test'
                }
            },
            {
                path: 'test4',
                name: 'Test4',
                component: Loadable({
                    loader: () => import('@/view/test/test4')
                }),
                meta: {
                    title: '测试4',
                    roles: ['user']
                }
            }
        ]
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
