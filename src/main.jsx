import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { SocketIO } from './components/Sockets'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <SocketIO />
    <Toaster />
  </React.StrictMode>,
)
