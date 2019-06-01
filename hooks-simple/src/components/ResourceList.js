import React, { useState, useEffect } from "react";
import axios from "axios";
import { List } from "semantic-ui-react";

const useResources = resource => {
  const [resources, setResources] = useState(["posts"]);

  useEffect(() => {
    (async resource => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/${resource}`
      );

      setResources(response.data);
    })(resource);
  }, [resource]);

  return resources;
};

const ResourceList = ({ resource }) => {
  const resources = useResources(resource);

  return (
    <List>
      {resources.map(({ title }, index) => (
        <List.Item key={index}>{title}</List.Item>
      ))}
    </List>
  );
};

export default ResourceList;
