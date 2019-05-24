import React, { Component } from "react";
import { connect } from "react-redux";

class StreamEdit extends Component {
  render() {
    console.log(this.props);
    return <div>StreamEdit</div>;
  }
}

const mapStateToProps = ({ streams }, { match }) => {
  return {
    stream: streams[match.params.id]
  };
};

export default connect(mapStateToProps)(StreamEdit);
