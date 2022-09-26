import styles from "./submit-button.module.scss";

export default function SubmitButton({text, onClick}) {
  return (
    <button onClick={onClick} className={styles.btn}>{text}</button>
  )
}
