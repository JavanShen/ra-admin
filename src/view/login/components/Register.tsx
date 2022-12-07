import { Button } from 'antd'
import { Title } from '../styled'

const Register = () => {
    return (
        <>
            <Title>注册</Title>
            <p style={{ margin: '0 0 20px 0' }}>还没有账号？注册一个</p>
            <Button shape="round" size="large" ghost>
                注册
            </Button>
        </>
    )
}

export default Register
