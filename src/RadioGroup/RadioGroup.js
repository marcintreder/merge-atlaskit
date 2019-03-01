import React from "react";
import PropTypes from "prop-types";
import { RadioGroup as RadioGroupM } from "@atlaskit/radio";

const RadioGroup = (props) => <RadioGroupM {...props} />;

RadioGroup.propTypes = {
    checkedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    defaultCheckedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    isRequired: PropTypes.bool,
    options: PropTypes.array,
    onInvalid: PropTypes.func,
    onChange: PropTypes.func
};

export default RadioGroup;