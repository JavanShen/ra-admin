import { Layout, theme } from 'antd'
import { AppMain, SideBar } from './components'

import './styles.css'

const { Header, Content, Sider } = Layout

const LayOut = () => {
    const {
        token: { colorBgContainer }
    } = theme.useToken()
    return (
        <Layout style={{ height: '100%' }}>
            <Header></Header>
            <Layout>
                <Sider style={{ background: colorBgContainer }}>
                    <SideBar />
                </Sider>
                <Layout>
                    <Content
                        style={{
                            padding: 24,
                            margin: 0,
                            backgroundColor: '#f5f5f5'
                        }}
                    >
                        <AppMain />
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    )
}

export default LayOut
