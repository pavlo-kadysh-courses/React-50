import { useEffect } from "react";
import {createPortal} from "react-dom";

import styles from "./modal.module.scss";

const modalRoot = document.getElementById("modal-root");

const Modal = ({close, children}) => {

    useEffect(() => {
        document.addEventListener("keydown", closeModal);
        
        return () => document.removeEventListener("keydown", closeModal)
    }, []);

    const closeModal = ({target, currentTarget, code}) => {
        if(target === currentTarget || code === "Escape") {
            close()
        }
    };

    return createPortal(
        <div className={styles.overlay} onClick={closeModal}>
            <div className={styles.modal}>
                <span onClick={closeModal} className={styles.close}>X</span>
                {children}
            </div>
        </div>,
        modalRoot
    )
}

/*
class Modal extends Component {

    componentDidMount(){
        document.addEventListener("keydown", this.closeModal)
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.closeModal)
    }

    closeModal = ({target, currentTarget, code}) => {
        if(target === currentTarget || code === "Escape") {
            this.props.close()
        }
    }

    render(){
        const {closeModal} = this;
        const {children} = this.props;

        return createPortal(
            <div className={styles.overlay} onClick={closeModal}>
                <div className={styles.modal}>
                    <span onClick={closeModal} className={styles.close}>X</span>
                    {children}
                </div>
            </div>,
            modalRoot
        )
    }
}
*/
export default Modal;