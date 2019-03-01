import React from "react";
import PropTypes from "prop-types";
import TagM from "@atlaskit/tag";

const Tag = (props) => <TagM {...props} />;

Tag.propTypes = {
  /** Set whether tags should be rounded. */
  appearance: PropTypes.oneOf(["default", "rounded"]),
  /** The color theme to apply, setting both background and text color. */
  color: PropTypes.oneOf([
    "standard",
    "green",
    "blue",
    "red",
    "purple",
    "grey",
    "teal",
    "yellow",
    "greenLight",
    "blueLight",
    "redLight",
    "purpleLight",
    "greyLight",
    "tealLight",
    "yellowLight"
  ]),
  /** Component to be rendered before the Tag. */
  elemBefore: PropTypes.node,
  /** Text to be displayed in the tag. */
  text: PropTypes.string,
  /** uri or path. If provided, the tag will be a link. */
  href: PropTypes.string,
  /** Text display as the aria-label for remove text. Setting this makes the tag removable. */
  removeButtonText: PropTypes.string,
  /** Handler to be called before the tag is removed. If it does not return a truthy value, 
  the tag will not be removed. */
  onBeforeRemoveAction: PropTypes.func,
  /** Handler to be called after tag is removed. Called with the string 'Post Removal Hook'. */
  onAfterRemoveAction: PropTypes.func,
  /** link component to be used instead of our standard anchor. 
  The styling of our link item will be applied to the link that is passed in. */
  linkComponent: PropTypes.node
};

export default Tag;