import { Header } from '../../components/Header'
import { MainContect } from '../../components/MainContent'
import { CoffeeSession } from '../../components/CoffeeSession'
import styles from './Home.module.scss'
import { useContexts } from '../../contexts/useContext'
import { Checkout } from '../../components/Checkout/Checkout'
import { FineshedCheckout } from '../../components/FineshCheckout'

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
            case 'fineshCheckout':
              return <FineshedCheckout />
            default:
              return 'home'
          }
        })()}
      </div>
    </div>
  )
}
