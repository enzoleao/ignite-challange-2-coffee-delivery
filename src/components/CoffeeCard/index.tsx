import styles from './CoffeeCard.module.scss'
import { useState } from 'react'
import { HiShoppingCart } from 'react-icons/hi'
import { useContexts } from '../../contexts/useContext'

interface CoffeeBoxProps {
  img: string
  name: string
  tag: any
  description: string
  price: string
}
export function CoffeeBox(props: CoffeeBoxProps) {
  const [acrescentCoffee, setAcrescentCoffee] = useState(1)
  const {
    setItensQuantity,
    itensQuantity,
    itensCartToBuy,
    totalPurchase,
    setTotalPurchase,
  } = useContexts()

  const itensBuy = () => {
    const itens = localStorage.getItem('itensBuy')
    const parcialPrice =
      parseFloat(props.price.replace(',', '.')) * acrescentCoffee

    if (itens != null) {
      const itensBount = JSON.parse(itens)
      itensBount.push({
        id: itensQuantity + 1,
        name: props.name,
        price: parcialPrice,
        units: acrescentCoffee,
      })
      localStorage.setItem(`itensBuy`, JSON.stringify(itensBount))
      setItensQuantity(itensQuantity + 1)
      setAcrescentCoffee(1)
      itensCartToBuy.push({
        id: itensQuantity + 1,
        name: props.name,
        price: parcialPrice,
        units: acrescentCoffee,
      })
    } else {
      const itensBount = []
      itensBount.push({
        id: itensQuantity + 1,
        name: props.name,
        price: parcialPrice,
        units: acrescentCoffee,
      })
      itensCartToBuy.push({
        id: itensQuantity + 1,
        name: props.name,
        price: parcialPrice,
        units: acrescentCoffee,
      })
      localStorage.setItem(`itensBuy`, JSON.stringify(itensBount))
      setItensQuantity(itensQuantity + 1)
      setAcrescentCoffee(1)
    }
    setTotalPurchase(totalPurchase + parcialPrice)
  }

  return (
    <div className={styles.coffeeCard}>
      <img src={props.img} alt="" />
      <div className={styles.tagCoffee}>
        <p className={styles.coffeeTag}>TRADICIONAL</p>
      </div>
      <p className={styles.coffeeName}>{props.name}</p>
      <p className={styles.coffeeDescription}>{props.description}</p>
      <footer>
        <p className={styles.priceCoffe}>R${props.price}</p>
        <section>
          <span>
            <button
              onClick={() => setAcrescentCoffee(acrescentCoffee - 1)}
              className={styles.buttonBuyCard}
              disabled={acrescentCoffee === 1}
            >
              -
            </button>
            <p className={styles.countCoffee}>{acrescentCoffee}</p>
            <button
              onClick={() => setAcrescentCoffee(acrescentCoffee + 1)}
              className={styles.buttonBuyCard}
            >
              +
            </button>
          </span>
          <button onClick={itensBuy} className={styles.buyButton}>
            <HiShoppingCart className={styles.buyIcon} />
          </button>
        </section>
      </footer>
    </div>
  )
}
