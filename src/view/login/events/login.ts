import { loginByUserName } from '@/api/user'

import type { LoginForm } from '@/types/login'

const login = async (val: LoginForm) => {
    const { code, message } = await loginByUserName({ ...val })

    return {
        code,
        message
    }
}

export default login
