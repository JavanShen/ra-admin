import { registerByUserName } from '@/api/user'

import type { RegisterForm } from '@/types/register'

const register = async (val: RegisterForm) => {
    const { code, message } = await registerByUserName({ ...val })

    return {
        code,
        message
    }
}

export default register
