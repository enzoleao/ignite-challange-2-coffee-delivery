import styles from './FineshCheckout.module.scss'
import deliveryImage from '../../assets/deliveryImage.png'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useContexts } from '../../contexts/useContext'
export function FineshedCheckout() {
  const { bairro, cidade, rua, houseNumber, methodPayment } = useContexts()
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
                <MapPin size={16} className={styles.checkoutIconLocation} />
                <span>
                  <p className={styles.deliveryAdress}>
                    Entrega em{' '}
                    <p className={styles.deliveryInformations}>{rua}</p>,{' '}
                    <p className={styles.deliveryInformations}>{houseNumber}</p>
                  </p>
                  <p>
                    {bairro} - {cidade}
                  </p>
                </span>
              </div>
              <div className={styles.boxInformations}>
                <Timer size={16} className={styles.checkoutIconTimer} />
                <span>
                  <p>Previsão de Entrega</p>
                  <p className={styles.deliveryInformations}>20 - 30 minutos</p>
                </span>
              </div>
              <div className={styles.boxInformations}>
                <CurrencyDollar
                  size={16}
                  className={styles.checkoutIconCurrencyMoney}
                />
                <span>
                  <p>Pagamento</p>
                  <p className={styles.deliveryInformations}>{methodPayment}</p>
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
