import { Form, Input, Button } from 'antd'
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
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            onFinish={onFinish}
            onFinishFailed={onFinishFail}
        >
            <Form.Item
                label="用户名"
                name="username"
                rules={[{ required: true, message: '请输入用户名' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="密码"
                name="password"
                rules={[{ required: true, message: '请输入密码' }]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    登录
                </Button>
            </Form.Item>
        </Form>
    )
}

export default LoginFrom
