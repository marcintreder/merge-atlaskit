import React from "react";
import PropTypes from "prop-types";
import CommentM, {
  CommentAction,
  CommentAuthor,
  CommentEdited,
  CommentTime
} from "@atlaskit/comment";

export default class Comment extends React.Component {
  render() {
    const actions = this.props.actions
      ? this.props.actions.map(item => (
          <CommentAction
            onClick={this.props.actionOnClick}
            OnFocus={this.props.actionOnFocus}
            onMouseOver={this.props.actionOnMouseOver}
          >
            {item}
          </CommentAction>
        ))
      : false;
    const errorActions = this.props.errorActions
      ? this.props.errorActions.map(item => (
          <CommentAction
            onClick={this.props.actionOnClick}
            OnFocus={this.props.actionOnFocus}
            onMouseOver={this.props.actionOnMouseOver}
          >
            {item}
          </CommentAction>
        ))
      : false;

    return (
      <CommentM
        highlighted={this.props.highlighted}
        isSaving={this.props.isSaving}
        savingText={this.props.savingText}
        isError={this.props.isError}
        avatar={this.props.avatar}
        errorActions={errorActions}
        errorIconLabel={this.props.errorIconLabel}
        id={this.props.id}
        author={
          this.props.author ? (
            <CommentAuthor
              href={this.props.authorHref}
              onClick={this.props.authorOnClick}
              OnFocus={this.props.authorOnFocus}
              onMouseOver={this.props.authorOnMouseOver}
            >
              {this.props.author}
            </CommentAuthor>
          ) : (
            false
          )
        }
        type={this.props.type}
        edited={
          this.props.edited ? (
            <CommentEdited
              onClick={this.props.editedOnClick}
              OnFocus={this.props.editedOnFocus}
              onMouseOver={this.props.editedOnMouseOver}
            >
              Edited
            </CommentEdited>
          ) : (
            false
          )
        }
        restrictedTo={this.props.restrictedTo}
        time={
          this.props.time ? (
            <CommentTime
              href={this.props.timeHref}
              onClick={this.props.timeOnClick}
              OnFocus={this.props.timeOnFocus}
              onMouseOver={this.props.timeOnMouseOver}
            >
              {this.props.time}
            </CommentTime>
          ) : (
            false
          )
        }
        content={<p>{this.props.content}</p>}
        actions={this.props.actions.length > 0 ? actions : false}
      />
    );
  }
}

Comment.propTypes = {
  /** A CommentAuthor element containing the name of the comment author. */
  author: PropTypes.string,
  /** The type of the comment - will be rendered in a lozenge at the top of the Comment */
  type: PropTypes.string,
  /** The element to display as the Comment avatar - generally an Atlaskit Avatar */
  avatar: PropTypes.element,
  /** will be rendered beside the time to show whether the comment is edited or not */
  edited: PropTypes.string,
  /** Text to show in the "restricted to" label. Will display in the top items */
  restrictedTo: PropTypes.string,
  /** A CommentTime element containing the time to be displayed */
  time: PropTypes.string,
  /** The main content of the Comment */
  content: PropTypes.string,
  /** An list of CommentAction items rendered as a row of buttons below the comment content */
  actions: PropTypes.array,
  /** Nested comments should be provided as children of the Comment */
  children: PropTypes.node,
  /** Whether this comment should appear highlighted */
  highlighted: PropTypes.bool,
  /** Enable "optimistic saving" mode, remove actions and show savingText prop */
  isSaving: PropTypes.bool,
  /** Text to show when in "optimistic saving" mode */
  savingText: PropTypes.string,
  /** Indicates whether the component is in an error state - hides actions and time */
  isError: PropTypes.string,
  /** A list of CommentAction items rendered with a warning icon instead of the actions */
  errorActions: PropTypes.array,
  /** Text to show in the error icon label */
  errorIconLabel: PropTypes.string,
  /** Optional ID for the comment */
  id: PropTypes.string,
  /** Handler called when the action is clicked. */
  actionOnClick: PropTypes.func,
  /** Handler called when the action is focused. */
  actionOnFocus: PropTypes.func,
  /** Handler called when the action is moused over. */
  actionOnMouseOver: PropTypes.func,
  /** Handler called when the author is clicked. */
  authorOnClick: PropTypes.func,
  /** Handler called when the author is focused. */
  authorOnFocus: PropTypes.func,
  /** Handler called when the author is moused over. */
  authorOnMouseOver: PropTypes.func,
  /** The URL of the link. If not provided, the element will be rendered as text. */
  authorHref: PropTypes.func,
  /** Handler called when the edited is clicked. */
  editedOnClick: PropTypes.func,
  /** Handler called when the edited is focused. */
  editedOnFocus: PropTypes.func,
  /** Handler called when the edited is moused over. */
  editedOnMouseOver: PropTypes.func,
  /** Handler called when the time is clicked. */
  timeOnClick: PropTypes.func,
  /** Handler called when the time is focused. */
  timeOnFocus: PropTypes.func,
  /** Handler called when the time is moused over. */
  timeOnMouseOver: PropTypes.func,
  /** The URL of the link. If not provided, the element will be rendered as text. */
  timeHref: PropTypes.func
};
