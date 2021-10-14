import { Container } from "@mui/material";
import { Fragment } from "react";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Container>
        <HomeScreen />
      </Container>
    </Fragment>
  )
}

export default App;
