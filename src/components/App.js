

import styled from "styled-components";
import Header from "./header/Header";
import SectionRouter from "./Router";

const FlexPage = styled.div`
  display: flex;
  padding-left: 25px;
  padding-right: 25px;
  flex-direction: column;
`;


const App = () => {
    return (
        <FlexPage>
            <Header />
            <SectionRouter />

        </FlexPage>
    )
}

export default App;
