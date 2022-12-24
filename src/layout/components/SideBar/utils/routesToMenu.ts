import type { Route } from '@/types/router'
import type { ItemType, SubMenuType } from 'antd/es/menu/hooks/useItems'

const routesToMenu = (routes: Route[]): ItemType[] => {
    const group = new Map<string, ItemType[]>()

    const menus = routes.reduce((res, route) => {
        if (!route.hidden) {
            const { children, meta } = route
            const MenuItemChildren = children ? routesToMenu(children) : null

            const menuItem: ItemType = {
                label: meta?.title,
                key: route.path,
                icon: route.meta?.icon
            }

            if (MenuItemChildren) {
                ;(menuItem as SubMenuType).children = MenuItemChildren
            }

            if (meta?.group) {
                const { group: gp } = meta
                group.set(
                    gp,
                    group.has(gp)
                        ? [...(group.get(gp) || []), menuItem]
                        : [menuItem]
                )
            } else {
                res.push(menuItem)
            }
        }
        return res
    }, [] as ItemType[])

    group.forEach((val, key) => {
        menus.push({
            type: 'group',
            label: key,
            children: val
        })
    })

    return menus
}

export default routesToMenu
