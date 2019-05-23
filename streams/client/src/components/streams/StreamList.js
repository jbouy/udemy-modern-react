import React, { Component } from "react";
import { connect } from "react-redux";
import { List, Header, Button } from "semantic-ui-react";

import { fetchStreams } from "../../actions";

class StreamList extends Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderAdmin = stream => {
    if (stream.userId === this.props.currentUserId) {
      return (
        <List.Content floated="right">
          <Button primary>Edit</Button>
          <Button negative>Delete</Button>
        </List.Content>
      );
    }
  };

  renderList = () => {
    return this.props.streams.map(stream => {
      return (
        <List.Item key={stream.id}>
          {this.renderAdmin(stream)}
          <List.Icon name="camera" size="large" verticalAlign="middle" />
          <List.Content>
            <List.Header>{stream.title}</List.Header>
            <List.Description>{stream.description}</List.Description>
          </List.Content>
        </List.Item>
      );
    });
  };

  render() {
    return (
      <div>
        <Header as="h2">Streams</Header>
        <List celled>{this.renderList()}</List>
      </div>
    );
  }
}

const mapStateToProps = ({ streams, auth }) => {
  return {
    streams: Object.values(streams),
    currentUserId: auth.userId
  };
};

export default connect(
  mapStateToProps,
  { fetchStreams }
)(StreamList);
