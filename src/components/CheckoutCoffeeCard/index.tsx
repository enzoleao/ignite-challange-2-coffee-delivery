import { Trash } from 'phosphor-react'
import { useContexts } from '../../contexts/useContext'
import { Coffee } from '../../services/coffeeServices'
import { useState } from 'react'
import styles from './CheckoutCoffeeCard.module.scss'
interface CheckoutCoffeeCardProps {
  id: number
  unity: number
  name: string
  price: string
}

export function CheckoutCoffeeCard(props: CheckoutCoffeeCardProps) {
  const {
    setItensQuantity,
    setItensCartToBuy,
    totalPurchase,
    setTotalPurchase,
  } = useContexts()
  const newPrice = parseFloat(props.price)
  const [unitiesCoffeeEditCheckout, setUnitiesCoffeeEditCheckout] = useState(
    props.unity,
  )
  const coffeeImageFilterCheckoutCard = Coffee.filter(
    (produto) => produto.nome === props.name,
  )
  const [productPrice, setProductPrice] = useState(parseFloat(props.price))

  const addUnitiesCoffee = () => {
    setUnitiesCoffeeEditCheckout(unitiesCoffeeEditCheckout + 1)
    const itens = localStorage.getItem('itensBuy')!
    const itensObject = JSON.parse(itens)
    const getObjectToChange = itensObject.filter(
      (produto: any) => produto.id === props.id,
    )
    const newObjectWithoutItemUpdated = itensObject.filter(
      (produto: any) => produto.id !== props.id,
    )
    newObjectWithoutItemUpdated.push({
      id: getObjectToChange[0].id,
      name: getObjectToChange[0].name,
      price: getObjectToChange[0].price + newPrice,
      units: unitiesCoffeeEditCheckout + 1,
    })
    localStorage.setItem(
      'itensBuy',
      JSON.stringify(newObjectWithoutItemUpdated),
    )
    setTotalPurchase(totalPurchase + 9.9)
    setProductPrice(productPrice + 9.9)
  }
  const removeUnitiesCoffee = () => {
    setUnitiesCoffeeEditCheckout(unitiesCoffeeEditCheckout - 1)
    const itens = localStorage.getItem('itensBuy')!
    const itensObject = JSON.parse(itens)
    const getObjectToChange = itensObject.filter(
      (produto: any) => produto.id === props.id,
    )
    const newObjectWithoutItemUpdated = itensObject.filter(
      (produto: any) => produto.id !== props.id,
    )
    newObjectWithoutItemUpdated.push({
      id: getObjectToChange[0].id,
      name: getObjectToChange[0].name,
      price: getObjectToChange[0].price - newPrice,
      units: unitiesCoffeeEditCheckout - 1,
    })
    localStorage.setItem(
      'itensBuy',
      JSON.stringify(newObjectWithoutItemUpdated),
    )
    setTotalPurchase(totalPurchase - 9.9)
    setProductPrice(productPrice - 9.9)
  }
  const removeCoffee = () => {
    const newPrice = parseFloat(props.price)
    const itens = localStorage.getItem('itensBuy')!
    const itensObject = JSON.parse(itens)
    const newObjectWithoutItemRemoved = itensObject.filter(
      (produto: any) => produto.id !== props.id,
    )
    localStorage.setItem(
      'itensBuy',
      JSON.stringify(newObjectWithoutItemRemoved),
    )
    setItensCartToBuy(newObjectWithoutItemRemoved)
    setItensQuantity(itensObject.length - 1)
    setTotalPurchase(totalPurchase - newPrice)
    setTotalPurchase(0)
  }
  return (
    <>
      <div className={styles.checkoutCoffeeCardContainer}>
        <img src={coffeeImageFilterCheckoutCard[0].image} alt="" />
        <div className={styles.optionsCheckout}>
          <p className={styles.coffeeName}>{props.name}</p>
          <div>
            <span className={styles.adictionButtons}>
              <button
                disabled={unitiesCoffeeEditCheckout === 1}
                onClickCapture={removeUnitiesCoffee}
              >
                -
              </button>
              <p>{unitiesCoffeeEditCheckout}</p>
              <button onClick={addUnitiesCoffee}>+</button>
            </span>
            <span className={styles.removeButton}>
              <button onClick={removeCoffee}>
                <Trash color="#8047F8" className={styles.trashIcon} size={16} />
                Remover
              </button>
            </span>
          </div>
        </div>
        <div>
          <p className={styles.pricePerItens}>R$ {productPrice.toFixed(2)}</p>
        </div>
      </div>
      <hr />
    </>
  )
}
