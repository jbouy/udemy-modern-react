import React, { Component } from "react";
import { Container } from "semantic-ui-react";

import SearchBar from "./SearchBar";

class App extends Component {
  onSearchSubmit = term => {
    console.log(term);
  };

  render() {
    return (
      <Container style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </Container>
    );
  }
}

export default App;
