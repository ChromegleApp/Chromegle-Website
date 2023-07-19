import {Component} from "react";
import styled from "styled-components";
import Hero from "./Hero";
import NextSteps from "./NextSteps";

let Container = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: rgba(255, 255, 255, 0.87);
  flex-grow: 1;

  background-color: rgba(3, 66, 129, 0.68);
  background-image: -o-linear-gradient(top, #1a2034 0, rgba(3, 66, 129, 0.68) 100%);
  background-image: -moz-linear-gradient(top, #1a2034 0, rgba(3, 66, 129, 0.68) 100%);
  background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#1a2034), to(rgba(3, 66, 129, 0.68)));
  background-image: -webkit-linear-gradient(top, #1a2034 0, rgba(3, 66, 129, 0.68) 100%);
  background-image: -ms-linear-gradient(top, #1a2034 0, rgba(3, 66, 129, 0.68) 100%);
  background-image: linear-gradient(top, #1a2034 0, rgba(3, 66, 129, 0.68) 100%);

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
