import React from "react";
import PropTypes from "prop-types";
import { DropdownItemGroupRadio as  DropdownItemGroupRadioM } from "@atlaskit/dropdown-menu";

const DropdownItemGroupRadio = (props) => <DropdownItemGroupRadioM {...props} />;

DropdownItemGroupRadio.propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,
    title: PropTypes.string
}

export default DropdownItemGroupRadio;