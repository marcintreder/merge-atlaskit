import React from "react";
import PropTypes from "prop-types";
import TextField from "@atlaskit/field-text";

export default class FieldTextMerge extends React.Component {
    render() {
        return <TextField {...this.props} />;
    }
}

FieldTextMerge.propTypes = {
    /** Standard HTML input autocomplete attribute. */
    autoComplete: PropTypes.oneOf(["on", "off"]),
    /** Standard HTML input form attribute. This is useful if the input cannot be included directly inside a form. */
    form: PropTypes.string,
    /** Standard HTML input pattern attribute, used for validating using a regular expression. */
    pattern: PropTypes.string,
    /** Set whether the fields should expand to fill available horizontal space. */
    compact: PropTypes.bool,
    /** Type value to be passed to the html input. */
    type: PropTypes.string,
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
    /** Standard input min attribute, to be used with type="number" */
    min: PropTypes.number,
    /** Standard input max attribute, to be used with type="number" */
    max: PropTypes.number,
    /** Text to display in the input if the input is empty. */
    placeholder: PropTypes.string,
    /** The value of the input. */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /** Handler to be called when the input loses focus. */
    onBlur: PropTypes.func,
    /** Handler to be called when the input changes. */
    onChange: PropTypes.func,
    /** Handler to be called when the input receives focus. */
    onFocus: PropTypes.func,
    /** Standard input onkeydown event. */
    onKeyDown: PropTypes.func,
    /** Standard input onkeypress event. */
    onKeyPress: PropTypes.func,
    /** Standard input onkeyup event. */
    onKeyUp: PropTypes.func,
    /** Id value to be passed to the html input. */
    id: PropTypes.string,
    /** Sets whether to show or hide the label. */
    isLabelHidden: PropTypes.bool,
    /** Provided component is rendered inside a modal dialogue when the field is selected. */
    invalidMessage: PropTypes.node,
    /** Ensure the input fits in to its containing element. */
    shouldFitContainer: PropTypes.bool,
    /** Sets whether to apply spell checking to the content. */
    isSpellCheckEnabled: PropTypes.bool,
    /** Sets whether the component should be automatically focused on component render. */
    autoFocus: PropTypes.bool,
    /** Set the maximum length that the entered text can be. */
    maxLength: PropTypes.number,
    /** Hide the validation message and style. This is used by to disable 
    Validation display handling by FieldBase */
    isValidationHidden: PropTypes.bool
}   