import styled from "styled-components";

const Icon = styled.img`
  width: 40px;
  height: 40px;
  -webkit-animation-name: spin, grow;
  -webkit-animation-duration: 1500ms;
  margin-right: 4px;
  
`;

const Logo = styled.img`
  width: 180px;
  margin-top: 5px;
`;

const LogoContainer = styled.a`
  margin-top: -10px;
  display: flex;
  align-items: center;
  &:hover {
    transition: all .2s ease-in-out;
    opacity: 80%;
    transition-duration: 200ms;
  }
  float: left;
`;

const HeaderContainer = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const DevButton1 = styled.a`
  background-color: #2470c1;
  border-radius: 10px;
  padding: 15px 34px;
  cursor: pointer;
  transition-duration: 200ms;
  text-decoration: none;
  color: #e3e2e2;

  &:hover {
    transition-duration: 200ms;
    opacity: 0.8;
  }
`;

const DevButton2 = styled.a`
  font-weight: 600;
  text-decoration: none;
  color: #e3e2e2;
  margin-right: 25px;

  &:hover {
    transition-duration: 200ms;
    opacity: 0.8;
  }
`;

const ButtonContainer = styled.div`
  font-family: Montserrat, "sans-serif";
  color: #e3e2e2;
  font-weight: 600;
`;

const Header = () => {

    return (
        <HeaderContainer>
            <LogoContainer href={"/"}>
                <Icon src="/images/IconLogo.png"/>
                <Logo src="/images/ExtensionLogo.png" />
            </LogoContainer>
            <ButtonContainer>
                <DevButton2 target="_blank" href="https://isaackogan.com">Visit Developer</DevButton2>
                <DevButton1 target="_blank" href="/download">Add To Chrome</DevButton1>
            </ButtonContainer>
        </HeaderContainer>
    )

}

export default Header;
