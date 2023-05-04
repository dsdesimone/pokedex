import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// Importaciones de react-router-dom
import { HashRouter } from 'react-router-dom'
//Importaciones de redux
import { Provider } from 'react-redux'
import store from './store/index.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
    
  </React.StrictMode>,
)
