import { Component } from "react";
import { createPortal } from "react-dom"
import styles from "./modal.module.scss";
import { ModalPopUp, HeadingOne } from "../../../styles/elements";

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
      <ModalPopUp 
        closeModal={closeModal} 
        content={children}
      />
      ,
      modalRoot
    )
  }
}
