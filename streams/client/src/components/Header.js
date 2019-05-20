import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

const Header = () => {
  return (
    <Menu secondary pointing>
      <Menu.Item as={Link} to="/">
        Streamy
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item as={Link} to="/">
          All Streams
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default Header;
