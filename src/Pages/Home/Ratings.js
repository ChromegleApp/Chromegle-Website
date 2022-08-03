import {Component} from "react";
import styled from "styled-components";

const RatingContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  max-width: 1400px;
  flex-direction: column;
  align-items: center;
  margin-top: -30px;
  animation: fadein 2500ms;
  flex-grow: 1;
  
  @media (max-width: 1020px) {
    margin-top: 20px;
    margin-bottom: 50px;
  }
  
  @media (max-width: 560px) {
    margin-top: 70px;
    flex-grow: inherit;
  }
`;

const RatingText = styled.span`
  font-family: "Rubik", "sans-serif";
  color: #e3e2e2;
  font-weight: 600;
  font-size: 37px;
  
  @media (max-width: 1350px) {
    font-size: 30px;
  }
  
  @media (max-width: 1020px) {
    font-size: 26px;
  }

  @media (max-width: 560px) {
    font-size: 20px;
  }
  
`;



class Ratings extends Component {

    constructor(props) {
        super(props);

        this.state = {
            payload: {}
        }

    }

    componentDidMount() {

        fetch("https://api.chromegle.net/chromegle/chrome/stats")
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    payload: result
                });
            });
    }

    render() {

        if (!this.state.payload.payload) {
            return <div />
        }

        let percent = (eval(this.state.payload?.payload?.rating?.value) || 0) * 100;

        return (
            <RatingContainer>

                <div className="star" style={{"marginTop": "-10px"}}>
                    <div className="rating" style={{width: percent + "%"}}>
                        <span>★★★★★</span>
                    </div>
                </div>
                <RatingText>Based on <strong>{(this.state.payload?.payload?.["rating-count"]?.value.replace(" total", "") + "+ total") || "our collective"}</strong> ratings!</RatingText>


            </RatingContainer>
        )
    }


}



export default Ratings;
