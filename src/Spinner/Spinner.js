import React from "react";
import PropTypes from "prop-types";
import SpinnerM from "@atlaskit/spinner";

const Spinner = (props) => <SpinnerM {...props} />;

Spinner.propTypes = {
    /** Time in milliseconds after component mount before spinner is visible. */
    delay: PropTypes.number,
    /** Set the spinner color to white, for use in dark-themed UIs. */
    invertColor: PropTypes.bool,
    /** Handler for once the spinner has completed its outro animation */
    onComplete: PropTypes.func,
    /** Size of the spinner. */
    size: PropTypes.oneOf(["xsmall", "small", "medium", "large", "xlarge"]),
    /** Whether the process is complete and the spinner should leave */
    isCompleting: PropTypes.bool
};

export default Spinner;