import { StandardSection, AlternativeSection, ServicesItem, ServicesItemTitle, ServicesItemText } from "./styles";

function Home(){
    return(
        <>
            <StandardSection>
                <div className="section-boxed">
                    <div className="grid-container-1">
                        <ServicesItem>
                            <ServicesItemTitle>Serviço 1</ServicesItemTitle>
                            <ServicesItemText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, ipsa obcaecati officiis hic, fugit provident fuga facere dolorem iusto recusandae officia possimus aperiam dolorum ducimus.</ServicesItemText>
                        </ServicesItem>
                        <ServicesItem>
                            <ServicesItemTitle>Serviço 2</ServicesItemTitle>
                            <ServicesItemText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, ipsa obcaecati officiis hic, fugit provident fuga facere dolorem iusto recusandae officia possimus aperiam dolorum ducimus.</ServicesItemText>
                        </ServicesItem>
                        <ServicesItem>
                            <ServicesItemTitle>Serviço 3</ServicesItemTitle>
                            <ServicesItemText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, ipsa obcaecati officiis hic, fugit provident fuga facere dolorem iusto recusandae officia possimus aperiam dolorum ducimus.</ServicesItemText>
                        </ServicesItem>
                        <ServicesItem>
                            <ServicesItemTitle>Serviço 4</ServicesItemTitle>
                            <ServicesItemText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, ipsa obcaecati officiis hic, fugit provident fuga facere dolorem iusto recusandae officia possimus aperiam dolorum ducimus.</ServicesItemText>
                        </ServicesItem>
                        <ServicesItem>
                            <ServicesItemTitle>Serviço 5</ServicesItemTitle>
                            <ServicesItemText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, ipsa obcaecati officiis hic, fugit provident fuga facere dolorem iusto recusandae officia possimus aperiam dolorum ducimus.</ServicesItemText>
                        </ServicesItem>
                        <ServicesItem>
                            <ServicesItemTitle>Serviço 6</ServicesItemTitle>
                            <ServicesItemText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, ipsa obcaecati officiis hic, fugit provident fuga facere dolorem iusto recusandae officia possimus aperiam dolorum ducimus.</ServicesItemText>
                        </ServicesItem>
                    </div>
                </div>
            </StandardSection>
            <AlternativeSection>
                <div className="section-boxed">
                    
                </div>
            </AlternativeSection>
        </>
    )
}

export default Home;