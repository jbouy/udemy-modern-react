import React, { Component } from "react";
import { Segment, Form } from "semantic-ui-react";

export class SearchBar extends Component {
  state = { term: "" };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <Segment>
        <Form onSubmit={this.onFormSubmit}>
          <Form.Field>
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </Form.Field>
        </Form>
      </Segment>
    );
  }
}

export default SearchBar;
