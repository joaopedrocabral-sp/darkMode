import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: ${props => props.theme.color.textColor};
    background-color: ${props => props.theme.color.backgroundColor};
    border-bottom: 2px solid ${props => props.theme.color.textColor};
`

export const ButtonModeToggler = styled.button`
    background-color: ${props => props.theme.color.backgroundColor};
`