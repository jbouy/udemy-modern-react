import React, { useState } from "react";
import { Button } from "semantic-ui-react";

import ResourceList from "./ResourceList";
import UserList from "./UserList";

export const App = () => {
  const [resource, setResource] = useState("posts");

  return (
    <div>
      <UserList />
      <div>
        <Button onClick={() => setResource("posts")}>Posts</Button>
        <Button onClick={() => setResource("todos")}>Todos</Button>
      </div>

      <ResourceList resource={resource} />
    </div>
  );
};

export default App;
