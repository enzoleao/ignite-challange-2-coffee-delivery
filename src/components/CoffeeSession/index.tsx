import { CoffeeBox } from '../CoffeeCard'
import { Coffee } from '../../services/coffeeServices'
import styles from './CoffeeSession.module.scss'

export function CoffeeSession() {
  return (
    <div className={styles.coffeeSessionWrapper}>
      <div className={styles.coffeeSessionContainer}>
        <p className={styles.coffeeHeader}>Nossos Cafés</p>

        <div className={styles.CoffeeAreas}>
          {Coffee.map((i) => {
            return <CoffeeBox key={i.id} />
          })}
        </div>
      </div>
    </div>
  )
}
