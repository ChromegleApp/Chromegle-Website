import {Component} from "react";
import BanText from "./BanText";
import styled from "styled-components";
import Banner from "./Banner";

let Container = styled.div`
  width: 80%;
  min-height: 100vh;
  max-width: 1400px;
  margin: auto;
  display: flex;
  justify-content: left;
  align-items: center;
  background: rgba(26, 26, 26, 0.68);
  flex-direction: column;
  color: rgba(255, 255, 255, 0.87);
  padding-bottom: 30px;

  @media(max-width: 1100px) {
    width: 90%;
  }
  
`;

export default class Banned extends Component {

    render() {
        return (
            <Container>
                <Banner />
                <BanText />
            </Container>
        )
    }

}
