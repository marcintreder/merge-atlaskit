import React from "react";
import PropTypes from "prop-types";
import { BreadcrumbsStateless } from "@atlaskit/breadcrumbs";

export default class BreadcrumbsMerge extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isExpanded: false}
    }

    expand(e) {
        e.preventDefault();
        this.setState({isExpanded: true});
    }

    render() {
        return (<BreadcrumbsStateless isExpanded={this.state.isExpanded} onExpand={e => this.expand(e)} {...this.props}>
                    {this.props.children}
                </BreadcrumbsStateless>);
    }
}

BreadcrumbsMerge.propTypes = {
  /** Set the maximum number of breadcrumbs to display. When there are more than the maximum number, 
  only the first and last will be shown, with an ellipsis in between. */
  maxItems: PropTypes.number,
  /** A single or an array of. */
  children: PropTypes.node,
}