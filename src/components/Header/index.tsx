import styles from './Header.module.scss'
import logoNavBar from '../../assets/logoNavBar.svg'
import { HiShoppingCart } from 'react-icons/hi'
import { MdLocationOn } from 'react-icons/md'
export function Header() {
  return (
    <div className={styles.headerContainer}>
      <main>
        <img src={logoNavBar} alt="logo" />
        <section className={styles.rightSectionHeader}>
          <div className={styles.locationSection}>
            <MdLocationOn className={styles.locationIcon} />
            <p>Porto Alegre, RS</p>
          </div>
          <div className={styles.cartSection}>
            <HiShoppingCart className={styles.cartIcon} />
            <span className={styles.itensNumberOnCart}>3</span>
          </div>
        </section>
      </main>
    </div>
  )
}
