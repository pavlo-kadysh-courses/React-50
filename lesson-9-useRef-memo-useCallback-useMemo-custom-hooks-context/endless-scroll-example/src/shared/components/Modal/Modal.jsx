import { Component } from "react";
import { createPortal } from "react-dom"
import styles from "./modal.module.scss";

const modalRoot = document.getElementById("modal-root");

export default class Modal extends Component {

  componentDidMount() {
    document.addEventListener("keydown", this.closeModal);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.closeModal)
  }

  closeModal = ({target, currentTarget, code}) => {
    if (target === currentTarget || code === "Escape") {
      this.props.onClose();
    }
  }

  render() {
    const { closeModal } = this;
    const { children } = this.props;
    return createPortal(
      <div className={styles.overlay} onClick={closeModal}>
        <div className={styles.modal}>
            <span className={styles.close} onClick={closeModal}>X</span>
            {children}
        </div>
      </div>,
      modalRoot
    )
  }
}
