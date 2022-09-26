import { Component } from 'react'
import { BiAtom } from "react-icons/bi";

export default class Button extends Component {
  render() {
    return (
      <button className={this.props.className}><BiAtom className="iconInButton"/>Button</button>
    )
  }
}

// export default function Button({className, openModal}) {
//   return (
//     <button className={className} onClick={openModal()}>Button</button>
//   )
// }
