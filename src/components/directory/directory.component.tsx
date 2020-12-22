import React, { Component } from "react";

import MenuItem from "../menu-item/menu-item.component";
import SECTIONS, { Section } from "./directory.data";
import "./directory.styles.scss";

interface State {
  sections: Section[];
}

class Directory extends Component {
  state: State = {
    sections: SECTIONS,
  };

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map((section: Section) => (
          <MenuItem key={section.id} {...section} />
        ))}
      </div>
    );
  }
}

export default Directory;
