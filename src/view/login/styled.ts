import styled from '@emotion/styled'
import { flexCenter } from '@/styles/common'

const Background = styled.div({
    height: '100%',
    width: '100%',
    display: 'flex'
})

const Left = styled.div({
    background:
        'linear-gradient(135deg, #af68cc 0%, #7d4d90  50%, #653e75 100%)',
    flex: 2,
    height: '100%',
    boxSizing: 'content-box',
    color: 'white',
    flexFlow: 'column nowrap',
    ...flexCenter
})

const Right = styled.div({
    flex: 3,
    height: '100%',
    flexFlow: 'column nowrap',
    ...flexCenter
})

const Title = styled.h1({
    fontSize: 36,
    letterSpacing: 5,
    margin: '10px 0'
})

const FormContainer = styled.div({
    width: '60%'
})

export { Background, Left, Right, FormContainer, Title }
