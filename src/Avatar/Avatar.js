import React from "react";
import PropTypes from "prop-types";
import AvatarM from "@atlaskit/avatar";

const Avatar = (props) => <AvatarM {...props} />;

Avatar.propTypes = {
  /** Indicates the shape of the avatar. Most avatars are circular, 
  but square avatars can be used for 'container' objects. */
  appearance: PropTypes.oneOf(["circle", "square"]),
  /** A custom component to use instead of the default span. 
  A className prop is passed to the component which has classNames for all the default styles for the avatar. */
  component: PropTypes.node,
  /** Handler to be called on click. */
  onClick: PropTypes.func,
  /** Defines the size of the avatar */
  size: PropTypes.oneOf(["xsmall", "small", "medium", "large", "xlarge", "xxlarge"]),
  /** Display a tooltip on hover */
  enableTooltip: PropTypes.bool,
  /** Used to override the default border color of the presence indicator. Accepts any color argument 
  that the border-color CSS property accepts. */
  borderColor: PropTypes.string,
  /** Provides a url for avatars being used as a link. */
  href: PropTypes.string,
  /** Change the style to indicate the avatar is active. */
  isActive: PropTypes.bool,
  /** Change the style to indicate the avatar is disabled. */
  isDisabled: PropTypes.bool,
  /** Change the style to indicate the avatar is focused. */
  isFocus: PropTypes.bool,
  /** Change the style to indicate the avatar is hovered. */
  isHover: PropTypes.bool,
  /** Change the style to indicate the avatar is selected. */
  isSelected: PropTypes.bool,
  /** Name will be displayed in a tooltip, also used by screen readers as 
  fallback content if the image fails to load. */
  name: PropTypes.string,
  /** Indicates a user's online status by showing a small icon on the avatar. Refer to presence values on the Presence component. Alternatively accepts any React element. 
  For best results, it is recommended to use square content with height and width of 100%. */
  presence: PropTypes.oneOf(["online", "busy", "focus", "offline"]),
  /** A url to load an image from (this can also be a base64 encoded image). */
  src: PropTypes.string,
  /** Indicates contextual information by showing a small icon on the avatar. 
  Refer to status values on the Status component. */
  status: PropTypes.oneOf(["approved", "declined", "locked"]),
  /** The index of where this avatar is in the group stack. */
  stackIndex: PropTypes.number,
  /** Pass target down to the anchor, if href is provided. */
  target: PropTypes.oneOf(["_blank", "_self", "_top", "_parent"]),
};

Avatar.defaultProps = {
  appearance: "circle",
  size: "medium",
  enableTooltip: true,
};

export default Avatar;