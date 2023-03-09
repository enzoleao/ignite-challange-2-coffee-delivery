import styles from './Header.module.scss'
import logoNavBar from '../../assets/logoNavBar.svg'
import { HiShoppingCart } from 'react-icons/hi'
import { MdLocationOn } from 'react-icons/md'
import { useContexts } from '../../contexts/useContext'
export function Header() {
  const { itensQuantity, setComponentToShow } = useContexts()
  return (
    <div className={styles.headerContainer}>
      <main>
        <img
          onClick={() => setComponentToShow('home')}
          src={logoNavBar}
          alt="logo"
        />
        <section className={styles.rightSectionHeader}>
          <div className={styles.locationSection}>
            <MdLocationOn className={styles.locationIcon} />
            <p>Porto Alegre, RS</p>
          </div>
          <div className={styles.cartSection}>
            <HiShoppingCart
              onClick={() => setComponentToShow('cart')}
              className={styles.cartIcon}
            />
            <span className={styles.itensNumberOnCart}>{itensQuantity}</span>
          </div>
        </section>
      </main>
    </div>
  )
}
