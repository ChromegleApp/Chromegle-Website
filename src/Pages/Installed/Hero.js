import styled from "styled-components";
import Banner from "./Banner";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export default function Hero() {
    return (
        <Container>
            <Banner />
        </Container>
    )
}
