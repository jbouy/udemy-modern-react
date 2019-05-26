import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
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
          <Button primary as={Link} to={`/streams/edit/${stream.id}`}>
            Edit
          </Button>
          <Button negative as={Link} to={`/streams/delete/${stream.id}`}>
            Delete
          </Button>
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

  renderCreate = () => {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: "right" }}>
          <Button as={Link} primary to="/streams/new">
            Create Stream
          </Button>
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        <Header as="h2">Streams</Header>
        <List celled>{this.renderList()}</List>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = ({ streams, auth }) => {
  return {
    streams: Object.values(streams),
    currentUserId: auth.userId,
    isSignedIn: auth.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  { fetchStreams }
)(StreamList);
