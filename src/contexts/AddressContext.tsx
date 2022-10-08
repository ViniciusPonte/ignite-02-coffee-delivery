import { createContext, ReactNode, useState } from 'react'
import { AddressFormData } from '../screens/Checkout/validation'

interface AddressContextProviderProps {
  children: ReactNode
}

interface AddressContextType {
  address: AddressFormData | null
  onSaveAddress: (data: AddressFormData) => void
}

export const AddressContext = createContext({} as AddressContextType)

export function AddressContextProvider({
  children,
}: AddressContextProviderProps) {
  const [address, setAddress] = useState<AddressFormData | null>(null)

  function onSaveAddress(data: AddressFormData) {
    setAddress(data)
    localStorage.setItem('@coffee-delivery:address', JSON.stringify(data))
  }

  return (
    <AddressContext.Provider
      value={{
        address,
        onSaveAddress,
      }}
    >
      {children}
    </AddressContext.Provider>
  )
}
