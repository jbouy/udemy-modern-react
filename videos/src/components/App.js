import React from "react";
import { Container, Grid } from "semantic-ui-react";

import youtube from "../apis/youtube";

import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onTermSubmit("buildings");
  }

  onTermSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <Container>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <Grid>
          <Grid.Row>
            <Grid.Column width="11">
              <VideoDetail video={this.state.selectedVideo} />
            </Grid.Column>
            <Grid.Column width="5">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default App;
