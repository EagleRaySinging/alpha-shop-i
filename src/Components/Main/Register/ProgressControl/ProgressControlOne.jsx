import styles from './ProgressControl.module.css'
import { ReactComponent as RightArrow } from 'assets/icons/right-arrow.svg'

export function ProgressControl() {
  return (
    <>
      <section className={styles.progressControlContainer}>
        <section className={styles.button} data-phase="address">
          <button className={styles.buttonNext}>
            下一步
            <RightArrow className={styles.rightArrow}/>
          </button>
        </section>
      </section>
    </>
  )
}