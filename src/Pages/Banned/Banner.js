import styled from "styled-components";

const BannerImage = styled.img`
  height: 100px;
  margin: auto;
  transition: opacity 100ms;
  cursor: pointer;
  
  &:hover {
    opacity: 0.8;
  }
  
  @media(max-width: 800px) {
    height: 75px;
  }
  
  @media(max-width: 600px) {
    height: 60px;
  }
  
`;

const BannerContainer = styled.div`
  margin: 4% 0;

  @media (max-width: 1100px) {
    margin: 6% 0;
  }

  @media (max-width: 600px) {
    margin: 8% 0;
    width: 100%;
  }

`;


const HeaderText = styled.h1`
  font-size: 40px;
  font-weight: bold;
  text-align: center;

  @media(max-width: 800px) {
    padding-top: 2px;
    font-size: 30px;
  }

  @media(max-width: 600px) {
    font-size: 25px;
  }
`;


export default function Banner() {

    return (
        <BannerContainer>
            <BannerImage src={"./images/ExtensionLogo.png"} onClick={() => window.location.href = "/"}/>
            <HeaderText style={{marginTop: "-10px"}}>So... you got banned.</HeaderText>
        </BannerContainer>
    )

}
