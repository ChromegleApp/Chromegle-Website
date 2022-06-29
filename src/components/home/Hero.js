import styled from "styled-components";
import {Component} from "react";


const LogoContainer = styled.div`
  margin-top: 200px;
  max-width: 60%;
  width: 1500px;
  display: flex;
  flex-direction: row;
`;

const UpperTitle = styled.span`
  font-family: Montserrat, "sans-serif";
  color: #a7a7a7;
  font-weight: 600;
  font-size: 26px;
`;

const LargeTitle = styled.span`
  margin-top: 10px;
  font-family: Montserrat, "sans-serif";
  color: #d9d9d9;
  font-weight: 800;
  font-size: 60px;
`;

const GetButton = styled.a`
  font-weight: 600;
  font-family: Montserrat, "sans-serif";
  background-color: #2470c1;
  color: white;
  padding: 20px;
  border-radius: 40px;
  width: 290px;
  margin-top: 20px;
  text-align: center;
  text-decoration: none;
  transition: 200ms;

  &:hover {
    opacity: 0.8;
    transition: 200ms;
  }
  
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-top: 50px;
  animation: fadein 2500ms;

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
`;

class UserCount extends Component {

    constructor(props) {
        super(props);

        this.state = {
            payload: null
        }

    }

    componentDidMount() {
        fetch("https://chromegle.isaackogan.com/chromegle/chrome-store/stats")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        payload: result
                    });
                },
                (error) => {
                    this.setState({
                        payload: {}
                    });
                }
            )
    }

    render() {
        let payload = this.state.payload;
        let users;

        if (payload != null) {
            users = payload["payload"]["users"]["value"];
        } else {
            return <div />
        }

        return (
            <OnlineUsers>Join more than <strong>{users.replace("k", "")} thousand</strong> members</OnlineUsers>
        )
    }


}

const BannerContainer = styled.div`
  margin-left: 18%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: -45px;
`;

const Banner1 = styled.img`
  height: 225px;
  transform: rotate(-15deg);
  opacity: 0.9;
  animation: fadein 3000ms; 


`;

const Banner2 = styled.img`
  height: 225px;
  margin-top: -45px;
  transform: rotate(10deg);
  opacity: 0.8;
  animation: fadein 2000ms;
`;

const Banner3 = styled.img`
  height: 225px;
  margin-top: -50px;
  transform: rotate(-12deg);
  transition-duration: 300ms;
  animation: fadein 2500ms;
  opacity: 0.9;
`;

const Hero = () => {

    return (
        <LogoContainer>
            <InnerContainer>
                <UpperTitle>Dark Mode. IP Pulling. Thrills.</UpperTitle>
                <LargeTitle>
                    Transform your<br/>
                    Omegle chat<br/>
                    experience
                </LargeTitle>
                <GetButton target="_blank" href="/download">Get Chromegle, enjoy Omegle</GetButton>
                <UserCount />
            </InnerContainer>
            <BannerContainer>
                <Banner1 src="/images/Banner1.jpg" />
                <Banner2 src="/images/Banner3.jpg" />
                <Banner3 src="/images/Banner2.jpg" />
            </BannerContainer>
        </LogoContainer>

    )

}

export default Hero;
