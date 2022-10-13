import styled from "styled-components";
import { fixedTop } from "../utilities"


const colorWhite = "white";
const colorBlack = "back";
const colorIndigo = "indigo";
const colorTomato = "tomato";
// const colors = {
//     white: "#fff"
// }

export const Button = styled.button`
    padding: 5px 20px;
    border-radius: 4px;
    color: ${colorWhite};
    font-size: 2rem;
    border: none;
    background: ${colorIndigo};
`;

export const CancelButton = styled(Button)`
    background: tomato;
    ${fixedTop}
`