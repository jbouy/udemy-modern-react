import React, { Component } from "react";
import { connect } from "react-redux";
import { List, Icon } from "semantic-ui-react";

import { fetchPosts } from "../actions/index";
import UserHeader from "./UserHeader";

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderList = () => {
    return this.props.posts.map(post => {
      return (
        <List.Item key={post.id}>
          <Icon className="middle aligned" size="large" name="user" />
          <List.Content>
            <List.Description>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </List.Description>
            <UserHeader userId={post.userId} />
          </List.Content>
        </List.Item>
      );
    });
  };

  render() {
    return (
      <List relaxed divided>
        {this.renderList()}
      </List>
    );
  }
}

const mapStateToProps = ({ posts }) => {
  return { posts };
};

export default connect(
  mapStateToProps,
  { fetchPosts }
)(PostList);
