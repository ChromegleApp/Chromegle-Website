import React, {Component} from "react";
import styled from 'styled-components';
import Header from "../Header";

const RedirectItem = styled.a`
  background-color: rgb(48, 50, 54);
  border-radius: 0.25rem;
  padding: 1.5rem;
  font-family: Rubik, -apple-system, "Helvetica Neue", Roboto, system-ui, sans-serif;
  margin-top: 15px;
  text-decoration: none;
  outline: 0.5px solid transparent;
  transition: outline-color 200ms;
  word-break: break-all;
`;

const RedirectContainer = styled.div`
  max-width: 1100px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  height: 500px;
`;

const LoadRing = styled.a`
  display: inline-block;
  margin: auto;
  cursor: pointer;
  transition-duration: 100ms;

  &::before {
    content: " ";
    display: block;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 12px solid #efefef;
    border-color: #e3e3e3 transparent #e5e5e5 transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }

  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  &:hover {
    width: 150px;
    height: 150px;

    &::before {
      width: 150px;
      height: 150px;
      border: 16px solid #2098d5;
      border-color: #2098d5 transparent #2098d5 transparent;
    }
  }

  &:active {
    opacity: 0.5;
  }
`;


const Text = styled.h3`
  font-family: "Montserrat", "sans-serif";
  font-weight: bold;
  color: #c7c7c7;
`;

const TextLink = styled.a`
  color: #3b8fea;
  text-decoration: none;
  transition: 100ms;

  &:hover {
    color: #629ad9;

  }
`;


class RedirectPage extends Component {

    defaultMS = 6000;

    constructor(props) {
        super(props);
    }

    render() {

        let time = this.props.time || this.defaultMS;

        setTimeout(() => {
            window.location.href = this.props.href;
        }, time);

        return (

            <RedirectContainer>
                <Header />
                <LoadRing href={this.props.href}/>
                <RedirectItem>
                    <Text>Redirecting you to <TextLink href={this.props.href}>{this.props.href}</TextLink> in about {time / 1000} seconds...</Text>
                </RedirectItem>
            </RedirectContainer>

        )

    }

}

export default RedirectPage;
