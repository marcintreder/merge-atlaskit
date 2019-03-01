import React from "react";
import PropTypes from "prop-types";
import { Grid as GridM } from "@atlaskit/page";

const Grid = (props) => <GridM {...props} />;

Grid.propTypes = {
    children: PropTypes.node,
    spacing: PropTypes.oneOf(["cosy", "comfortable", "compact"]),
    layout: PropTypes.oneOf(["fixed", "fluid"])
}

export default Grid;