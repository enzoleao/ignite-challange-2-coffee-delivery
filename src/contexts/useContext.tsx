import { createContext, useContext, useEffect, useState } from 'react'

type useContextType = {
  itensCartToBuy: any
  setItensCartToBuy: any
  itensQuantity: number
  setItensQuantity: any
  componentToShow: string
  setComponentToShow: any
  totalPurchase: number
  setTotalPurchase: any
}

export const Context = createContext({} as useContextType)

export function ContextProvider({ children }: any) {
  const [itensCartToBuy, setItensCartToBuy] = useState([])
  const [itensQuantity, setItensQuantity] = useState(0)
  const [componentToShow, setComponentToShow] = useState('fineshCheckout')
  const [totalPurchase, setTotalPurchase] = useState(0)
  useEffect(() => {
    const itens = localStorage.getItem('itensBuy')
    let sum = 0

    if (itens != null) {
      const itensCartObject = JSON.parse(itens)
      setItensCartToBuy(itensCartObject)
      setItensQuantity(itensCartObject.length)

      for (let i = 0; itensCartObject.length > i; i++) {
        sum += itensCartObject[i].price
      }
      setTotalPurchase(sum)
    }
  }, [])
  return (
    <Context.Provider
      value={{
        itensCartToBuy,
        setItensCartToBuy,
        itensQuantity,
        setItensQuantity,
        componentToShow,
        setComponentToShow,
        totalPurchase,
        setTotalPurchase,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useContexts = () => useContext(Context)
