import React, { Component } from "react";
import { Button as SemBtn } from "semantic-ui-react";

import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

export class Button extends Component {
  renderSubmit = language => {
    return language === "english" ? "Submit" : "Voorleggen";
  };

  renderButton = color => (
    <SemBtn color={color}>
      <LanguageContext.Consumer>
        {language => this.renderSubmit(language)}
      </LanguageContext.Consumer>
    </SemBtn>
  );

  render() {
    return (
      <ColorContext.Consumer>
        {color => this.renderButton(color)}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
