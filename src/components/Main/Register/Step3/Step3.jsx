import styles from "./Step3.module.css";

export default function Step3() {
  return (
      <form className={styles.paymentForm} data-phase="credit-card">
        <h3 className={styles.paymentTitle}>付款資訊</h3>
        <section className={styles.paymentInfo}>
          <div className={styles.paymentName}>
            <div className={styles.inputLabel}>持卡人姓名</div>
            <input className={styles.payInputName} type="text" placeholder="John Doe" />
          </div>
          <div className={styles.paymentCardNumber}>
            <div className={styles.inputLabel}>卡號</div>
            <input className={styles.payInputNumber} type="text" placeholder="1111 2222 3333 4444" />
          </div>
          <div className={styles.paymentSecret}>
            <div className={styles.paymentExpire}>
              <div className={styles.inputLabel}>有效期限</div>
              <input className={styles.payInputExpire} type="text" placeholder="MM/YY" />
            </div>
            <div className={styles.paymentCVC}>
              <div className={styles.inputLabel}>CVC / CCV</div>
              <input className={styles.payInputCVC} type="text" placeholder="123" />
            </div>
          </div>
        </section>
      </form>
  );
}
