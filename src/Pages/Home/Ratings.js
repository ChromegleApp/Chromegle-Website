import {Component} from "react";
import styled from "styled-components";

const RatingContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  max-width: 1400px;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 30px;
  animation: fadein 2500ms;
  flex-grow: 1;

  @media (max-width: 1020px) {
    margin-top: 30px;
    margin-bottom: 70px;
    flex-grow: 0;
  }

  @media (max-width: 560px) {
    margin-top: 55px;
    margin-bottom: 55px;
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
    font-size: 15px;
  }
  
`;

const StarContainer = styled.div`
  display: flex;
`;


const StarSpan = styled.span`
  font-size: 70px;

  @media (max-height: 1080px) {
    font-size: 45px;
  }

  @media (max-width: 400px) {
    font-size: 40px;
  }
  
`;

class Ratings extends Component {

    constructor(props) {
        super(props);

        this.state = {
            rating: null,
            ratingCount: null
        }
    }

    async componentDidMount() {

        let ratingResponse = await fetch(
            "https://img.shields.io/chrome-web-store/rating/gcbbaikjfjmidabapdnebofcmconhdbn.json"
        );

        let ratingCountResponse = await fetch(
            "https://img.shields.io/chrome-web-store/rating-count/gcbbaikjfjmidabapdnebofcmconhdbn.json"
        );

        this.setState({
            rating: this.extractRating((await ratingResponse.json()).value),
            ratingCount: this.extractRatingCount((await ratingCountResponse.json()).value)
        });

    }

    extractRatingCount(textRatingCount) {
        return textRatingCount.replaceAll(/[^0-9,.]/g, "");
    }

    extractRating(textRating) {
        try {
            let split = textRating.split("/");
            return split[0] / split[1];
        } catch (ex) {

        }

        return null;

    }

    createStar(percent, key) {
        return (
            <div key={`star-chunk-${key}`} className={"star"}>
                <div className={"rating"} style={{width: percent + "%"}}>
                    <StarSpan>★</StarSpan>
                </div>
            </div>
        )
    }

    chunkPercents(chunks, percent) {

        percent = Math.max(0, Math.min(100, Math.abs(percent)));
        let chunkArray = [], chunkSize = 100 / chunks;

        for (let i=0; i < chunks; i++) {
            let r = (percent - (chunkSize * (i + 1)));
            let r2 = r + chunkSize;

            if (r >= 0) {
                chunkArray[i] = 100;
            } else {
                chunkArray[i] = r2 > 0 ? (r2 / chunkSize) * 100 : 0;
            }
        }

        return chunkArray;

    }

    createStars(chunks) {
        let stars = [];

        for (let i=0; i < chunks.length; i++) {
            stars.push(
                this.createStar(chunks[i], i)
            )
        }

        return stars;

    }

    render() {

        if (!this.state.rating) {
            return <div />
        }

        let percent = this.state.rating * 100;

        return (
            <RatingContainer>
                <RatingText>Based on {this.state.ratingCount} Chrome Web-Store ratings!</RatingText>
                <StarContainer>{this.createStars(this.chunkPercents(5, percent))}</StarContainer>
            </RatingContainer>
        )
    }


}



export default Ratings;
