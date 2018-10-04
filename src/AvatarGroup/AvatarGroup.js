import React from "react";
import PropTypes from "prop-types";

import AvatarGroup from "@atlaskit/avatar-group";

export default function AvatarGroupUXPin(props) {
  return (
    <AvatarGroup {...props} />
  )
};

AvatarGroupUXPin.propTypes = {
    /** Indicates the shape of the avatar. Most avatars are circular, but square avatars
    can be used for 'container' objects. */
    appearance: PropTypes.oneOf(["grid", "stack"]),
    /** Component used to render each avatar */
    avatar: PropTypes.element,
    /** The maximum number of avatars allowed in the grid */
    maxCount: PropTypes.number,
    /** Defines the size of the avatar */
    size: PropTypes.oneOf(["xsmall", "small", "medium", "large", "xlarge", "xxlarge"]),
    /** Typically the background color that the avatar is presented on.
    Accepts any color argument that the CSS border-color property accepts. */
    borderColor: PropTypes.string,
    /** Array of avatar data passed to each `avatar` component */
    data: PropTypes.array,
    /** Handle the click event on the avatar item */
    onAvatarClick: PropTypes.func,
    /** Take control of the click event on the more indicator. This will cancel
    the default dropdown behaviour. */
    onMoreClick: PropTypes.func,
    /** Provide additional props to the MoreButton. Example use cases: altering
    tab order by providing tabIndex; adding onClick behaviour without losing the
    default dropdown */
    showMoreButtonProps: PropTypes.node,
    boundariesElement: PropTypes.oneOf(["viewport", "window", "scrollParent"])
};

AvatarGroupUXPin.defaultProps = {
  appearance: "grid",
};