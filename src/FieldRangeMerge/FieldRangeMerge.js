import React from "react";
import PropTypes from "prop-types";
import FieldRange from "@atlaskit/field-range";

export default class FieldRangeMerge extends React.Component {
    render() {
        return <FieldRange {...this.props} />;
    }
}

FieldRangeMerge.propTypes = {
    /** if the field range needs to be disabled */
    disabled: PropTypes.bool,
    /** Maximum value of the range */
    max: PropTypes.number,
    /** Minimum value of the range */
    min: PropTypes.number,
    /** Hook to be invoked on change of the range */
    onChange: PropTypes.func,
    /** Step value for the range */
    step: PropTypes.number,
    /** Value of the range */
    value: PropTypes.number   
}