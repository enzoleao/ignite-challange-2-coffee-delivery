import styles from './FineshCheckout.module.scss'
import deliveryImage from '../../assets/deliveryImage.png'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
export function FineshedCheckout() {
  return (
    <div className={styles.fineshCheckoutWrapper}>
      <div className={styles.fineshCheckoutContainer}>
        <section className="">
          <div className={styles.DeliveryInformations}>
            <header>
              <p>Uhu! Pedido confirmado</p>
              <p className={styles.footerHeader}>
                Agora é só aguardar que logo o café chegará até você
              </p>
            </header>
            <div className={styles.informationsDeliveryBox}>
              <div className={styles.boxInformations}>
                <MapPin className={styles.checkoutIconLocation} />
                <span>
                  <p>Entrega em</p>
                  <p>Farrapos - Porto Alegre</p>
                </span>
              </div>
              <div className={styles.boxInformations}>
                <Timer className={styles.checkoutIconTimer} />
                <span>
                  <p>Previsão de Entrega</p>
                  <p>20 - 30 minutos</p>
                </span>
              </div>
              <div className={styles.boxInformations}>
                <CurrencyDollar className={styles.checkoutIconCurrencyMoney} />
                <span>
                  <p>Pagamento</p>
                </span>
              </div>
            </div>
          </div>
        </section>
        <img src={deliveryImage} alt="" />
      </div>
    </div>
  )
}
