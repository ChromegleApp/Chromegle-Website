import styled from "styled-components";

const BannerImage = styled.img`
  height: 100px;
  margin: auto;
  transition: opacity 100ms;

  @media(max-width: 800px) {
    height: 75px;
  }
  
  @media(max-width: 600px) {
    height: 60px;
  }
  
`;

const BannerContainer = styled.div`
    margin-bottom: 30px;
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
            <BannerImage src={"./images/ExtensionLogo.png"} />
            <HeaderText style={{marginTop: "-10px"}}>Welcome to the community!</HeaderText>
        </BannerContainer>
    )

}
