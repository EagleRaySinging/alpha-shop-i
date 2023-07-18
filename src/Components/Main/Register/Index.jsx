import { StepProgress } from "./StepProgress";
import { Step1 } from "./Step1";
import { ProgressControl } from "./ProgressControlOne";
import styles from './Index.module.css'

export function Register() {
  return (
    <>
      <div className={styles.container}>
        <StepProgress />
        <Step1 />
        <ProgressControl />
      </div>
    </>
  )
}