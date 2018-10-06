import React from "react";
import PropTypes from "prop-types";
import {DropdownItem} from "@atlaskit/dropdown-menu";

export default class DropdownItemMerge extends React.Component {
    render() {
        return <DropdownItem>{this.props.children}</DropdownItem>;
    }
}

DropdownItemMerge.propTypes = {
    children: PropTypes.node,
}