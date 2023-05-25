import React, { useContext, useEffect, useState } from 'react'
import { PasswordCTX } from '../context/Password'
import { toast } from 'react-hot-toast'
import io from 'socket.io-client'

export const SocketIO = () => {
  const [centimetros, setCentimetros] = useState(null)
  const [passwordState, setPasswordState] = useContext(PasswordCTX)
  useEffect(() => {
    // Conectar al servidor WebSocket
    const socket = io('http://localhost:9000')

    // Manejar eventos del servidor
    socket.on('message', (data) => {
      toast.success(data)
    })

    socket.on('event', (data) => {
      console.log(data)
      setCentimetros(data)
    })

    // Manejar desconexión del servidor
    socket.on('disconnect', () => {
      toast.error('Disconnected from server')
    })

    // Manejar limpieza al desmontar el componente
    return () => {
      // Desconectar del servidor WebSocket
      socket.disconnect()
    }
  }, [])

  useEffect(() => {
    if (centimetros <= 6 && passwordState === false && centimetros !== null) {
      setPasswordState(true)
    } else if (centimetros > 15 && passwordState === true && centimetros !== null) {
      setPasswordState(false)
    }
  }, [centimetros])

  return (
    <div>
      {/* Contenido de tu componente */}
    </div>
  )
}
