import styles from './PayInfo.module.css'

export function PayInfo({total}) {
  return (
    <>
      <section className={styles.cartInfoShipping}>
        <div className={styles.text}>運費</div>
        <div className={styles.price}>免費</div>
      </section>
      <section className={styles.cartInfoTotal}>
        <div className={styles.text}>小計</div>
        <div className={styles.price}>${total}</div>
      </section>
    </>
  )
}

