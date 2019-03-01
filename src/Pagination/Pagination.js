import React from "react";
import PropTypes from "prop-types";
import PaginationM from "@atlaskit/pagination";

const Pagination = (props) => <PaginationM {...props} />;

Pagination.propTypes = {
    /** The default current page. This makes the current page value uncontrolled. */
    defaultValue: PropTypes.number,
    /** Object that sets the labels for the previous and next buttons. It should have the properties 
    'prev' and 'next', which should be strings. Defaults to 'Prev' and 'Next' */
    i18n: PropTypes.shape({
        "prev": PropTypes.string,
        "next": PropTypes.string
    }),
    /** Called when the page is changed. Will be called with the number of the new page. */
    onChange: PropTypes.func,
    /** The total number of pages in the pagination. */
    total: PropTypes.number,
    /** The current page. This makes the current page value controlled */
    value: PropTypes.number
}

export default Pagination;