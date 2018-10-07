import React from "react";
import PropTypes from "prop-types";
import Toggle from "@atlaskit/toggle";

export default class ToggleMerge extends React.Component {
  render() {
    return <Toggle {...this.props} />;
  }
}

ToggleMerge.propTypes = {
    /** Whether the toggle is disabled or not. This will prevent any interaction with the user */
    isDisabled: PropTypes.bool,
    /** Label to be set for accessibility */
    label: PropTypes.string,
    /** Descriptive name for value property to be submitted in a form */
    name: PropTypes.string,
    /** The value to be submitted in a form. */
    value: PropTypes.string,
    /** Handler to be called when toggle is unfocused */
    onBlur: PropTypes.func,
    /** Handler to be called when native 'change' event happens internally. */
    onChange: PropTypes.func,
    /** Handler to be called when toggle is focused. */
    onFocus: PropTypes.func,
    /** Defines the size of the toggle. */
    size: PropTypes.oneOf(["regular", "large"]),
    /** Whether the toggle is initially checked or not After initial mount 
    whether the component is checked or not is controlled by the component */
    isDefaultChecked: PropTypes.bool
};