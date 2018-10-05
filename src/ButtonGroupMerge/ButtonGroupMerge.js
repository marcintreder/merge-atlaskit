import React from "react";
import PropTypes from "prop-types";

import { ButtonGroup } from "@atlaskit/button";

export default class ButtonGroupMerge extends React.Component {
  render() {
    return (
      <ButtonGroup {...this.props}>
        {this.props.children}
      </ButtonGroup>
    )
  }
};

ButtonGroupMerge.propTypes = {
  /** The appearance to apply to all buttons */
  appearance: PropTypes.oneOf(["primary", "default", "danger", "link", "subtle", "subtle-link", "warning", "help"]),
  /** The buttons to render. */
  children: PropTypes.node,
};