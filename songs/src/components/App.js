import React from "react";

import SongList from "./SongList";
import { Container, Grid } from "semantic-ui-react";

const App = () => {
  return (
    <Grid className="container">
      <Grid.Row>
        <Grid.Column width={8}>
          <SongList />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default App;
