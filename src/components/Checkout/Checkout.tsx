import styles from './Checkout.module.scss'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { CheckoutCoffeeCard } from '../CheckoutCoffeeCard'
import { useContexts } from '../../contexts/useContext'
export function Checkout() {
  const { itensCartToBuy, totalPurchase } = useContexts()
  const entrega = 10.0
  return (
    <div className={styles.checkoutWrapper}>
      <div className={styles.checkoutContainer}>
        <section className={styles.leftSection}>
          <p className={styles.headerFinishPurschase}>Complete seu pedido</p>
          <form className={styles.formAdressClient} action="">
            <header>
              <span>
                <MapPinLine color="#C47F17" size={22} />
                <p>Endereço de Entrega</p>
              </span>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </header>
            <main className={styles.inputFormArea}>
              <input placeholder="CEP" className={styles.inputCep} type="tel" />
              <input placeholder="Rua" type="text" />
              <span>
                <input
                  placeholder="Número"
                  type="text"
                  className={styles.inputNumber}
                />
                <input placeholder="Complemento" type="text" />
              </span>
              <span>
                <input
                  className={styles.inputBairro}
                  placeholder="Bairro"
                  type="text"
                />
                <input
                  className={styles.inputCity}
                  placeholder="Cidade"
                  type="text"
                />
                <input
                  placeholder="UF"
                  className={styles.inputUF}
                  type="text"
                />
              </span>
            </main>
          </form>
          <footer>
            <header>
              <span>
                <CurrencyDollar color="#8047F8" size={22} />
                <p>Pagamento</p>
              </span>
              <p className={styles.paymentDescription}>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </header>
            <div className={styles.selectPaymentForm}>
              <span>
                <CreditCard className={styles.iconPaymentForm} size={22} />
                <button>Cartão de crédito</button>
              </span>
              <span>
                <Bank className={styles.iconPaymentForm} size={22} />
                <button>Cartão de Debito</button>
              </span>
              <span>
                <Money className={styles.iconPaymentForm} size={22} />
                <button>Dinheiro</button>
              </span>
            </div>
          </footer>
        </section>
        <section className={styles.purchaseSummary}>
          <p className={styles.purschaseSummaryHeader}>Cafés selecionados</p>
          <div className={styles.purchaseSummaryItens}>
            <main>
              {itensCartToBuy?.map((i: any) => {
                return (
                  <CheckoutCoffeeCard
                    key={i.name}
                    name={i.name}
                    price={i.price.toFixed(2)}
                    unity={i.units}
                  />
                )
              })}
            </main>
            <footer>
              <div>
                <span>
                  <p className={styles.totalItensAndDelivery}>Total de itens</p>
                  <p className={styles.priceItensAndDelivery}>
                    R$ {totalPurchase.toFixed(2)}
                  </p>
                </span>
                <span>
                  <p className={styles.totalItensAndDelivery}>Entrega</p>
                  <p className={styles.priceItensAndDelivery}>R$ {entrega}</p>
                </span>
                <span>
                  <p className={styles.totalPurchase}>Total</p>
                  <p className={styles.totalPurchase}>
                    R$ {totalPurchase + entrega}
                  </p>
                </span>
              </div>
              <button
                onClick={() => console.log(itensCartToBuy)}
                className={styles.purchaseConfirmationButton}
              >
                confirmar pedido
              </button>
            </footer>
          </div>
        </section>
      </div>
    </div>
  )
}
