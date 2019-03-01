import React from "react";
import PropTypes from "prop-types";
import { DropdownItemGroup as DropdownItemGroupM } from "@atlaskit/dropdown-menu";

const DropdownItemGroup = (props) => <DropdownItemGroupM {...props} />

DropdownItemGroup.propTypes = {
    children: PropTypes.node,
}

export default DropdownItemGroup;