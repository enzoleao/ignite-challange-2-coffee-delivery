import { Header } from '../../components/Header'
import { MainContect } from '../../components/MainContent'
import { CoffeeSession } from '../../components/CoffeeSession'
import styles from './Home.module.scss'
import { useContexts } from '../../contexts/useContext'
import { Checkout } from '../../components/Checkout/Checkout'

export function Home() {
  const { componentToShow } = useContexts()
  return (
    <div className={styles.homeWrapper}>
      <Header />
      <div className={styles.homeContainer}>
        {(() => {
          switch (componentToShow) {
            case 'home':
              return (
                <>
                  <MainContect />
                  <CoffeeSession />
                </>
              )
            case 'cart':
              return <Checkout />
            default:
              return 'home'
          }
        })()}
      </div>
    </div>
  )
}
