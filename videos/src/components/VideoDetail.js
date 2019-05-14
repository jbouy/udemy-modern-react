import React from "react";
import { Segment, Header } from "semantic-ui-react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Segment>
        <Header as="h4">{video.snippet.title}</Header>
        <p>{video.snippet.description}</p>
      </Segment>
    </div>
  );
};

export default VideoDetail;
