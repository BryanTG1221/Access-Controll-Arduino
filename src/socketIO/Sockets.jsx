import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import io from 'socket.io-client'

export const SocketIO = () => {
  const [flagPassword, setFlagPassword] = useState(false)
  useEffect(() => {
    // Conectar al servidor WebSocket
    const socket = io('http://localhost:9000')

    // Manejar eventos del servidor
    socket.on('message', (data) => {
      toast.success(data)
    })

    socket.on('event', (data) => {
      console.log(data)
    });

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
    toast(flagPassword ? 'Abrir puerta' : 'No abrir puerta')
  }, [flagPassword])

  return (
    <div>
      {/* Contenido de tu componente */}
    </div>
  )
}

