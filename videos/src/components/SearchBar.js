import React from "react";
import { Segment, Form } from "semantic-ui-react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = ({ target }) => {
    this.setState({ term: target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <Segment className="search-bar">
        <Form onSubmit={this.onFormSubmit}>
          <Form.Input
            label="Video Search"
            value={this.state.term}
            onChange={this.onInputChange}
          />
        </Form>
      </Segment>
    );
  }
}

export default SearchBar;
