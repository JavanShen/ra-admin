import service from '@/utils/request'

import type { LoginForm } from '@/types/login'
import type { UserInfo } from '@/types/user'

const loginByUserName = (info: LoginForm) => {
    return service<Record<string, unknown>>({
        url: '/api/login',
        method: 'post',
        data: info
    })
}

const getUserInfo = () => {
    return service<UserInfo>({
        url: '/api/userinfo',
        method: 'get'
    })
}

export { loginByUserName, getUserInfo }
