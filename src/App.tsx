import { BrowserRouter } from 'react-router-dom'
import RouteTable from '@/router'
import { Provider } from 'react-redux'
import store from '@/store'

import Theme from './Theme'

const App = () => {
    return (
        <Provider store={store}>
            <Theme>
                <BrowserRouter>
                    <RouteTable />
                </BrowserRouter>
            </Theme>
        </Provider>
    )
}

export default App
