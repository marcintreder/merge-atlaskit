import React from "react";
import PropTypes from "prop-types";
import { RadioGroup } from "@atlaskit/radio";

export default class RadioGroupMerge extends React.Component {
  render() {
    return <RadioGroup {...this.props} />;
  }
}

RadioGroupMerge.propTypes = {
    checkedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    defaultCheckedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    isRequired: PropTypes.bool,
    options: PropTypes.array,
    onInvalid: PropTypes.func,
    onChange: PropTypes.func
};