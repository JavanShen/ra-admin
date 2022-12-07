import LoginFrom from './components/Form'
import Register from './components/Register'

import { Background, Left, Right, Title, FormContainer } from './styled'

const Login = () => {
    return (
        <Background>
            <Left>
                <Register />
            </Left>
            <Right>
                <Title>登录</Title>
                <FormContainer>
                    <LoginFrom />
                </FormContainer>
            </Right>
        </Background>
    )
}

export default Login
