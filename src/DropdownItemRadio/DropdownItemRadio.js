import React from "react";
import PropTypes from "prop-types";
import { DropdownItemRadio as DropdownItemRadioM } from "@atlaskit/dropdown-menu";

const DropdownItemRadio = (props) => <DropdownItemRadioM {...props} />;

DropdownItemRadio.propTypes = {
    children: PropTypes.node,
    id: PropTypes.string
}

export default DropdownItemRadio;