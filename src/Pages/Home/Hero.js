import styled from "styled-components";
import {Component} from "react";
import Header from "../../Components/Header";

const Background = styled.div`
  width: 90%;
  max-width: 1400px;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 0;
`;

const Body = styled.div`
  flex-direction: row;
  display: flex;
  margin-top: 120px;
  width: 100%;

  @media (max-width: 1020px) {
    flex-direction: column;
    margin-top: 50px;
  }

  @media (max-width: 400px) {
    margin-top: 30px;
  }

`;


const UpperTitle = styled.span`
  font-family: Montserrat, "sans-serif";
  color: #a7a7a7;
  font-weight: 600;
  font-size: 26px;

  @media (max-width: 1350px) {
    line-height: 20px;
  }

  @media (max-width: 560px) {
    font-size: 15px;
  }
`;

const LargeTitle = styled.span`
  margin-top: 10px;
  font-family: Montserrat, "sans-serif";
  color: #d9d9d9;
  font-weight: 700;
  font-size: 60px;
  line-height: 70px;

  @media (max-width: 1350px) {
    margin-top: 15px;
    font-size: 50px;
    line-height: 60px;
  }

  @media (max-width: 1020px) {
    text-align: center;
    max-width: 700px;
  }
  
  @media (max-width: 560px) {
    font-size: 30px;
    line-height: 40px;
  }
  
`;

const GetButton = styled.a`
  font-weight: 600;
  font-family: Montserrat, "sans-serif";
  background-color: #2470c1;
  color: white;
  padding: 18px 30px;
  border-radius: 40px;
  width: 320px;
  margin-top: 20px;
  text-align: center;
  text-decoration: none;

  &:hover {
    opacity: 0.8;
    transition: 200ms;
  }
  
  @media (max-width: 1350px) {
    font-size: 14px;
    padding: 14px 26px;
  }
  
  @media (max-width: 560px) {
    font-size: 13px;
    padding: 8px 6px;
    width: 250px;
  }
  
`;

const OnlineUsers = styled.span`
  font-family: Montserrat, "sans-serif";
  color: #dedede;
  font-weight: 400;
  font-size: 16px;
  margin-top: 20px;
  margin-left: 10px;
  animation: fadein;
  animation-duration: 1000ms;
  transition: 1000ms;
  
  @media (max-width: 1350px) {
    font-size: 15px;
  }

  @media (max-width: 560px) {
    font-size: 13px;
    text-align: center;
  }

  @media (max-width: 450px) {
    font-size: 12px;
  }
`;


const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  animation: fadein 2500ms;
  
  @media (max-width: 1020px) {
    width: 100%;
    align-items: center;
  }
  
`;


class UserCount extends Component {

    constructor(props) {
        super(props);

        this.state = {
            payload: undefined
        }

    }


    componentDidMount() {

        fetch("https://api.chromegle.net/chromegle/chrome/stats")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        payload: result
                    });
                },
                () => {
                    this.setState({
                        payload: null
                    });
                }
            )
            .catch(() => {
                this.setState({
                    payload: null
                })
            })
    }

    render() {
        let payload = this.state.payload;

        if (payload === undefined) {
            return <OnlineUsers style={{opacity: 0}}>J</OnlineUsers>
        }

        let users = payload == null ? "a few" : payload["payload"]["users"]["value"].replace("k", "")

        return (
            <OnlineUsers>Join more than <strong>{users} thousand</strong> members</OnlineUsers>
        )
    }


}

const HeroImg = styled.img`
  height: 400px;
  margin-top: -15px;
  margin-left: 10px;
  animation: float 6s ease-in-out infinite;

  @media (max-width: 1350px) {
    height: 350px;
  }
  
  @media (max-width: 1100px) {
    height: 300px;
  }

  @media (max-width: 1020px) {
    margin-top: 60px;
  }

  @media (max-width: 560px) {
    height: 200px;
    margin-top: 50px;
    margin-bottom: -35px;
  }

`;

const HeroImgContainer = styled.div`
  justify-content: center;
  align-items: center;
  height: 50%;
  margin: auto;


`;

const Hero = () => {

    return (
        <Background className="p-10">
            <Header />
            <Body>
                <InnerContainer>
                    <UpperTitle>Dark Mode. IP Pulling. Thrills.</UpperTitle>
                    <LargeTitle>
                        Transform your
                        Omegle chat
                        experience
                    </LargeTitle>
                    <GetButton target="_blank" href="/download">Get Chromegle, enjoy Omegle</GetButton>
                    <UserCount />
                </InnerContainer>
                <HeroImgContainer>
                    <HeroImg src={"/images/Omega.svg"}/>
                </HeroImgContainer>
            </Body>
        </Background>
    )
}

export default Hero;
