import axios from 'axios'
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
  buscarCep: any
  rua: string
  bairro: string
  cidade: string
  estado: string
  setRua: any
  setBairro: any
  setCidade: any
  setEstado: any
  methodPayment: string
  setMethodPayment: any
  houseNumber: string
  setHouseNumber: any
}

export const Context = createContext({} as useContextType)

export function ContextProvider({ children }: any) {
  const [itensCartToBuy, setItensCartToBuy] = useState([])
  const [itensQuantity, setItensQuantity] = useState(0)
  const [componentToShow, setComponentToShow] = useState('home')
  const [totalPurchase, setTotalPurchase] = useState(0)
  const [methodPayment, setMethodPayment] = useState('')
  const [rua, setRua] = useState('')
  const [bairro, setBairro] = useState('')
  const [cidade, setCidade] = useState('')
  const [estado, setEstado] = useState('')
  const [houseNumber, setHouseNumber] = useState('')
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

  const buscarCep = async (data: string) => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${data}/json/`)
      setRua(response.data.logradouro)
      setBairro(response.data.bairro)
      setCidade(response.data.localidade)
      setEstado(response.data.uf)
      if (response.data.erro === true) {
        alert('Ocorreu algum erro com o CEP, verificar')
      }
    } catch (err) {
      console.log(err)
    }
  }

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
        buscarCep,
        rua,
        bairro,
        cidade,
        estado,
        setRua,
        setBairro,
        setCidade,
        setEstado,
        methodPayment,
        setMethodPayment,
        houseNumber,
        setHouseNumber,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useContexts = () => useContext(Context)
