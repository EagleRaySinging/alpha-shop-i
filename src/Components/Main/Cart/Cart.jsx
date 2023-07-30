import { ProductList } from "./ProductList/ProductList"
import { PayInfo } from "./PayInfo/PayInfo"
import styles from './Cart.module.css'
import productData from './productData.json' 
import {useState} from "react"


export function Cart() {
  const [total, setTotal] = useState(0)

  return (
    <section className={styles.cartContainer}>
      <h3 className={styles.cartTitle}>購物籃</h3>
      <ProductList 
      productData={productData}
      setTotal={setTotal}/>
      <PayInfo 
      total={total}/>
    </section>
  )
}
