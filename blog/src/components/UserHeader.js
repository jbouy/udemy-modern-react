import React, { Component } from "react";
import { connect } from "react-redux";

export class UserHeader extends Component {
  render() {
    const { user } = this.props;

    return !!user ? <div className="header">{user.name}</div> : null;
  }
}

const mapStateToProps = ({ users }, { userId }) => ({
  user: users.find(user => user.id === userId)
});

export default connect(mapStateToProps)(UserHeader);
