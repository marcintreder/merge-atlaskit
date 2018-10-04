import React from "react";
import PropTypes from "prop-types";

import {ButtonGroup} from "@atlaskit/button";
import Button from "../Button/Button";

export default function ButtonGroupUXPin(props) {
  return (
    <ButtonGroup {...props}>
      {props.children}
    </ButtonGroup>
  )
};

ButtonGroupUXPin.propTypes = {
  /** The appearance to apply to all buttons */
  appearance: PropTypes.oneOf(["primary", "default", "danger", "link", "subtle", "subtle-link", "warning", "help"]),
  /** The buttons to render. */
  children: PropTypes.node,
};