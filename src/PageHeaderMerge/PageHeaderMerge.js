import React from "react";
import PropTypes from "prop-types";
import PageHeader from "@atlaskit/page-header";

export default class PageHeaderMerge extends React.Component {
    render() {
        return <PageHeader {...this.props}>{this.props.children}</PageHeader>;
    }
}

PageHeaderMerge.propTypes = {
    /** Page breadcrumbs to be rendered above the title. */
    breadcrumbs: PropTypes.element,
    /** Contents of the action bar to be rendered next to the page title. */
    actions: PropTypes.element,
    /** Contents of the header bar to be rendered below the page title. */
    bottomBar: PropTypes.element,
    /** Content of the page title. The text would be trimmed if it doesn't 
    fit the header width and end with an ellipsis */
    children: PropTypes.string,
    /** Disable default styles for page title */
    disableTitleStyles: PropTypes.bool,
    /** Prevent the title from wrapping across lines */
    truncateTitle: PropTypes.bool
}