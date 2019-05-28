import React, { Component } from "react";
import { connect } from "react-redux";
import { Header } from "semantic-ui-react";

import { fetchStream } from "../../actions";

class StreamShow extends Component {
  componentDidMount() {
    const {
      match: { params },
      fetchStream
    } = this.props;

    fetchStream(params.id);
  }

  render() {
    const { stream } = this.props;

    if (!stream) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Header as="h1">{stream.title}</Header>
        <Header as="h5">{stream.description}</Header>
      </div>
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
  { fetchStream }
)(StreamShow);
