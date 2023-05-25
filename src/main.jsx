import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { PasswordContext } from './context/Password'
//  import { SocketIO } from './socketIO/Sockets'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PasswordContext>
      <App />
      <Toaster />
    </PasswordContext>
  </React.StrictMode>
)
