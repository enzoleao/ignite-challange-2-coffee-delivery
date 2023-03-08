import styles from './CoffeeCard.module.scss'
import { useState } from 'react'
import { HiShoppingCart } from 'react-icons/hi'

interface CoffeeBoxProps {
  img: string
  name: string
  tag: any
  description: string
  price: string
}
export function CoffeeBox(props: CoffeeBoxProps) {
  const [acrescentCoffee, setAcrescentCoffee] = useState(1)

  const itensBuy = () => {
    localStorage.setItem(`${props.name}`, `${acrescentCoffee}`)
    console.log(`foi comprado ${acrescentCoffee} unidades do ${props.name} `)
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
