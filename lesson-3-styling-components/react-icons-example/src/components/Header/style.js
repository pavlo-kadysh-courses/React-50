import styled from 'styled-components';

export const HeaderWrapper = styled.header`
    padding: 25px 0;
    .row {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .btn {
        display: inline-block;
        text-decoration: none;
        border: 1px solid red;
        border-radius: 5px;
        color: #fff;
        background-color: ${props => props.theme.mainColor};
        padding: 10px 15px;
        cursor: pointer;
    }
`