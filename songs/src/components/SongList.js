import React, { Component } from "react";
import { connect } from "react-redux";
import { List, Button } from "semantic-ui-react";

class SongList extends Component {
  renderList = () => {
    return this.props.songs.map(song => {
      return (
        <List.Item key={song.title}>
          <List.Content floated="right">
            <Button primary>Select</Button>
          </List.Content>
          <List.Content>{song.title}</List.Content>
        </List.Item>
      );
    });
  };

  render() {
    return <List divided>{this.renderList()}</List>;
  }
}

const mapStateToProps = state => {
  return {
    songs: state.songs
  };
};

export default connect(mapStateToProps)(SongList);
