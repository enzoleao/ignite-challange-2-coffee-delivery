import styles from './CoffeeCard.module.scss'

interface CoffeeBoxProps {
  img: string
}

export function CoffeeBox() {
  return (
    <div className={styles.coffeeCard}>
      <img src="https://i.imgur.com/GoGTcuT.png" alt="" />
      <p className={styles.coffeeTag}>TRADICIONAL</p>
      <p className={styles.coffeeName}>Name</p>
      <p className={styles.coffeeDescription}>description</p>
      <footer>
        <p>R$</p>
        <section>
          <span>
            <button className={styles.buttonBuyCard}>-</button>
            <p>1</p>
            <button className={styles.buttonBuyCard}>+</button>
          </span>
          <button>Buy</button>
        </section>
      </footer>
    </div>
  )
}
