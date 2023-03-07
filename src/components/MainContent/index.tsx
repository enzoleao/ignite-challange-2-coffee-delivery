import styles from './MainContent.module.scss'
import coffeeImage from '../../assets/coffeImage.png'
import { HiShoppingCart } from 'react-icons/hi'
import { BsFillStopwatchFill } from 'react-icons/bs'
import { GoPackage } from 'react-icons/go'
import { FaCoffee } from 'react-icons/fa'
export function MainContect() {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.mainContent}>
        <section className={styles.titlesSections}>
          <div className={styles.headerTitles}>
            <p className={styles.principalContent}>
              Encontre o café perfeito para qualquer hora do dia
            </p>
            <p className={styles.footerContent}>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </div>
          <footer>
            <span>
              <HiShoppingCart className={styles.iconsShopCart} />
              <p>Compra simples e segura</p>
            </span>
            <span>
              <GoPackage className={styles.packageIcon} />
              <p>Embalagem mantém o café intacto</p>
            </span>
            <span>
              <BsFillStopwatchFill className={styles.stopWatchIcon} />
              <p>Entrega rápida e rastreada</p>
            </span>
            <span>
              <FaCoffee className={styles.coffeeIcon} />
              <p>O café chega fresquinho até você </p>
            </span>
          </footer>
        </section>
        <img src={coffeeImage} alt="coffee-image" />
      </div>
    </div>
  )
}
