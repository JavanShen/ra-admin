import React from 'react'
import { ConfigProvider } from 'antd'
import useStoreSelector from '@/hooks/useStoreSelector'

const App: React.FC<React.PropsWithChildren> = ({ children }) => {
    const { color } = useStoreSelector('config')

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: color
                }
            }}
        >
            {children}
        </ConfigProvider>
    )
}

export default App
