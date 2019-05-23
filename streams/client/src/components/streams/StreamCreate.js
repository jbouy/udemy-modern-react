import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Form, Button, Message } from "semantic-ui-react";

class StreamCreate extends Component {
  renderError = ({ touched, error }) => {
    if (touched && error) {
      return <Message error header={error} />;
    }
  };

  renderInput = ({ input, label, meta }) => {
    return (
      <Form.Field error={meta.invalid && meta.touched}>
        <Form.Input {...input} label={label} autoComplete="off" />
        {this.renderError(meta)}
      </Form.Field>
    );
  };

  onSubmit = formValues => {
    console.log(formValues);
  };

  render() {
    return (
      <Form error onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.title) {
    errors.title = "You must enter a title";
  }

  if (!formValues.description) {
    errors.description = "You must enter a description";
  }

  return errors;
};

export default reduxForm({
  form: "streamCreate",
  validate
})(StreamCreate);
