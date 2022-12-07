import { Form, Input, Button } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import type { LoginForm } from '@/types/login'

const LoginFrom = () => {
    const onFinish = (val: LoginForm) => {
        console.log(val.username)
    }

    const onFinishFail = () => {
        console.log('now finish fail')
    }

    return (
        <Form
            name="login"
            autoComplete="off"
            wrapperCol={{ span: 24 }}
            onFinish={onFinish}
            onFinishFailed={onFinishFail}
        >
            <Form.Item
                name="username"
                rules={[{ required: true, message: '请输入用户名' }]}
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
                <Button type="primary" block htmlType="submit" size="large">
                    登录
                </Button>
            </Form.Item>
        </Form>
    )
}

export default LoginFrom
