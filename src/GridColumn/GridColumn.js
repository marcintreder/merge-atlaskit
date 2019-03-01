import React from "react";
import PropTypes from "prop-types";
import { GridColumn as GridColumnM } from "@atlaskit/page";

const GridColumn = (props) => <GridColumnM {...props} />

GridColumn.propTypes = {
    children: PropTypes.node,
    medium: PropTypes.number
}

export default GridColumn;