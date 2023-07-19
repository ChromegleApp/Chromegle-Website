import {Component} from "react";
import styled from "styled-components";
import Hero from "./Hero";
import NextSteps from "./NextSteps";

let Container = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: auto;
  display: flex;
  justify-content: left;
  align-items: center;
  background: rgba(26, 26, 26, 0.68);
  flex-direction: column;
  color: rgba(255, 255, 255, 0.87);
  padding: 40px 0;
  flex-grow: 1;
  
`;

export default class Installed extends Component {

    render() {
        return (
            <Container>
                <Hero />
                <NextSteps />
            </Container>
        )
    }

}
