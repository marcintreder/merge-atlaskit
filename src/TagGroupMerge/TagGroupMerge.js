import React from "react";
import PropTypes from "prop-types";
import TagGroup from "@atlaskit/tag-group";

export default class TagGroupMerge extends React.Component {
  render() {
    return <TagGroup {...this.props}>{this.props.children}</TagGroup>;
  }
}

TagGroupMerge.propTypes = {
    /** Whether the tags should be left-aligned or right-aligned. */
    alignment: PropTypes.oneOf(["start", "end"]),
    /** Tags to render within the tag group. */
    children: PropTypes.node
};