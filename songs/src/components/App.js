import React from "react";
import { Grid } from "semantic-ui-react";

import SongList from "./SongList";
import SongDetail from "./SongDetail";

const App = () => {
  return (
    <Grid className="container">
      <Grid.Row>
        <Grid.Column width={8}>
          <SongList />
        </Grid.Column>
        <Grid.Column width={8}>
          <SongDetail />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default App;
