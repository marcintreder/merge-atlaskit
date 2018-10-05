import React from "react";
import PropTypes from "prop-types";
import Badge from "@atlaskit/badge";

export default class BadgeMerge extends React.Component {
  render() {
    return <Badge {...this.props}>{this.props.children}</Badge>;
  }
}

BadgeMerge.propTypes = {
    /** Affects the visual style of the badge. */
    appearance: PropTypes.oneOf(["added", "default", "important", "primary", "primaryInverted", "removed",]),
    /** Supercedes the value props. The value displayed within the badge. */
    children: PropTypes.number,
    /** The maximum value to display. If value is 100, and max is 50, "50+" will be displayed */
    max: PropTypes.number,
    /** The theme the component should use. */
    theme: PropTypes.func
}