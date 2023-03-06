import styles from './Header.module.scss'
import logoNavBar from '../../assets/logoNavBar.svg'
import { HiShoppingCart } from 'react-icons/hi'
import { MdLocationOn } from 'react-icons/md'
export function Header() {
  return (
    <div className={styles.headerContainer}>
      <img src={logoNavBar} alt="logo" />
      <section>
        <div className={styles.locationSection}>
          <MdLocationOn className={styles.locationIcon} />
          <p>Porto Alegre, RS</p>
        </div>
        <button className={styles.cartSection}>
          <span className={styles.itensNumberOnCart}>3</span>
          <HiShoppingCart className={styles.cartIcon} />
        </button>
      </section>
    </div>
  )
}
