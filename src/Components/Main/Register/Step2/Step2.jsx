import styles from "./Step2.module.css";

export function Step2() {
  return (
    <>
      <form className={styles.formBody} data-phase="shipping">
        <h3 className={styles.formTitle}>運送方式</h3>
        <section className={styles.deliverWays}>
          <label className={styles.deliverStandard} data-price="0">
            <input className={styles.deliverCheck}
              id="shipping-standard"
              type="radio"
              name="shipping"
              checked
            />
            <div className={styles.deliverInfo}>
              <div className={styles.deliverWay}>
                <div className={styles.text}>標準運送</div>
                <div className={styles.price}>免費</div>
              </div>
              <div className={styles.deliverDescription}>約 3~7 個工作天</div>
            </div>
            <div className={styles.boxBorder}></div>
          </label>
          <label className={styles.deliverExpress} data-price="500">
            <input className={styles.deliverCheck} id="shipping-dhl" type="radio" name="shipping" />
            <div className={styles.deliverInfo}>
              <div className={styles.deliverWay}>
                <div className={styles.text}>DHL 貨運</div>
                <div className={styles.price}>$500</div>
              </div>
              <div className={styles.deliverDescription}>48 小時內送達</div>
            </div>
            <div className={styles.boxBorder}></div>
          </label>
        </section>
      </form>
    </>
  );
}
