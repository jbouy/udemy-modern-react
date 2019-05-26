import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

import { fetchStream, deleteStream } from "../../actions";
import Modal from "../Modal";
import history from "../../history";

class StreamDelete extends Component {
  componentDidMount() {
    const {
      match: { params },
      fetchStream
    } = this.props;

    fetchStream(params.id);
  }

  renderActions = () => {
    const { stream, deleteStream } = this.props;

    return (
      <>
        <Button negative onClick={() => deleteStream(stream.id)}>
          Delete
        </Button>
        <Button as={Link} to="/">
          Cancel
        </Button>
      </>
    );
  };

  renderContent = () => {
    const { stream } = this.props;

    if (!stream) {
      return "Are you sure you want to delete this stream?";
    }

    return `Are you sure you want to delete the stream with title: ${
      stream.title
    }`;
  };

  render() {
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

const mapStateToProps = ({ streams }, { match: { params } }) => {
  return {
    stream: streams[params.id]
  };
};

export default connect(
  mapStateToProps,
  { fetchStream, deleteStream }
)(StreamDelete);
