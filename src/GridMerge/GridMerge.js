import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@atlaskit/page";

export default class GridMerge extends React.Component {
    render() {
        return <Grid {...this.props}>{this.props.children}</Grid>;
    }
}

GridMerge.propTypes = {
    children: PropTypes.node,
    spacing: PropTypes.oneOf(["cosy", "comfortable", "compact"]),
    layout: PropTypes.oneOf(["fixed", "fluid"])
}