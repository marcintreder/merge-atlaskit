import React from "react";
import PropTypes from "prop-types";
import FieldTextAreaM from "@atlaskit/field-text-area";

const FieldTextArea = (props) => <FieldTextAreaM {...props} />;

FieldTextArea.propTypes = {
    /** Set whether the fields should expand to fill available horizontal space. */
    compact: PropTypes.bool,
    /** Sets the field as uneditable, with a changed hover state. */
    disabled: PropTypes.bool,
    /** If true, prevents the value of the input from being edited. */
    isReadOnly: PropTypes.bool,
    /** Add asterisk to label. Set required for form that the field is part of. */
    required: PropTypes.bool,
    /** Sets styling to indicate that the input is invalid. */
    isInvalid: PropTypes.bool,
    /** Label to be displayed above the input. */
    label: PropTypes.string,
    /** Name value to be passed to the html input. */
    name: PropTypes.string,
    /** Text to display in the input if the input is empty. */
    placeholder: PropTypes.string,
    /** The value of the input. */
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    /** Handler to be called when the input changes. onChange?: (event: Event) => mixed, */
    onChange: PropTypes.func,
    /** Id value to be passed to the html input. */
    id: PropTypes.string,
    /** Sets whether to show or hide the label. */
    isLabelHidden: PropTypes.bool,
    /** Provided component is rendered inside a modal dialogue when the field is selected. */
    invalidMessage: PropTypes.node,
    /** Ensure the input fits in to its containing element. If the field is still resizable, 
    it will not be hotizontally resizable.*/
    shouldFitContainer: PropTypes.bool,
    /** Sets whether to apply spell checking to the content. */
    isSpellCheckEnabled: PropTypes.bool,
    /** Sets whether the component should be automatically focused on component render. */
    autoFocus: PropTypes.bool,
    /** Set the maximum length that the entered text can be. */
    maxLength: PropTypes.number,
    /** The minimum number of rows of text to display */
    minimumRows: PropTypes.number,
    /** Enables the resizing of the textarea (in both directions, or restricted to one axis) */
    enableResize: PropTypes.oneOf(["horizontal", "vertical"])
}

export default FieldTextArea;