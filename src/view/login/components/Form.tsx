import { useState } from 'react'
import { Form, Input, Button, message } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import login from '../events/login'
import useStoreSelector from '@/hooks/useStoreSelector'
import { useNavigate } from 'react-router-dom'

import type { LoginForm } from '@/types/login'

const LoginFrom = () => {
    const [form] = Form.useForm()

    const [messageApi, contextHolder] = message.useMessage()
    const [loading, setLoading] = useState(false)

    const { location } = useStoreSelector('router')
    const navigate = useNavigate()

    const onFinish = async (val: LoginForm) => {
        setLoading(true)

        const { code, message: msg } = await login(val)

        messageApi[code === 1 ? 'success' : 'error'](msg)

        if (code === 1) {
            const { pathname } = location.last

            const to = pathname === '/login' ? '/' : pathname || '/'

            navigate(to)
        }

        setLoading(false)
    }

    const onFinishFail = () => {
        messageApi.error('登录失败')
    }

    return (
        <>
            {contextHolder}
            <Form
                name="login"
                form={form}
                autoComplete="off"
                wrapperCol={{ span: 24 }}
                onFinish={onFinish}
                onFinishFailed={onFinishFail}
            >
                <Form.Item
                    name="username"
                    rules={[
                        { required: true, message: '请输入用户名' },
                        {
                            min: 2,
                            max: 7,
                            message: '用户名长度需要在2-7字符之间'
                        }
                    ]}
                >
                    <Input
                        prefix={<UserOutlined style={{ opacity: 0.6 }} />}
                        placeholder="用户名"
                        size="large"
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: '请输入密码' }]}
                >
                    <Input.Password
                        prefix={<LockOutlined style={{ opacity: 0.6 }} />}
                        placeholder="密码"
                        size="large"
                    />
                </Form.Item>
                <Form.Item wrapperCol={{ span: 24 }}>
                    <Button
                        type="primary"
                        block
                        htmlType="submit"
                        size="large"
                        loading={loading}
                    >
                        登录
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}

export default LoginFrom
