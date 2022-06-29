import styled from "styled-components";
import Hero from "./Hero";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Home = () => {

    return (
        <Container>
            <Hero />
        </Container>
    )

}

export default Home;
