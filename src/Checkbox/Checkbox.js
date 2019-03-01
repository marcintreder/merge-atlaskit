import React from "react";
import PropTypes from "prop-types";
import { Checkbox as CheckboxM} from "@atlaskit/checkbox";

const Checkbox = (props) => <CheckboxM {...props} />;

Checkbox.propTypes = {
    /** Sets whether the checkbox begins checked. */
    defaultChecked: PropTypes.bool,
    /** Associated form id */
    form: PropTypes.bool,
    /** id assigned to input */
    id: PropTypes.bool,
    /** Callback to receive a reference. */
    inputRef: PropTypes.func,
    /** Sets whether the checkbox is checked or unchecked. */
    isChecked: PropTypes.bool,
    /** Sets whether the checkbox is disabled. */
    isDisabled: PropTypes.bool,
    /** Sets whether the checkbox should take up the full width of the parent. */
    isFullWidth: PropTypes.bool,
    /** Sets whether the checkbox is indeterminate. This only affects the style and 
    does not modify the isChecked property. */
    isIndeterminate: PropTypes.bool,
    /** Marks the field as invalid. Changes style of unchecked component. */
    isInvalid: PropTypes.bool,
    /** Marks the field as required & changes the label style. */
    isRequired: PropTypes.bool,
    /** The label to be displayed to the right of the checkbox. 
    The label is part of the clickable element to select the checkbox. */
    label: PropTypes.node,
    /** The name of the submitted field in a checkbox. */
    name: PropTypes.string,
    /** Function that is called whenever the state of the checkbox changes. 
    It will be called with an object containing the react synthetic event. 
    Use currentTarget to get value, name and checked */
    onChange: PropTypes.func,
    /** The value to be used in the checkbox input. This is the value that will be returned on form submission. */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default Checkbox;