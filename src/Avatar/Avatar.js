import React from "react";
import PropTypes from "prop-types";

import Avatar from "@atlaskit/avatar";

export default function AvatarUXPin(props) {
  return (
    <Avatar {...props} />
  )
};

AvatarUXPin.propTypes = {
  appearance: PropTypes.oneOf(["circle", "square"]),
  component: PropTypes.node,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(["xsmall", "small", "medium", "large", "xlarge", "xxlarge"]),
  enableTooltip: PropTypes.bool,
  borderColor: PropTypes.string,
  href: PropTypes.string,
  isActive: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isFocus: PropTypes.bool,
  isHover: PropTypes.bool,
  isSelected: PropTypes.bool,
  name: PropTypes.string,
  presence: PropTypes.oneOf(["online", "busy", "focus", "offline"]),
  src: PropTypes.string,
  status: PropTypes.oneOf(["approved", "declined", "locked"]),
  stackIndex: PropTypes.number,
  target: PropTypes.oneOf(["_blank", "_self", "_top", "_parent"]),
};

AvatarUXPin.defaultProps = {
  appearance: "circle",
  size: "medium",
  enableTooltip: true,
};