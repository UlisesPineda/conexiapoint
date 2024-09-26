import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { AppRouter } from './router/AppRouter'
import { Provider } from 'react-redux'
import { store } from './store/store'

import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store }>
      {/* <BrowserRouter basename='/conexiapoint/'> */}
      <HashRouter>
        <AppRouter />

      </HashRouter>
      {/* </BrowserRouter> */}
    </Provider>
  </React.StrictMode>,
);
