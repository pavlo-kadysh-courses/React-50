import { Component } from "react";
import styles from "./toggle-button.module.scss";

export default class ToggleButton extends Component {

    state = {
        isActive: false,
    }

    handleClick = () => {
        this.setState((prev) => {
            return {
                isActive: !prev.isActive,
            }
        })
    }



    render() {
        const { buttonText } = this.props;
        const { isActive } = this.state;
        const className = isActive ? `${styles.active} ${styles.btn}` : `${styles.btn}`;
        return (
            <button className={className} onClick={this.handleClick}>{buttonText}</button>
        )
    }
}