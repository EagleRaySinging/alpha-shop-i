import styles from './Step1.module.css'
import stepOneData from './Step1Data.json'

function SelectWrap({ selectData, label }) {
  return (
      <select>
        <option value="" defaultValue>請選擇{label}</option>
        {selectData.map((data) => {
          return <option key={data.value} value={data.value}>{data.name}</option>
        })}
      </select>
  )
}

export default function Step1() {
  return (
      <section className={styles.payInfo}>
        <form className={styles.container} data-phase="address">
          <h3 className={styles.formTitle}>寄送地址</h3>
          <section className={styles.formBody}>
            <div className={styles.formContain}>
              <div className={styles.inputGroupGender}>
                <div className={styles.labelTitle}>稱謂</div>
                <SelectWrap
                  selectData={stepOneData.genders}
                  label={"稱謂"}
                />
              </div>
              <div className={styles.inputGroupName}>
                <div className={styles.labelTitle}>姓名</div>
                <input className={styles.inputName} type="text" placeholder="請輸入姓名" />
              </div>
            </div>
            <div className={styles.formContain}>
              <div className={styles.inputGroupNumber}>
                <div className={styles.labelTitle}>電話</div>
                <input className={styles.inputNumber} type="tel" placeholder="請輸入行動電話" />
              </div>
              <div className={styles.inputGroupEmail}>
                <div className={styles.labelTitle}>Email</div>
                <input className={styles.inputEmail} type="email" placeholder="請輸入電子郵件" />
              </div>
            </div>
            <div className={styles.formContain}>
              <div className={styles.inputGroupCounty}>
                <div className={styles.labelTitle}>縣市</div>
                <SelectWrap
                selectData={stepOneData.county}
                label={"縣市"}
                />
              </div>
              <div className={styles.inputGroupAddress}>
                <div className={styles.labelTitle}>地址</div>
                <input className={styles.inputAddress} type="text" placeholder="請輸入地址" />
              </div>
            </div>
          </section>
        </form>
      </section>
  )
}