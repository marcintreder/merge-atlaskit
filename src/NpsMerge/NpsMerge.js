import React from "react";
import PropTypes from "prop-types";
import DefaultNPS from "@atlaskit/nps";

export default class NpsMerge extends React.Component {
    render() {
        return <DefaultNPS {...this.props} />;
    }
}

NpsMerge.propTypes = {
    /** The product the survey is for. This is only used to generate the default messages. */
    product: PropTypes.string,
    /** Can the survey be dismissed */
    canClose: PropTypes.bool,
    /** Callback called when the user dismisses a survey */
    onClose: PropTypes.func,
    /** Should the user be given the option to opt out of all future surveys */
    canOptOut: PropTypes.bool,
    /** Callback called when the user opts out of all future surveys */
    onOptOut: PropTypes.func,
    /** Callback called when the user selects a rating */
    onRatingSelect: PropTypes.func,
    /** Callback called when the user updates the comment */
    onCommentChange: PropTypes.func,
    /** Callback called when user selects a role */
    onRoleSelect: PropTypes.func,
    /** Callback called when the user updates the allowContact field */
    onAllowContactChange: PropTypes.func,
    /** Callback called when the user submits the score/comment portion of the survey */
    onFeedbackSubmit: PropTypes.func,
    /** Callback called when the user submits the followup portion of the survey */
    onFollowupSubmit: PropTypes.func,
    /** Callback called when the user finishes the survey */
    onFinish: PropTypes.func,
    /** List of roles for user to select from on Page 2 */
    roles: PropTypes.arrayOf(PropTypes.string)
}