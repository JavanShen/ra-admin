import type { ComponentType, MemoExoticComponent } from 'react'
import type { Role } from './user'

type Route = {
    name: string
    path: string
    component: MemoExoticComponent<ComponentType>
    meta?: {
        title: string
        roles: Role[]
        [key: string]: unknown
    }
    children?: Route[]
}

export type { Route }
