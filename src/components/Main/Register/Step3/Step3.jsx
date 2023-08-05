import styles from "./Step3.module.css";
import { useContext } from "react";
import { FormContext } from "context/FormContext";

export default function Step3() {
  const { payInfo, setPayInfo } = useContext(FormContext);

  const handleOnChange = (e) => {
    setPayInfo({
      ...payInfo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className={styles.paymentForm} data-phase="credit-card">
      <h3 className={styles.paymentTitle}>付款資訊</h3>
      <section className={styles.paymentInfo}>
        <div className={styles.paymentName}>
          <div className={styles.inputLabel}>持卡人姓名</div>
          <input
            className={styles.payInputName}
            name="cardName"
            type="text"
            placeholder="John Doe"
            onChange={(e) => handleOnChange(e)}
          />
        </div>
        <div className={styles.paymentCardNumber}>
          <div className={styles.inputLabel}>卡號</div>
          <input
            className={styles.payInputNumber}
            name="cardNumber"
            type="text"
            placeholder="1111 2222 3333 4444"
            onChange={(e) => handleOnChange(e)}
          />
        </div>
        <div className={styles.paymentSecret}>
          <div className={styles.paymentExpire}>
            <div className={styles.inputLabel}>有效期限</div>
            <input
              className={styles.payInputExpire}
              name="cardExpireDate"
              type="text"
              placeholder="MM/YY"
              onChange={(e) => handleOnChange(e)}
            />
          </div>
          <div className={styles.paymentCVC}>
            <div className={styles.inputLabel}>CVC / CCV</div>
            <input
              className={styles.payInputCVC}
              name="cardCVC"
              type="text"
              placeholder="123"
              onChange={(e) => handleOnChange(e)}
            />
          </div>
        </div>
      </section>
    </form>
  );
}
