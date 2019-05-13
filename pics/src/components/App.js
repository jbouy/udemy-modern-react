import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import unsplash from "../api/unsplash";

import SearchBar from "./SearchBar";

class App extends Component {
  state = { images: [] };

  onSearchSubmit = async term => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term }
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <Container style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
      </Container>
    );
  }
}

export default App;
