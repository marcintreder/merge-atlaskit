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
  appearance: PropTypes.oneOf(["primary", "default", "danger", "link", "subtle", "subtle-link", "warning", "help"]),
  children: PropTypes.node.isRequired,
};

ButtonGroupUXPin.defaultProps = {
  children: "Test",
};
