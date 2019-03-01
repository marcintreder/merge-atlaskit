import React from "react";
import PropTypes from "prop-types";
import TagGroupM from "@atlaskit/tag-group";

const TagGroup = (props) => <TagGroupM {...props} />

TagGroup.propTypes = {
    /** Whether the tags should be left-aligned or right-aligned. */
    alignment: PropTypes.oneOf(["start", "end"]),
    /** Tags to render within the tag group. */
    children: PropTypes.node
};

export default TagGroup;