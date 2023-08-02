import  StepProgress  from "./StepProgress/StepProgress";
import  Step1  from "./Step1/Step1";
import  Step2  from "./Step2/Step2";
import  Step3  from "./Step3/Step3";
import  ProgressControl from "./ProgressControl/ProgressControlOne";
import styles from "./Index.module.css";
import { useState } from "react";

export default function Register() {
  const [step, setStep] = useState(1);

  return (
      <div className={styles.container}>
        <StepProgress step={step} />
        {step === 1 && <Step1 />}
        {step === 2 && <Step2 />}
        {step === 3 && <Step3 />}
        <ProgressControl step={step} setStep={setStep} />
      </div>
  );
}
