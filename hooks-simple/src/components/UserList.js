import React from "react";
import { List } from "semantic-ui-react";

import useResources from "./useResources";

const UserList = () => {
  const users = useResources("users");

  return (
    <List>
      {users.map(({ id, name }) => (
        <List.Item key={id}>{name}</List.Item>
      ))}
    </List>
  );
};

export default UserList;
