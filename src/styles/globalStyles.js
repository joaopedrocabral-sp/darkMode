import { createGlobalStyle } from "styled-components";

const MyGlobalStyles = createGlobalStyle`
    html{
        scroll-behavior: smooth;
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        gap: 30px;
        font-family: "Poppins";
        text-align: center;
        color: ${props => props.theme.color.textColorAlternative};
    }
    body{
        background-color: ${props => props.theme.color.backgroundColor};
        margin: 0 auto;
    }
    div.section-boxed{
        max-width: 1300px;
        margin: 0 auto;
        padding: 100px 0;
    }
    div.section-boxed-small{
        max-width: 1300px;
        margin: 0 auto;
        padding: 50px 0;
    }
    div.header-boxed{
        width: 100%;
        max-width: 1300px;
        margin: 0 auto;
        padding: 30px 0;
    }
    div.flex-container-1{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    div.flex-container-2{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    div.flex-children-100{
        width: 100%;
    }
    div.flex-children-90{
        width: 90%;
    }
    div.flex-children-80{
        width: 80%;
    }
    div.flex-children-70{
        width: 70%;
    }
    div.flex-children-60{
        width: 60%;
    }
    div.flex-children-50{
        width: 50%;
    }
    div.flex-children-40{
        width: 40%;
    }
    div.flex-children-30{
        width: 30%;
    }
    div.flex-children-20{
        width: 20%;
    }
    div.flex-children-10{
        width: 10%;
    }
    div.flex-children-r{
        padding-left: 20px;
    }
    div.flex-children-l{
        padding-right: 20px;
    }
    div.grid-container-1{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 1fr 1fr;
        justify-content: center;
        align-items: center;
    }
    h1{
        font-family: "Montserrat";
        font-size: 45px;
        font-weight: 900;
        margin-bottom: 20px;
    }
    h2{
        font-family: "Montserrat";
        font-size: 45px;
        font-weight: 900;
        margin-bottom: 30px;
    }
    h3{
        font-family: "Montserrat";
        font-size: 20px;
        font-weight: 800;
        margin-bottom: 10px;
    }
    p{
        font-weight: 400;
        margin-bottom: 5px;
        font-size: 20px;
    }
    a{
        text-decoration: none;
        font-size: 18px;
    }
    a:hover{
        color: ${props => props.theme.color.purple.primary};
    }
    button{
        text-transform: uppercase;
        font-weight: 600;
        border-radius: 30px;
        border: none;
        cursor: pointer;
    }
    .white-text{
        color: ${props => props.theme.color.white};
    }
    .mb-0{
        margin-bottom: 0;
    }
    .mb5{
        margin-bottom: 5px;
    }
    .mb10{
        margin-bottom: 10px;
    }
    .mb20{
        margin-bottom: 20px;
    }
    .mb30{
        margin-bottom: 30px;
    }

    @media (max-width: 767px) {
        h1{
            font-size: 28px;
        }
        h2{
            font-size: 26px;
        }
        h3{
            font-size: 18px;
        }
        p{
            font-size: 16px;
        }
        img{
            text-align: center;
        }
        div.flex-children-90{
            width: 100%;
        }
        div.section-boxed{
        padding: 50px 15px;
        }
        div.section-boxed-small{
        padding: 50px 15px;
        }
        div.flex-container-2{
            justify-content: center;
        }
        .mobileHidden{
            display: none;
        }
        div.grid-container-1{
            grid-template-columns: 1fr;
        }
    }
`

export default MyGlobalStyles;