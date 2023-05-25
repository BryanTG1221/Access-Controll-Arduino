import { useState, createContext } from 'react'

export const PasswordCTX = createContext()

export function PasswordContext ({ children }) {
  const [passwordState, setPasswordState] = useState(false)
  return (
    <PasswordCTX.Provider value={[passwordState, setPasswordState]}>
      {children}
    </PasswordCTX.Provider>

  )
}
