import styled from "styled-components";

const ButtonMain = styled.a`
  display: inline-block;
  padding: 10px 30px;
  background-color: rgba(255, 255, 255, 0.87);
  font-size: 20px;
  color: #363636;
  border-radius: 5px;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 20px;
  transition: opacity 100ms;

  &:hover, &:active {
    background-color: rgba(255, 255, 255, 0.67);
    color: #262626;
  }

  @media(max-width: 1100px) {
    font-size: 18px;
    padding: 8px 20px;
  }

  @media(max-width: 800px) {
    font-size: 16px;
    padding: 8px 20px;
  }

  @media(max-width: 600px) {
    font-size: 14px;
    padding: 8px 20px;
  }
  
`;


export default function BackButton() {

    return (
        <ButtonMain target="_blank" href={"https://omegle.com/"}>Back To Omegle</ButtonMain>
    )
}
