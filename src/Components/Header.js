import styled from "styled-components";

const Background = styled.div`
  height: 80px;
  align-items: center;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  @media (max-width: 750px) {
    justify-content: center;
  }
  
  
  
`;

const Logo = styled.img`
  height: 50px;

  @media (max-width: 750px) {
    display: none;
  }
  
`;

const ChromeAddButton = styled.a`
  background-color: #2470c1;
  border-radius: 10px;
  cursor: pointer;
  transition-duration: 200ms;
  text-decoration: none;
  color: #e3e2e2;
  padding: 14px 16px;
  
  &:hover {
    transition-duration: 200ms;
    opacity: 0.8;
  }

  @media (max-width: 450px) {
    padding: 10px 10px;
    border-radius: 6px;
  }
  
`;

const DevCreditButton = styled.a`
  text-decoration: none;
  color: #e3e2e2;
  margin-right: 25px;
  cursor: pointer;

  &:hover {
    transition-duration: 200ms;
    opacity: 0.8;
  }

  @media (max-width: 750px) {
    margin-right: 35px;
  }

`;

const ButtonContainer = styled.div`
  font-family: "Montserrat", "sans-serif";
  color: #e3e2e2;
  font-weight: 600;
  font-size: 17px;

  @media (max-width: 560px) {
    font-size: 13px;
  }

  @media (max-width: 400px) {
    font-size: 11px;
  }

`;



const Header = () => {

    return (
        <Background>
            <Logo src={"/images/ExtensionLogo.png"}/>
            <ButtonContainer>
                <DevCreditButton target="_blank" href="https://isaackogan.com">Visit Developer</DevCreditButton>
                <ChromeAddButton target="_blank" href="/download">Add To Chrome</ChromeAddButton>
            </ButtonContainer>
        </Background>
    )
}

export default Header;
