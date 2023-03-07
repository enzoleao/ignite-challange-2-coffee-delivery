import { Header } from '../../components/Header'
import { MainContect } from '../../components/MainContent'
import { CoffeeSession } from '../../components/CoffeeSession'
import styles from './Home.module.scss'

export function Home() {
  return (
    <div className={styles.homeWrapper}>
      <Header />
      <div className={styles.homeContainer}>
        <MainContect />
        <CoffeeSession />
      </div>
    </div>
  )
}
