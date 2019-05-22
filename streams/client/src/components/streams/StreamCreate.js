import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Form } from "semantic-ui-react";

class StreamCreate extends Component {
  renderInput({ input, label }) {
    return (
      <Form.Field>
        <Form.Input {...input} label={label} />
      </Form.Field>
    );
  }

  render() {
    return (
      <Form>
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
      </Form>
    );
  }
}

export default reduxForm({
  form: "streamCreate"
})(StreamCreate);
