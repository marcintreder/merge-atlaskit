import React from "react";
import PropTypes from "prop-types";
import { GridColumn } from "@atlaskit/page";

export default class GridColumnMerge extends React.Component {
    render() {
        return <GridColumn {...this.props}>{this.props.children}</GridColumn>;
    }
}

GridColumnMerge.propTypes = {
    children: PropTypes.node,
    medium: PropTypes.number
}