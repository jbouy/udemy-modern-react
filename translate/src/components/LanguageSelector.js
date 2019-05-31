import React, { Component } from "react";
import { Flag } from "semantic-ui-react";

import LanguageContext from "../contexts/LanguageContext";

export class LanguageSelector extends Component {
  static contextType = LanguageContext;

  render() {
    return (
      <div>
        Select a language:
        <Flag
          name="us"
          onClick={() => this.context.onLanguageChange("english")}
        />
        <Flag
          name="nl"
          onClick={() => this.context.onLanguageChange("dutch")}
        />
      </div>
    );
  }
}

export default LanguageSelector;
