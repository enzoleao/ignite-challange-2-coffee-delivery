import styles from './MainContent.module.scss'
import coffeeImage from '../../assets/coffeImage.png'
export function MainContect() {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.mainContent}>
        <section>Title</section>
        <section>
          <img src={coffeeImage} alt="coffee-image" />
        </section>
      </div>
    </div>
  )
}
