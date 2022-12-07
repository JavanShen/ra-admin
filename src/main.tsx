import React from 'react'
import ReactDOM from 'react-dom/client'
import '@/styles/main.css'

import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import RouteTable from '@/router'
import store from '@/store'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <RouteTable />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
)
