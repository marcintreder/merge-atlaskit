import React from "react";
import PropTypes from "prop-types";

import Button from "@atlaskit/button";

export default function ButtonUXPin(props) {
  return <Button {...props}>{props.children}</Button>;
};

ButtonUXPin.propTypes = {
  appearance: PropTypes.oneOf(["primary", "default", "danger", "link", "subtle", "subtle-link", "warning", "help"]),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  form: PropTypes.string,
  href: PropTypes.string,
  iconAfter: PropTypes.element,
  iconBefore: PropTypes.element,
  id: PropTypes.string,
  isDisabled: PropTypes.bool,
  isSelected: PropTypes.bool,
  isLoading: PropTypes.bool,
  spacing: PropTypes.oneOf(["compact", "default", "none"]).isRequired,
  target: PropTypes.string,
  type: PropTypes.oneOf(["button", "submit"]),
  shouldFitContainer: PropTypes.bool,
  autoFocus: PropTypes.bool,
};

ButtonUXPin.defaultProps = {
  appearance: "default",
  children: "Test",
  spacing: "default",
  shouldFitContainer: false,
  autoFocus: false,
};

/* Unsuported props in alpha
** tabIndex: PropTypes.number,
** onFocus: PropTypes.func,
** onClick: PropTypes.func,
** onBlur: PropTypes.func,
** innerRef: PropTypes.func,
** component: PropTypes.element,
** ariaControls: PropTypes.string,
** ariaExpanded: PropTypes.bool,
** ariaLabel: PropTypes.string,
** ariaHaspopup: PropTypes.bool
*/
