import { Trash } from 'phosphor-react'
import styles from './CheckoutCoffeeCard.module.scss'

interface CheckoutCoffeeCardProps {
  unity: number
  name: string
  price: string
}

export function CheckoutCoffeeCard(props: CheckoutCoffeeCardProps) {
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
              <button>
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
