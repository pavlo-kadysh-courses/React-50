import { css } from "styled-components";

// Css Helper
export const fixedTop = css`
    position: fixed;
    top: ${({top}) => top + "px"};
    left: 0;
`;