import { ProductList } from "./ProductList/ProductList"
import { PayInfo } from "./PayInfo/PayInfo"
import styles from './Cart.module.css'


export function Cart() {
  return (
    <section className={styles.cartContainer}>
      <h3 className={styles.cartTitle}>購物籃</h3>
      <ProductList />
      <PayInfo />
    </section>
  )
}
