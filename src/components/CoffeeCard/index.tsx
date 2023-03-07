import styles from './CoffeeCard.module.scss'

export function CoffeeBox() {
  return (
    <div className={styles.coffeeCard}>
      <img src="https://i.imgur.com/GoGTcuT.png" alt="" />
      <p>Tag</p>
      <p>description</p>
      <footer>
        <p>Price</p>
        <section>
          <button>Buy</button>
          <span>
            <button>-</button>
            <p>1</p>
            <button>+</button>
          </span>
        </section>
      </footer>
    </div>
  )
}
