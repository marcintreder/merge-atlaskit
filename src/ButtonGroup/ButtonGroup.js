import React from "react";
import PropTypes from "prop-types";

import { ButtonGroup as ButtonGroupM } from "@atlaskit/button";

const ButtonGroup = (props) => <ButtonGroupM {...props} />

ButtonGroup.propTypes = {
  /** The appearance to apply to all buttons */
  appearance: PropTypes.oneOf(["primary", "default", "danger", "link", "subtle", "subtle-link", "warning", "help"]),
  /** The buttons to render. */
  children: PropTypes.node,
};

export default ButtonGroup;