import React from "react";
import PropTypes from "prop-types";
import {DropdownItemRadio} from "@atlaskit/dropdown-menu";

export default class DropdownItemRadioMerge extends React.Component {
    render() {
        return <DropdownItemRadio>{this.props.children}</DropdownItemRadio>;
    }
}

DropdownItemRadioMerge.propTypes = {
    children: PropTypes.node,
    id: PropTypes.string
}