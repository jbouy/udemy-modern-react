import React from "react";
import { Segment, Header, Embed } from "semantic-ui-react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Embed
        id={video.id.videoId}
        placeholder={video.snippet.thumbnails.high.url}
        source="youtube"
      />
      <Segment>
        <Header as="h4">{video.snippet.title}</Header>
        <p>{video.snippet.description}</p>
      </Segment>
    </div>
  );
};

export default VideoDetail;
