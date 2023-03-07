import { Header } from '../../components/Header'
import { MainContect } from '../../components/MainContent'
import { CoffeeBoxs } from '../../components/CoffeeBoxs'
import styles from './Home.module.scss'

export function Home() {
  return (
    <div className={styles.homeWrapper}>
      <Header />
      <div className={styles.homeContainer}>
        <MainContect />
        <CoffeeBoxs />
      </div>
    </div>
  )
}
