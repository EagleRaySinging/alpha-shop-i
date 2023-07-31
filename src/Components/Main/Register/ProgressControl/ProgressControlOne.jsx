import styles from "./ProgressControl.module.css";
import { ReactComponent as RightArrow } from "assets/icons/right-arrow.svg";
import { ReactComponent as LeftArrow } from "assets/icons/left-arrow.svg";

function ButtonPrevious({handleClickPrevious}) {
  return (
      <button className={styles.buttonPre} onClick={handleClickPrevious}>
        <LeftArrow className={styles.leftArrow} />
        上一步
      </button>
  );
}
function ButtonNext({handleClickNext}) {
  return (
      <button className={styles.buttonNext} onClick={handleClickNext}>
        下一步
        <RightArrow className={styles.rightArrow} />
      </button>
  );
}
function ButtonConfirm() {
  return (
      <button className={styles.buttonConfirm}>
        確認下單
      </button>
  );
}

export default function ProgressControl({ step, setStep }) {
  function handleClickNext() {
    if (step < 3) {
      setStep((s) => s + 1);
    }
  }
  function handleClickPrevious() {
    if (step > 1) {
      setStep((s) => s - 1);
    }
  }

  return (
      <section className={styles.progressControlContainer}>
        <section className={(step === 1) ? styles.buttonStepPageOne : styles.buttonStep} data-phase="address">
          {(step === 2 || step === 3) && <ButtonPrevious 
          handleClickPrevious={handleClickPrevious}/>}
          {(step === 1 || step === 2) && <ButtonNext 
          handleClickNext={handleClickNext}/>}
          {(step === 3) && <ButtonConfirm />}
        </section>
      </section>
  );
}
