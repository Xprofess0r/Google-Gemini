import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import './index.css'
import ContextProvider from './components/context/context.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <App />
  </ContextProvider>,
)
