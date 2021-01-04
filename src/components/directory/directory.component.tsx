import React from "react";

import MenuItem from "../menu-item/menu-item.component";
import SECTIONS, { Section } from "./directory.data";
import "./directory.styles.scss";

type State = {
  sections: Section[];
};

class Directory extends React.Component<{}, State> {
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
