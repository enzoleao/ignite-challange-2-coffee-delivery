import { Trash } from 'phosphor-react'
import { useContexts } from '../../contexts/useContext'
import styles from './CheckoutCoffeeCard.module.scss'

interface CheckoutCoffeeCardProps {
  id: number
  unity: number
  name: string
  price: string
}

export function CheckoutCoffeeCard(props: CheckoutCoffeeCardProps) {
  const {
    setItensQuantity,
    setItensCartToBuy,
    totalPurchase,
    setTotalPurchase,
  } = useContexts()
  const removeCoffee = async () => {
    const newPrice = parseFloat(props.price)
    const itens = localStorage.getItem('itensBuy')!
    const itensObject = JSON.parse(itens)
    const newObject = itensObject.filter(
      (produto: any) => produto.id !== props.id,
    )
    localStorage.setItem('itensBuy', JSON.stringify(newObject))
    setItensCartToBuy(newObject)
    setItensQuantity(itensObject.length - 1)
    setTotalPurchase(totalPurchase - newPrice)
  }
  return (
    <>
      <div className={styles.checkoutCoffeeCardContainer}>
        <img src="https://i.imgur.com/GoGTcuT.png" alt="" />
        <div className={styles.optionsCheckout}>
          <p className={styles.coffeeName}>{props.name}</p>
          <div>
            <span className={styles.adictionButtons}>
              <button>-</button>
              <p>{props.unity}</p>
              <button>+</button>
            </span>
            <span className={styles.removeButton}>
              <button onClick={removeCoffee}>
                <Trash color="#8047F8" className={styles.trashIcon} size={16} />
                Remover
              </button>
            </span>
          </div>
        </div>
        <div>
          <p className={styles.pricePerItens}>R$ {props.price}</p>
        </div>
      </div>
      <hr />
    </>
  )
}
