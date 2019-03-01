import React from "react";
import PropTypes from "prop-types";
import { DropdownItem as DropdownItemM } from "@atlaskit/dropdown-menu";

const DropdownItem = (props) => <DropdownItemM {...props} />

DropdownItem.propTypes = {
    children: PropTypes.node,
}

export default DropdownItem;