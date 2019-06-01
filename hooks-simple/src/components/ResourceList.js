import React from "react";
import { List } from "semantic-ui-react";

import useResources from "./useResources";

const ResourceList = ({ resource }) => {
  const resources = useResources(resource);

  return (
    <List>
      {resources.map(({ id, title }, index) => (
        <List.Item key={id}>{title}</List.Item>
      ))}
    </List>
  );
};

export default ResourceList;
