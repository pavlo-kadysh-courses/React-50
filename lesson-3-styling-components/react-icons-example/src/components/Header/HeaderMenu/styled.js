import styled from "@emotion/styled";

export const HeaderMenuWrapper = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
` 

export const HeaderMenuLink = styled.a`
    display: inline-block;
    text-decoration: none;
    color: ${(props) => props.active ? '#fff' : 'red'};
    background-color: ${(props) => props.active ? 'red' : '#fff'};
    padding: 10px 15px;
    border: 1px solid red;
`