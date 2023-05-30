import { useState, createContext } from 'react'

export const PasswordCTX = createContext()

export function PasswordContext ({ children }) {
  const [passwordState, setPasswordState] = useState(false)
  const [entrandingCarro, setEntrandingCarro] = useState(false)
  return (
    <PasswordCTX.Provider value={[passwordState, setPasswordState, entrandingCarro, setEntrandingCarro]}>
      {children}
    </PasswordCTX.Provider>

  )
}
