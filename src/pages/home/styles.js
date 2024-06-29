import styled from "styled-components";

export const StandardSection = styled.div`
    color: ${props => props.theme.color.textColorAlternative}
`

export const AlternativeSection = styled.div`
    background: linear-gradient(${props => props.theme.color.purple.primary}, ${props => props.theme.color.purple.tertiary});
`

export const ServicesItem = styled.div`
    background: linear-gradient(${props => props.theme.color.purple.primary}, ${props => props.theme.color.purple.tertiary});
    color: ${props => props.theme.color.white};
    border-radius: 30px;
    padding: 20px 30px;;
    display: flex;
    gap: 0;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;

    @media (max-width: 767px) {
        height: fit-content;
    }
`

export const ServicesItemTitle = styled.h3`
    text-transform: uppercase;
    color: ${props => props.theme.color.white};
`

export const ServicesItemText = styled.p`
    color: ${props => props.theme.color.white};
    font-size: 16px;
`
