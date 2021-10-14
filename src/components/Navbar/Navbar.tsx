import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <li>
          <h2>
            <Link to="/posts">Posts</Link>
          </h2>
        </li>
        <li>
          <h2>
            <Link to="/write">Write</Link>
          </h2>
        </li>
      </div>
    );
  }
}

export default Navbar;
