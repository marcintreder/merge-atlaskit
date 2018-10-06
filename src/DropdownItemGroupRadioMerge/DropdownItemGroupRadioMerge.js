import React from "react";
import PropTypes from "prop-types";
import { DropdownItemGroupRadio } from "@atlaskit/dropdown-menu";

export default class DropdownItemGroupRadioMerge extends React.Component {
    render() {
        return <DropdownItemGroupRadio>{this.props.children}</DropdownItemGroupRadio>;
    }
}

DropdownItemGroupRadioMerge.propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,
    title: PropTypes.string
}