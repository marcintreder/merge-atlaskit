// @flow
import type { Node, ComponentType } from 'react';

export type AppearanceType = 'circle' | 'square';
export type PresenceType = ('online' | 'busy' | 'focus' | 'offline') | Node;

export type SizeType =
  | 'xsmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'xlarge'
  | 'xxlarge';
export type SupportedSizeWithAnIcon = 'small' | 'medium' | 'large' | 'xlarge';

export type StatusType = 'approved' | 'declined' | 'locked';
export type StyledComponentType = 'custom' | 'button' | 'link' | 'span';

export type AvatarClickType = (
  ?{ event?: KeyboardEvent | MouseEvent, item: Object },
) => void;

export type AvatarPropTypesBase = {
  /** Indicates the shape of the avatar. Most avatars are circular, but square avatars
   can be used for 'container' objects. */
  appearance: AppearanceType,
  /** Defines the size of the avatar */
  size: SizeType,
  /** Display a tooltip on hover */
  enableTooltip: boolean,
  /** Used to override the default border color of the presence indicator.
   Accepts any color argument that the border-color CSS property accepts. */
  borderColor?: string | (() => mixed),
  /** A custom component to use instead of the default span.
   * A `className` prop is passed to the component which has classNames for all the default styles for the avatar.
   * */
  component?: ComponentType<*>,

  /** Provides a url for avatars being used as a link. */
  href?: string,
  /** Change the style to indicate the avatar is active. */
  isActive?: boolean,
  /** Change the style to indicate the avatar is disabled. */
  isDisabled?: boolean,
  /** Change the style to indicate the avatar is focused. */
  isFocus?: boolean,
  /** Change the style to indicate the avatar is hovered. */
  isHover?: boolean,
  /** Change the style to indicate the avatar is selected. */
  isSelected?: boolean,
  /** Name will be displayed in a tooltip, also used by screen readers as fallback
   content if the image fails to load. */
  name?: string,
  /** Indicates a user's online status by showing a small icon on the avatar.
  Refer to presence values on the Presence component.
  Alternatively accepts any React element. For best results, it is recommended to
  use square content with height and width of 100%. */
  presence?: PresenceType,

  /** A url to load an image from (this can also be a base64 encoded image). */
  src?: string,
  /** Indicates contextual information by showing a small icon on the avatar.
   Refer to status values on the Status component. */
  status?: StatusType,
  /** The index of where this avatar is in the group `stack`. */
  stackIndex?: number,
  /** Assign specific tabIndex order to the underlying node. */
  tabIndex?: number,
  /** Pass target down to the anchor, if href is provided. */
  target?: '_blank' | '_self' | '_top' | '_parent',
};

export type AvatarPropTypes = AvatarPropTypesBase & {
  /** Handler to be called on click. */
  onClick?: AvatarClickType,
};
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

/* Unsuported props in alpha
** component: PropTypes.element,
** onClick: PropTypes.func,
*/
