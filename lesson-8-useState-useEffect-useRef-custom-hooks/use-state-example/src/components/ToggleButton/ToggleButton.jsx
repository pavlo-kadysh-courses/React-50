import styles from "./toggle-button.module.scss";

import React from 'react'
import { useState } from "react";

export default function ToggleButton({buttonText}) {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive((prev) => !prev);
    }

    const className = isActive ? `${styles.active} ${styles.btn}` : `${styles.btn}`;

    return (
        <button className={className} onClick={handleClick}>{buttonText}</button>
    )
}


// export default class ToggleButton extends Component {

//     state = {
//         isActive: false,
//     }

//     handleClick = () => {
//         this.setState((prev) => {
//             return {
//                 isActive: !prev.isActive,
//             }
//         })
//     }

//     render() {
//         const { buttonText } = this.props;
//         const { isActive } = this.state;
//         const className = isActive ? `${styles.active} ${styles.btn}` : `${styles.btn}`;
//         return (
//             <button className={className} onClick={this.handleClick}>{buttonText}</button>
//         )
//     }
// }