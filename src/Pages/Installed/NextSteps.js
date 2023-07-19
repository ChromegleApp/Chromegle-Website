import styled from "styled-components";

const OuterContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  padding: 25px 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: rgb(0, 0, 0, 0.3);
  
  @media(min-height: 1080px) {
    padding: 65px 0;
  }

`;

const StepText = styled.span`
  font-size: 25px;
  text-align: center;
  
  @media(max-width: 800px) {
    font-size: 25px;
  }

  @media(max-width: 500px) {
    font-size: 18px;
  }
`;

const StepNumber = styled.span`
  font-size: 25px;
  border-radius: 10000px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  aspect-ratio: 1/1;
  color: rgba(0, 0, 0, 0.75);
  font-weight: bold;
  margin-bottom: 10px;
  margin-top: 20px;
  padding-top: 1px;
  background-color: #3590ec;
  background-image: -o-linear-gradient(top, #3590ec 0, #017ffe 100%);
  background-image: -moz-linear-gradient(top, #3590ec 0, #017ffe 100%);
  background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#3590ec), to(#017ffe));
  background-image: -webkit-linear-gradient(top, #3590ec 0, #017ffe 100%);
  background-image: -ms-linear-gradient(top, #3590ec 0, #017ffe 100%);
  background-image: linear-gradient(top, #3590ec 0, #017ffe 100%);
  
`;

const StepDots = styled.span`
  margin-bottom: 3px;
  font-size: 30px;
  font-weight: bold;
`;

const DiscordLink = styled.a`
  font-weight: bold;
  color: #3590ec;
  transition: opacity 100ms;
  
  &:hover {
    opacity: 0.85;
  }
`;

export default function NextSteps() {
    return (
        <OuterContainer>
            <Container>
                <StepNumber style={{paddingRight: "3px", marginTop: "0"}}>1</StepNumber>
                <StepDots>↓</StepDots>
                <StepText>Refresh <strong>Omegle</strong> to load <strong>Chromegle</strong></StepText>
                <StepNumber>2</StepNumber>
                <StepDots>↓</StepDots>
                <StepText>
                    Join the <DiscordLink target={"_blank"} href={"/discord"}>Chromegle Discord</DiscordLink> for updates
                </StepText>
                <StepNumber>3</StepNumber>
                <StepDots>↓</StepDots>
                <StepText>
                    Have fun, and enjoy your new Omegle!
                </StepText>
            </Container>
        </OuterContainer>
    )

}
