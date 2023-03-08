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
            return (
              <CoffeeBox
                img={i.image}
                key={i.id}
                name={i.nome}
                tag={i.tag}
                description={i.descricao}
                price={i.preco}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
