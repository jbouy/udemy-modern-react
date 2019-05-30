import React, { Component } from "react";
import { Form } from "semantic-ui-react";

import LanguageContext from "../contexts/LanguageContext";

export class Field extends Component {
  static contextType = LanguageContext;

  render() {
    const text = this.context === "english" ? "Name" : "Naam";

    return (
      <Form.Field>
        <label>{text}</label>
        <Form.Input />
      </Form.Field>
    );
  }
}

export default Field;
