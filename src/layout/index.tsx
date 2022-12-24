import { Layout, theme } from 'antd'
import { AppMain, SideBar } from './components'

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
                    <Content>
                        <AppMain />
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    )
}

export default LayOut
