import styles from './MainContent.module.scss'
import coffeeImage from '../../assets/coffeImage.png'
export function MainContect() {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.mainContent}>
        <section className={styles.titlesSections}>
          <p className={styles.principalContent}>
            Encontre o café perfeito para qualquer hora do dia
          </p>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <footer>
            <span>
              <p>Compra simples e segura</p>
            </span>
            <span>
              <p>Embalagem mantém o café intacto</p>
            </span>
            <span>
              <p>Entrega rápida e rastreada</p>
            </span>
            <span>
              <p>O café chega fresquinho até você </p>
            </span>
          </footer>
        </section>
        <img src={coffeeImage} alt="coffee-image" />
      </div>
    </div>
  )
}
