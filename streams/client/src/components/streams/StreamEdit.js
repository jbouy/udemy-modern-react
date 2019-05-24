import React, { Component } from "react";
import { connect } from "react-redux";
import { Header } from "semantic-ui-react";
import _ from "lodash";

import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamEdit extends Component {
  componentDidMount() {
    const { match } = this.props;

    this.props.fetchStream(match.params.id);
  }

  onSubmit = formValues => {
    const { stream, editStream } = this.props;

    editStream(stream.id, formValues);
  };

  render() {
    const { stream } = this.props;

    return !!stream ? (
      <div>
        <Header as="h3">Edit a Stream</Header>
        <StreamForm
          initialValues={_.pick(stream, "title", "description")}
          onSubmit={this.onSubmit}
        />
      </div>
    ) : (
      <div>Loading...</div>
    );
  }
}

const mapStateToProps = ({ streams }, { match }) => {
  return {
    stream: streams[match.params.id]
  };
};

export default connect(
  mapStateToProps,
  { fetchStream, editStream }
)(StreamEdit);
