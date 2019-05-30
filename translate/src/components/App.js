import React, { Component } from "react";
import { Container, Flag } from "semantic-ui-react";

import UserCreate from "./UserCreate";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

export class App extends Component {
  state = { language: "english" };

  onLanguageChange = language => {
    this.setState({ language });
  };

  render() {
    return (
      <Container>
        <div>
          Select a language:
          <Flag name="us" onClick={() => this.onLanguageChange("english")} />
          <Flag name="nl" onClick={() => this.onLanguageChange("dutch")} />
        </div>

        <LanguageContext.Provider value={this.state.language}>
          <ColorContext.Provider value="red">
            <UserCreate />
          </ColorContext.Provider>
        </LanguageContext.Provider>
      </Container>
    );
  }
}

export default App;
