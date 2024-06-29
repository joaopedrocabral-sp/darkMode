import { HeaderContainer, ButtonModeToggler } from "./styles"
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

function Header({theme, themeToggler}){

    return(

        <HeaderContainer>
            <div className="header-boxed flex-container-2">
                <h2 className="mb-0">Título do site</h2>
                <ButtonModeToggler className="modeToggler" onClick={themeToggler}>
                    {theme == "light" ? (
                        <MdOutlineDarkMode style={{fontSize: "35px", marginTop: "3px"}}/>
                    ) : (
                        <MdOutlineLightMode style={{fontSize: "35px", marginTop: "3px"}}/>
                    )}             
                </ButtonModeToggler>
            </div>
        </HeaderContainer>

    )

}

export default Header;