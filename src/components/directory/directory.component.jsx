import React, { Component } from "react";

import MenuItem from "../menu-item/menu-item.component";
import SECTIONS from "./directory.data";
import "./directory.styles.scss";

class Directory extends Component {
  state = {
    sections: SECTIONS,
  };

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherProps }) => (
          <MenuItem key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
