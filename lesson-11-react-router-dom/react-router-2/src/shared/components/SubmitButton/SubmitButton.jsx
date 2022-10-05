import styles from "./submit-button.module.scss";

const SubmitButton = ({text, onClick}) => {
    return (
        <button onClick={onClick} className={styles.btn}>{text}</button>
    )
}

export default SubmitButton;