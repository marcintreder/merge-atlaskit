import React from "react";
import PropTypes from "prop-types";
import {DropdownItemGroup} from "@atlaskit/dropdown-menu";

export default class DropdownItemGroupMerge extends React.Component {
    render() {
        return <DropdownItemGroup>{this.props.children}</DropdownItemGroup>;
    }
}

DropdownItemGroupMerge.propTypes = {
    children: PropTypes.node,
}