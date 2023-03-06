import styles from './MainContent.module.scss'
import coffeeImage from '../../assets/coffeImage.png'
export function MainContect() {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.mainContent}>
        <section className={styles.titlesSections}>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </section>
        <img src={coffeeImage} alt="coffee-image" />
      </div>
    </div>
  )
}
