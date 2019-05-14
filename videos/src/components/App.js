import React from "react";

import SearchBar from "./SearchBar";
import { Container } from "semantic-ui-react";

class App extends React.Component {
  render() {
    return (
      <Container>
        <SearchBar />
      </Container>
    );
  }
}

export default App;
