import React from "react";
import PropTypes from "prop-types";
import { Radio } from "@atlaskit/radio";

export default class RadioMerge extends React.Component {
  render() {
    return <Radio {...this.props} />;
  }
}

RadioMerge.propTypes = {
    /** the aria-label attribute associated with the radio element */
    ariaLabel: PropTypes.string,
    /** Field disabled */
    isDisabled: PropTypes.bool,
    /** Marks this as a required field */
    isRequired: PropTypes.bool,
    /** Field is invalid */
    isInvalid: PropTypes.bool,
    /** Set the field as checked */
    isChecked: PropTypes.bool,
    /** The label value for the input rendered to the dom */
    label: PropTypes.node,
    /** Field name */
    name: PropTypes.string,
    /** onChange event handler, passed into the props of each Radio 
    Component instantiated within RadioGroup */
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    onMouseDown: PropTypes.func,
    onMouseUp: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    /** onInvalid event handler, passed into the props of each Radio 
    Component instantiated within RadioGroup */
    onInvalid: PropTypes.func
};